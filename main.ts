// Invent a Word We Need — entry program (make.fun, program/v1).
//
// Writes the entry — one invented English word plus its one-line
// definition — to /output/entry.txt.
//
// The word: TEXTPECT (verb) — text + expect.
// The gap it fills: everyone who messages has lived this moment, and
// English has no single word for it: staring at the three dots of a
// typing indicator, waiting for a reply that never arrives.
// The word is sayable, spellable and memorable, and it sounds like
// English could have grown it: text + expect, with the middle
// collapsing the way "brunch" collapses breakfast + lunch.
// Word choice was checked before writing: "textpect" has no prior use
// as a word, while the first candidate, "roomnesia", is already in
// print (a 2015 newspaper coinage), so it was rejected.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Textpect (v.) — to stare at the three pulsing dots of a typing indicator, waiting for a reply that never comes.";

// Gate from the competition rules: /output/entry.txt must be UTF-8
// text of 1 to 140 characters, not only white space.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, outside the 1–140 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8"); // no trailing newline: the gate counts every character
console.log(`wrote ${chars} characters to ${outPath}`);
