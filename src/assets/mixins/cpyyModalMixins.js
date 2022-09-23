import {RETCODE, SUCCESS} from "../js/const";

const cpyyModalMixins = {
  data(){
    return{
      showDialogData: false,
      fromObj: {
        name: '',
        sex: '1',
        phone: '',
        companyName: '',
        demandDesc: ''
      },
      modal_loading: false,
    }
  },
  methods: {
    // 点击产品试用弹出试用弹框
    showDialog() {
      this.showDialogData = true
    },
    closeModal() {
      this.showDialogData = false
      this.fromObj = {
        name: '',
        sex: '1',
        phone: '',
        companyName: '',
        demandDesc: ''
      }
    },
    // 立即预约按钮
    add() {
      //判断是否所有信息都填写
      if (!!this.fromObj.name && !!this.fromObj.sex && !!this.fromObj.phone && !!this.fromObj.companyName && !!this.fromObj.demandDesc) {

        this.$axios({
          base: "opUrl",
          method: "post",
          must: true,
          url: "/appointment/save",
          data: this.fromObj,
        }).then((res) => {
          this.closeModal()
          if (res.data[RETCODE] === SUCCESS) {
            this.$Message.success("已成功预约！我们将尽快联系您！");
          } else {
            this.$Message.error("系统异常！请稍后再试！");
          }
        })
      } else {
        this.$Message.warning("请填写完整信息！方便后期联系您！");
      }
    },
  }
}
export {
  cpyyModalMixins
}
