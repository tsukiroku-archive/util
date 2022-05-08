interface IMatch<T, U> {
    v?: T;
    then: (v?: T | U) => any;
}
/**
 *
 * @param v Generic T
 * @param matchs Array of IMatch<U>
 *
 * # Example:
 * ```ts
 * match('3',
 *      { v: '1', then: () => "one" },
 *      { v: '2', then: () => "two" },
 *      { v: '3', then: () => "three" },
 *      { then: (v?: string) => `other: ${v}` },
 * );
 * ```
 * # Result:
 * `three`
 */
declare const match: <T, U>(v: T, ...matchs: IMatch<T, U>[]) => T;
export { match };
