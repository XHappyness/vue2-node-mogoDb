import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://10.202.81.29:8088/crowdsourcing/v1';
axios.defaults.headers.common['userId'] = 'Gridsum2018032914174609440';

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  let flag = error.response && error.response.data.statusCode === 404
  if (!flag) {
    if (error.response.status && error.response.status === 401) {
      console.log('无权限');
    } else if (error.response.status && error.response.status === 406) {
      console.log('加载新版本');
      /* // 检测到新版本后 1：为更新日志添加小红点
      window.localStorage.setItem('hasUpgrade', 'true');
      // 2：强制刷新，从后台加载新的代码
      var newVersion = error.response.data.data; 
      var href = window.location.href.replace(/\/#\//g, `/?${newVersion}#/`);
      window.location.replace(href);  */
    } else {
      console.log('请求错误')
    }
  }
  return Promise.reject(error)
})

export default axios
