# isPrimitive(*),新增于v0.0.1

判断数据是否为原始数据类型，`string`、`number`、`symbol`、`boolean`

## 入参

| 参数名 | 类型 | 备注 |
| ------ | ---- | ---- |
| *   | * | 需要判断类型的数据 |

## return

(Boolean): 是否为空,是=true,否=false

## example

    const utils = require('jm365@utils')
    const empty = undefined
    const notEmpty = 0
    console.log(utils.isEmpty(empty)) // true
    console.log(utils.isEmpty(notEmpty)) // false
