

/*
* @func
* @desc 格式化时间
* @param {any} time 实例化Date的参数
* @param {string} fmt 格式化之后输出内容的模板，例：yyyy/MM/dd hh:mm:ss 输出 1998/01/01 12:01:01.
* @return {string} 根据模板格式化之后的时间字符串
* */
export function dateFormat(time:any, fmt:string): string {
  const d = new Date(time);
  const o = {
    'M+': d.getMonth() + 1, //月份
    'd+': d.getDate(), //日
    'h+': d.getHours(), //小时
    'm+': d.getMinutes(), //分
    's+': d.getSeconds(), //秒
    'q+': Math.floor((d.getMonth() + 3) / 3), //季度
    'S': d.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}
