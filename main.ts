import { mkdirSync, writeFileSync } from "node:fs";

const LINE: string =
  "I asked my smart fridge what's for dinner and it said 'you have 14 sauces and no plan' — honestly, fair.";

mkdirSync("/output", { recursive: true });

writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
