#isArray(*),新增于v0.0.1
判断数据类型是否为Array
##入参
| 参数名 | 类型 | 备注 |
| ------ | ---- | ---- |
| *   | * | 需要判断类型的数据 |
##return
(Boolean): 是否为数组,是=true,否=false
##example
    const utils = require('jm365@utils')
    const arr = []
    const notArr = null
    console.log(utils.isArray(arr)) // true
    console.log(utils.isArray(notArr)) // false
