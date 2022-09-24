<template>
  <div>
    <!--    头部图片模块-->
    <div class="bkImg">
      <img src="../assets/images/headerIconImg.png"/>
    </div>
    <div class="centen">
      <!--    视频模块-->
      <div class="videoClass">
        <video playsinline="" autoplay controls style="width:100%; height:100%;object-fit: fill">
          <source src="https://outsourcing-zhongxinzhengquan.oss-cn-hangzhou.aliyuncs.com/zxzq.m4v" type="video/x-m4v">
        </video>
      </div>
      <!--    关于我们-->
      <div class="aboutUs">
        <div class="paddingClass">
          <img src="../assets/images/aboutUs.png"/>
          <div class="tags">
            <div :class="item.check?item.checkClassName:item.className" v-for="(item,index) in tagObj" :key="index"
                 @click="checkTag(item.name)"></div>
          </div>
        </div>
        <div class="textClass">
          <div v-for="(item,index) in tagObj" :key="index">
            <img :src="item.content" v-if="item.check"/>
          </div>
        </div>
      </div>
      <!--      面向人群-->
      <div class="toCrowd">
        <div class="paddingClass">
          <img src="../assets/images/mxrq.png"/>
        </div>
        <img class="textClass" src="../assets/images/mxrqTxt.png"/>
      </div>
      <!--      职业机会-->
      <div class="career">
        <div class="paddingClass">
          <img src="../assets/images/zyjh.png"/>
        </div>
        <div class="textClass">
          <img :src="zyjhTxt"/>
          <div class="tags">
            <div :class="item.check?item.checkClassName:item.className" v-for="(item,index) in zyjhTagObj" :key="index"
                 @click="zyjhCheck(item.name)"></div>
          </div>
          <div class="hr">
            <div class="hrPadding">
              <div class="hrDivClass" v-for="item in zyjhTagObj"></div>
            </div>
          </div>
        </div>
      </div>
      <!--      投递方式-->
      <div class="delivery">
        <div class="paddingClass">
          <img src="../assets/images/tdfs.png"/>
        </div>
        <img class="textClass" src="../assets/images/tdfsTxt.png"/>
      </div>
      <!--      即将上线-->
      <div class="online">
        <img class="textClass" src="../assets/images/jjsxTxt.png"/>
      </div>
      <!--      常见问答-->
      <div class="qa">
        <div class="paddingClass">
          <img src="../assets/images/cjwd.png"/>
        </div>
        <img class="textClass" src="../assets/images/cjwdTxt.png"/>
      </div>
      <!--      底部内容-->
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
import gsjsTxt from '../assets/images/gsjsTxt.png'
import yjzzTxt from '../assets/images/yjzzTxt.png'
import shzrTxt from '../assets/images/shzrTxt.png'
import zpywTxt from '../assets/images/zpywTxt.png'
import xzrlTxt from '../assets/images/xzrlTxt.png'
import gzddTxt from '../assets/images/gzddTxt.png'

export default {
  data() {
    return {
      tagObj: [
        {
          name: 'gsjsTag',
          check: true,
          className: 'gsjsTag',
          checkClassName: "gsjsTagCheck",
          content: gsjsTxt
        },
        {
          name: "yjzzTag",
          check: false,
          className: 'yjzzTag',
          checkClassName: "yjzzTagCheck",
          content: yjzzTxt
        },
        {
          name: "shzrTag",
          check: false,
          className: 'shzrTag',
          checkClassName: "shzrTagCheck",
          content: shzrTxt
        }
      ],
      zyjhTagObj: [
        {
          name: 'zpywTag',
          check: true,
          className: 'zpywTag',
          checkClassName: "zpywTagCheck",
          content: zpywTxt
        },
        {
          name: 'xzrlTag',
          check: false,
          className: 'xzrlTag',
          checkClassName: "xzrlTagCheck",
          content: xzrlTxt
        },
        {
          name: 'gzddTag',
          check: false,
          className: 'gzddTag',
          checkClassName: "gzddTagCheck",
          content: gzddTxt
        },
      ],
      zyjhTxt: zpywTxt
    }
  },
  methods: {
    checkTag(val) {
      this.tagObj.map((item) => {
        item.name === val ? item.check = true : item.check = false
      })
    },
    zyjhCheck(val) {
      this.zyjhTagObj.map((item) => {
        item.name === val ? (item.check = true, this.zyjhTxt = item.content) : item.check = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.bkImg {
  width: 360px;
  height: 533px;
  background-image: url("../assets/images/headerImg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  img {
    width: 142px;
    height: 149px;
    position: absolute;
    top: 211px;
  }
  @-webkit-keyframes zy{
    10% {
      transform: rotate(4deg);
    }
    20% {
      transform: rotate(8deg);
    }
    30% {
      transform: rotate(12deg);
    }
    40% {
      transform: rotate(16deg);
    }
    50% {
      transform: rotate(20deg);
    }
    60% {
      transform: rotate(16deg);
    }
    70% {
      transform: rotate(12deg);
    }
    80% {
      transform: rotate(8deg);
    }
    90% {
      transform: rotate(4deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  /* 使用 */
  img {
    /* 兼容写法 */
    animation: zy 2.5s .15s linear infinite;
    -moz-animation: zy 2.5s .15s linear infinite; /* Firefox */
    -webkit-animation: zy 2.5s .15s linear infinite; /* Safari and Chrome */
    -o-animation: zy 2.5s .15s linear infinite; /* Opera */
  }
}

.centen {
  background-image: url("../assets/images/bkImg.png");
  background-size: 360px 4600px;
  background-repeat: no-repeat;

  .footer {
    width: 360px;
    height: 500px;
    background-image: url("../assets/images/footerImg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 20px;
  }

  .qa {
    .paddingClass {
      padding: 40px 20px 10px 20px;

      img {
        width: 321px;
        height: 48px;
      }
    }

    .textClass {
      width: 360px;
      margin-top: 10px;
    }
  }

  .online {
    margin-top: 20px;

    .textClass {
      width: 360px;
      margin-top: 10px;
    }
  }

  .delivery {
    .paddingClass {
      padding: 40px 20px 10px 20px;

      img {
        width: 321px;
        height: 48px;
      }
    }

    .textClass {
      width: 360px;
      margin-top: 10px;
    }
  }

  .career {
    .paddingClass {
      padding: 40px 20px 10px 20px;

      img {
        width: 321px;
        height: 48px;
      }
    }

    .textClass {
      width: 360px;
      height: 217px;
      margin-top: 10px;
      position: relative;

      .hr {
        width: 360px;
        border-bottom: 1.33px solid #34377D;
        position: absolute;
        top: 40px;
        opacity: 0.3;

        .hrPadding {
          padding: 0 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .hrDivClass {
            width: 75px;
            height: 1.33px;
            opacity: 1 !important;
            background-color: #5952AD;
            position: absolute;
            z-index: 2;
          }
        }
      }

      img {
        width: 360px;
        height: 217px;
        position: absolute;
        z-index: 1;
      }

      .tags {
        width: 321px;
        height: 20.33px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 20px 0 20px;
        position: absolute;
        z-index: 9;

        .zpywTag, .xzrlTag, .gzddTag, .zpywTagCheck, .xzrlTagCheck, .gzddTagCheck {
          width: 96px;
          height: 27px;
          background-image: url("../assets/images/zpyw.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .zpywTagCheck {
          background-image: url("../assets/images/zpywCheck.png");
        }

        .xzrlTagCheck {
          background-image: url("../assets/images/xzrlCheck.png");
        }

        .gzddTagCheck {
          background-image: url("../assets/images/gzddCheck.png");
        }

        .xzrlTag {
          background-image: url("../assets/images/xzrl.png");
        }

        .gzddTag {
          background-image: url("../assets/images/gzdd.png");
        }

        div {
          width: 105px;
          height: 30px;
        }
      }
    }
  }

  .toCrowd {
    .textClass {
      width: 360px;
      margin-top: 10px;
    }

    .paddingClass {
      padding: 40px 20px 10px 20px;

      img {
        width: 321px;
        height: 48px;
      }
    }
  }

  .aboutUs {
    width: 321px;

    .textClass {
      width: 360px;

      div:nth-child(1) {
        img {
          width: 100%;
          height: 200px;
        }
      }

      img {
        width: 100%;
        height: 125px;
      }
    }

    .paddingClass {
      padding: 40px 20px 10px 20px;

      .tags {
        width: 321px;
        height: 20.33px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;

        .gsjsTag, .yjzzTag, .shzrTag, .gsjsTagCheck, .yjzzTagCheck, .shzrTagCheck {
          width: 105px;
          height: 30px;
          background-image: url("../assets/images/gsjs.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .gsjsTagCheck {
          background-image: url("../assets/images/gsjsCheck.png");
        }

        .yjzzTagCheck {
          background-image: url("../assets/images/yjzzCheck.png");
        }

        .shzrTagCheck {
          background-image: url("../assets/images/shzrCheck.png");
        }

        .yjzzTag {
          background-image: url("../assets/images/yjzz.png");
        }

        .shzrTag {
          background-image: url("../assets/images/shzr.png");
        }

        div {
          width: 105px;
          height: 30px;
        }
      }

      img {
        width: 321px;
        height: 48px;
      }
    }
  }

  .videoClass {
    height: 500px;
    padding: 0 20px 0 20px;
  }
}

</style>
