import Vue from 'vue'

Vue.config.errorHandler = e => {
    console.log(e.message);
    Vue.prototype.$toast(e.message);
    console.log('에러핸들러진입')
}