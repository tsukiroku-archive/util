"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToObject = void 0;
/**
 *
 * @param array Array of strings
 * @param callback (k: any) => any
 *
 * # Example:
 * ```ts
 * arrayToObject(["Hello", "World"], (k: string) => {
 *     return `${k}!`;
 * });
 * ```
 * # Result:
 * `{ "hello": "Hello!", "World": "world!" }`
 */
const arrayToObject = (array, callback) => {
    return array.reduce((obj, key) => ({
        ...obj,
        [key]: callback(key),
    }), {});
};
exports.arrayToObject = arrayToObject;
