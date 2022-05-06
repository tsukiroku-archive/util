```sh
npm i @tsukiroku/util
```

# Examples

```ts
import { arrayToObject, match } from ".";

console.log(
    arrayToObject(["hello", "world"], (k: string) => {
        return `${k}!`;
    })
);

console.log(
    match(
        "3",
        { v: "1", then: () => "one" },
        { v: "2", then: () => "two" },
        { v: "3", then: () => "three" },
        { then: (v?: string) => `other: ${v}` }
    )
); // three
```

---

> See [typelevel](https://github.com/tsukiroku/type) for useful type-level utilities.