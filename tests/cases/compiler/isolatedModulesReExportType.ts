// @isolatedModules: true

// @Filename: /exportT.ts
export type T = number;

// @Filename: /exportValue.ts
export class C {}

// @Filename: /exportEqualsT.ts
declare type T = number;
export = T;


// @Filename: /user.ts
// Error, can't re-export something that's only a type.
export { T } from "./exportT";
export import T2 = require("./exportEqualsT");

// OK, has a value side
export { C } from "./exportValue";

// OK, even though the namespace it exports is only types.
import * as NS from "./exportT";
export { NS };

// OK, syntactically clear that a type is being re-exported.
export type T3 = T;

// Error, not clear (to an isolated module) whether `T4` is a type.
import { T } from "./exportT";
export { T as T4 };
