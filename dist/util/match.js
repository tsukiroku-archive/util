"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
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
const match = (v, ...matchs) => {
    let result = v;
    if (!matchs.includes({ v: v, then: () => { } })) {
        matchs.forEach(m => {
            if (!m.v)
                result = m.then(v);
        });
    }
    matchs.forEach(m => {
        if (m.v == v)
            result = m.then(v);
    });
    return result;
};
exports.match = match;
