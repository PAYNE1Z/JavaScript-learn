// 示例: 获取随机颜色rgb(0~255,0~255,0~255)

// 引入getIntNum函数
document.write("<script  src='get_int_num.js'></script");

function getRandomColor() {
  var r = getIntNum(0,255), g = getIntNum(0,255), b = getIntNum(0,255);
  // 模版字符串 `${var}`
  var _color = `rgb(${r},${g},${b})`;
  return _color;
}
