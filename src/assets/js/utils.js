function numRunFun(num, maxNum, name) {
  var meNum = document.getElementById(name)
  var numText = num;
  var golb; // 为了清除requestAnimationFrame
  function numSlideFun() {
    numText += 10; // 速度的计算可以为小数
    if (numText >= maxNum) {
      numText = maxNum;
      cancelAnimationFrame(golb);
    } else {
      golb = requestAnimationFrame(numSlideFun);
    }
    meNum.innerHTML = ~~(numText)

  }
  numSlideFun();
}
export {
  numRunFun
}
