"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
console.log((0, util_1.arrayToObject)(["hello", "world"], (k) => {
    return `${k}!`;
}));
console.log((0, util_1.match)("3", { v: "1", then: () => "one" }, { v: "2", then: () => "two" }, { v: "3", then: () => "three" }, { then: (v) => `other: ${v}` })); // three
