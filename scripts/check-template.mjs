#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const required = [
  "README.md",
  "PRIVACY.md",
  "LIMITED_USE_DISCLOSURE.md",
  "SECURITY.md",
  ".env.example",
  "docs/ARCHITECTURE.md",
  "docs/SETUP.md",
  "docs/PUBLICATION_CHECKLIST.md",
  "prompts/SETUP_FOR_AGENT.md",
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

const env = fs.readFileSync(path.join(root, ".env.example"), "utf8");
const suspicious = [
  /AIza[0-9A-Za-z_-]{20,}/,
  /sk-[A-Za-z0-9_-]{20,}/,
  /postgres:\/\/[^:\s]+:[^@\s]+@/,
];

for (const pattern of suspicious) {
  if (pattern.test(env)) {
    console.error(`.env.example appears to contain a non-placeholder secret matching ${pattern}`);
    process.exit(1);
  }
}

console.log("Template checks passed.");

