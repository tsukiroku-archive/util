"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
console.log((0, util_1.arrayToObject)(["hello", "world"], (k) => {
    return `${k}!`;
}));
console.log((0, util_1.match)("4", { v: "1", then: () => 1 }, { v: "2", then: () => 2 }, { v: "3", then: () => 3 }, { then: (v) => `other: ${v}` })); // three
