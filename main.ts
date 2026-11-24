// Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X".
// The entry itself is a post on X. This program's only job is to hand the
// post's address to the grader: it copies POST.json from the repository
// root into the output directory, byte for byte, and writes nothing else.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "POST.json");
try {
  copyFileSync(source, join(outputDir, "POST.json"));
} catch (err) {
  console.error(`Could not copy ${source}: ${(err as Error).message}`);
  process.exit(1);
}
