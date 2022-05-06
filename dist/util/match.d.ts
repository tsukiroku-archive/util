interface IMatch<T> {
    v?: T;
    then: (v?: T) => any;
}
/**
 *
 * @param v Generic T
 * @param matchs Array of IMatch<T>
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
declare const match: <T>(v: T, ...matchs: IMatch<T>[]) => T;
export { match };
