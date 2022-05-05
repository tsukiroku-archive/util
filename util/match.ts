interface IMatch<T> {
    v?: T;
    then: (v?: T) => any;
}

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