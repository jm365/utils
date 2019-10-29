# deepClone(obj),新增于v0.0.1

深拷贝一个对象

## 入参

| 参数名 | 类型 | 是否毕传 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| obj | Object/Array | 是 | {a: {a: 1}} |  |

## return

(Object/Array): 深拷贝之后的数据

## example

    const utils = require('jm365@utils')
    const obj1 = {a: {a: 1}}
    const obj2 = utils.deepClone(obj1)
    obj2.a.a = 2 
    console.log(obj1.a.a) // 1
