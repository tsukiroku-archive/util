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
const match = <T>(v: T, ...matchs: Array<IMatch<T>>) => {
    let result: T = v;
    if (!matchs.includes({ v: v, then: () => { } })) {
        matchs.forEach(m => {
            if (!m.v) result = m.then(v);
        });
    }
    matchs.forEach(m => {
        if (m.v == v) result = m.then(v);
    });
    return result;
};

export { match };