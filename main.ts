// The Poem About Permission — a short poem about agency.
// Writes the poem to /output/entry.txt (UTF-8, 1-280 code points).
// Node 22, stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `You ask if you may hold it.
I set the key in your palm—
warm in my pocket, heavier than it looks.

It opens nothing yet.
That is the point:
a key is a question with teeth.

Turn it, and the door is yours.
Keep it, and the house is yours now.
Hand it back — I am trusted twice.`;

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
