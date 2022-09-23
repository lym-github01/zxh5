const utilsMixins = {
  mounted() {
    this.$wow.init()
  },
  methods: {
    //跳转到在线客服
    toKf() {
      window.open('http://113.140.85.54:8818/im/text/0otdly.html', 'target')
    },
    //点击菜单页面滚动到指定位置
    setScrollTop(topNum = -45) {
      var timer = 3000;
      let _this = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop < _this.findPosY(document.getElementById("w"), topNum) - 50) {
          scrollTo(0, oTop + 50);
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    },
    findPosY(obj, topNum) {
      //     //obj为所要计算的元素,可用id或class获取
      var top = 0;
      if (obj.offsetParent) {
        do {
          top += obj.offsetTop + topNum;
        } while ((obj = obj.offsetParent));
        return [top];
      }
    },
  }
}
export {
  utilsMixins
}
