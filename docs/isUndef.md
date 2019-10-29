#isUndef(*),新增于v0.0.1
判断数据类型是否为Object
##入参
| 参数名 | 类型 | 备注 |
| ------ | ---- | ---- |
| *   | * | 需要判断类型的数据 |
##return
(Boolean): 是否为undefined、null之一,是=true,否=false
##example
    const utils = require('jm365@utils')
    const undef = undefined
    const notUndef = ''
    console.log(utils.isUndef(undef)) // true
    console.log(utils.isUndef(notUndef)) // false
