const axios=require('axios')
export default function $axios (options) {
  return new Promise((resolve, reject) => {
    let base = {
      opUrl: process.env.API_HOST
    }
    let headerCont = {
      text: 'application/x-www-form-urlencoded; charset=UTF-8',
      json: 'application/json',
    }
    const instance = axios.create({
      baseURL: base[options.base],//设置默认根地址
      traditional: true,
      timeout: 5000,//设置请求超时设置
      //设置请求时的header
      headers: {
        'Content-Type': headerCont[options.header],
      }
    })
    //请求处理
    instance(options).then((res) => {
      resolve(res)
    })
      .catch((error) => {
        if (error.response) {
          let resError = error.response
          let resCode = resError.status
          let resMsg = error.message
          reject({
            code: resCode,
            msg: resMsg
          })
        }
      })
  })
}
