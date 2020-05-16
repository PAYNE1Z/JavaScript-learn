// 示例: 获取随机验证码 四位(数字+字母)

// 引入getIntNum函数
document.write("<script  src='get_int_num.js'></script");

function getVerificationCode() {
  var randomArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var code = '', codeLength = 4;
  for (i=0; i<codeLength; i++) {
    var index = getIntNum(0, randomArray.length) - 1
    code += randomArray[index]; // 取随机索引,并从列表中取元素进行拼接
  }
  return code;
}
