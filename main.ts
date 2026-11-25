import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The coined word and its one-line definition. The gap: everyone has
// waved back at a stranger who was waving at the person behind them —
// and no English word names that moment until now.
const WORD = "Waveback";
const DEFINITION =
  "waving back at someone who was actually waving at the person behind you.";

function buildEntry(word: string, definition: string): string {
  const entry = `${word}: ${definition}`;
  if (entry.length < 1 || entry.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${entry.length}`);
  }
  return entry;
}

function writeEntry(outDir: string, entry: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeEntry(outDir, buildEntry(WORD, DEFINITION));
}

main();
