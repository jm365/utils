#dateFormat(time, fmt),新增于v0.0.1
判断一个方法是否为原生
##入参
| 参数名 | 类型 | 是否毕传 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| time | number/string | 是 |  | 用于实例化Date的参数，建议用时间戳 |
| fmt | string | 是 | yyyy/MM/dd hh:mm:ss | 日期格式 |
##return
(string): 格式化后的日期
##example
    const utils = require('jm365@utils')
    const now = utils.dateFormat(Date.now(), yyyy/MM/dd hh:mm:ss)
    console.log(now) // 2019/08/08 12:01:01
