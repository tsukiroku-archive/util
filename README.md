# tsukiroku-util

```sh
npm i tsukiroku-util@latest
```

# Examples

```ts
import { arrayToObject } from "tsukiroku-util";

console.log(arrayToObject(["hello", "world"], (k: string) => {
    return `${k}!`;
}));
```

> See [typelevel](https://github.com/tsukiroku/type) for useful type-level utilities.