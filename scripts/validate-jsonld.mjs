import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const INCLUDED_EXTENSIONS = new Set(['.html', '.js', '.jsx', '.mjs', '.ts', '.tsx']);
const SKIPPED_DIRECTORIES = new Set(['.git', 'dist', 'node_modules']);
const JSON_LD_PATTERN = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

const issues = [];
const matches = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (SKIPPED_DIRECTORIES.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    if (!INCLUDED_EXTENSIONS.has(path.extname(entry.name))) {
      continue;
    }

    await inspectFile(fullPath);
  }
}

async function inspectFile(filePath) {
  const content = await readFile(filePath, 'utf8');
  JSON_LD_PATTERN.lastIndex = 0;
  let match;

  while ((match = JSON_LD_PATTERN.exec(content)) !== null) {
    const rawJson = match[1].trim();
    const line = content.slice(0, match.index).split('\n').length;
    const relativePath = path.relative(ROOT_DIR, filePath);

    if (!rawJson) {
      issues.push(`${relativePath}:${line} contains an empty JSON-LD script block.`);
      continue;
    }

    let parsed;

    try {
      parsed = JSON.parse(rawJson);
    } catch (error) {
      issues.push(`${relativePath}:${line} contains invalid JSON-LD JSON: ${error.message}`);
      continue;
    }

    if (!hasSchemaOrgContext(parsed)) {
      issues.push(`${relativePath}:${line} is missing a schema.org @context.`);
    }

    if (!hasSchemaOrgType(parsed)) {
      issues.push(`${relativePath}:${line} is missing a schema.org @type.`);
    }

    matches.push(`${relativePath}:${line}`);
  }
}

function hasSchemaOrgContext(node) {
  if (Array.isArray(node)) {
    return node.every(hasSchemaOrgContext);
  }

  if (!isPlainObject(node)) {
    return false;
  }

  if (contextContainsSchemaOrg(node['@context'])) {
    return true;
  }

  if (Array.isArray(node['@graph']) && node['@graph'].length > 0) {
    return node['@graph'].every(hasSchemaOrgContext);
  }

  return false;
}

function contextContainsSchemaOrg(contextValue) {
  if (typeof contextValue === 'string') {
    return contextValue.includes('schema.org');
  }

  if (Array.isArray(contextValue)) {
    return contextValue.some(contextContainsSchemaOrg);
  }

  if (isPlainObject(contextValue)) {
    return Object.values(contextValue).some(contextContainsSchemaOrg);
  }

  return false;
}

function hasSchemaOrgType(node) {
  if (Array.isArray(node)) {
    return node.every(hasSchemaOrgType);
  }

  if (!isPlainObject(node)) {
    return false;
  }

  if (isNonEmptyType(node['@type'])) {
    return true;
  }

  if (Array.isArray(node['@graph']) && node['@graph'].length > 0) {
    return node['@graph'].every(hasSchemaOrgType);
  }

  return false;
}

function isNonEmptyType(typeValue) {
  if (typeof typeValue === 'string') {
    return typeValue.trim().length > 0;
  }

  if (Array.isArray(typeValue)) {
    return typeValue.some((entry) => typeof entry === 'string' && entry.trim().length > 0);
  }

  return false;
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

await walk(ROOT_DIR);

if (matches.length === 0) {
  console.error('No JSON-LD script blocks were found.');
  process.exit(1);
}

if (issues.length > 0) {
  console.error('JSON-LD validation failed:\n');
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`Validated ${matches.length} JSON-LD script block(s):`);
for (const location of matches) {
  console.log(`- ${location}`);
}
