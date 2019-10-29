#isNative(fn),新增于v0.0.1
判断一个方法是否为原生
##入参
| 参数名 | 类型 | 备注 |
| ------ | ---- | ---- |
| fn   | Function | 需要判断方法 |
##return
(Boolean): 是否为原生,是=true,否=false
##example
    const utils = require('jm365@utils')
    const notNativeFn = () => {
        // some code...
    }
    console.log(utils.isObject(Object.assign)) // true
    console.log(utils.isObject(notNativeFn)) // false
