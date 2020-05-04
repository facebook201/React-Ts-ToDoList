export default {
  dateFormat(time: number, fmt = 'yyyy-MM-dd hh:mm:ss'): string {
    let T = new Date(time);
  
    let O = {
      'M+': T.getMonth() + 1, // 月
      'd+': T.getDate(),
      'h+': T.getHours(),
      'm+': T.getMinutes(),
      's+': T.getSeconds(),
      'q+': Math.floor((T.getMonth() + 3) / 3)
    };
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (T.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    let target: any = O;
    
    for (let k in target) {
      const value = target[k];
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? value : ('00' + value).substr(("" + value).length));
      }
    }
    return fmt;
  }
};