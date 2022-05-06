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
declare const arrayToObject: <T>(array: Array<string>, callback: (k: any) => T) => {
    [key: string]: T;
};
export { arrayToObject };
