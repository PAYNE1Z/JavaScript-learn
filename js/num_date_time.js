// 返回当前数字时钟格式时间  如: 2020-02-01 8:08:08 PM
function makeNumDateTime(dateObject) {
  var year = dateObject.getFullYear();
  var month = dateObject.getMonth();
  var day = dateObject.getDate();
  var hour = dateObject.getHours();
  var minute = dateObject.getMinutes();
  var second = dateObject.getSeconds();

  // 对小于10的月 日 分 秒前面补0, 计算PM或AM,小时换成12小时制
  month = (month < 10 ? '0' + month : month);
  day = (day < 10 ? '0' + day : day);
  minute = (minute < 10 ? '0' + minute : minute);
  second = (second < 10 ? '0' + second : second);
  pmOrAm = (hour <= 12 ? 'AM.' : 'PM');
  hour = (hour <= 12 ? hour : hour-12);
  dateTimeNumStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ' ' + pmOrAm
  return dateTimeNumStr
}
