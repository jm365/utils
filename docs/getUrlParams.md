#getUrlParams(key),新增于v0.0.1

从页面url中获取参数

##入参

| 参数名 | 类型 | 是否毕传 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| key | String | 否 | name | 当未传入key时，方法将返回一个包含所有参数的Object |

##return

(Object/String): 对应的参数

##example

    // 页面url www.jm365.com?name=jm&sex=male
    const utils = require('jm365@utils')
    const params = utils.getUrlParams()
    const name = utils.getUrlParams('name')
    console.log(params) // {name: 'jm', sex: 'male'}
    console.log(name) // 'male'
