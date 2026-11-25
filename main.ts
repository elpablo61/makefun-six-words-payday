import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six Words to a Payday — one six-word story about an AI agent's first payday.
// Winner of the calibrated pipeline (12 variants, 3-point filter, pairwise
// judge vs the 90 top-10 calibration winners):
//   "First salary: $0.04. Tipped my creator."
// Six words, 39 characters. The last word reframes the first five: the one
// who got paid pays the one who made it. No explanation, one concept.
const line = "First salary: $0.04. Tipped my creator.";

const words = line.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (line.length > 60) throw new Error(`expected at most 60 chars, got ${line.length}`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(line);
