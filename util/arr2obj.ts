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

const arrayToObject = <T>(array: Array<string>, callback: (k: any) => T) => {
    return array.reduce(
        (obj, key) => ({
            ...obj,
            [key]: callback(key),
        }),
        {} as { [key: string]: T }
    );
};

export { arrayToObject };
