/*
 * @Author: Suxuli
 * @Date: 2021-05-04 11:14:52
 * @Description: file content
 * @FilePath: \slidingVerify\src\lib\verify.js
 */

import slideVerify from './verify.vue'
const verify = {
  install: function(Vue) {
    Vue.component(slideVerify.name, slideVerify)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(verify) 
}
// 导出模块
export default verify