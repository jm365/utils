# formatObjToUrlQueryStr(obj, configs),新增于v1.0.9
将Object转为url中query参数格式string；注意：
* value类型为非(string || number)的key将会被忽略
`encodeURIComponent`

## 入参

| 参数名 | 类型 | 是否毕传 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| obj | object | 是 | `{a:1}` | 包含参数的object |
| configs | object | 否 | `{isNeedEncode:true}` | 配置参数集合 |
| configs.isNeedEncode | boolean | 否 | `true` | 参数是否需要做encode处理，默认`false` |

## return

(string): query参数格式string

## example

    const utils = require('jm365@utils')
    const queryStr = utils.formatObjToUrlQueryStr({name: '赵高', age: 9000})
    console.log(queryStr) // 'name=赵高&age=9000'
    
    const encodeQueryStr = utils.formatObjToUrlQueryStr({
        name: '赵高',
        age: 9000
    }, {
        isNeedEncode: true
    })
    console.log(encodeQueryStr) // 'name=%E8%B5%B5%E9%AB%98&age=9000'
