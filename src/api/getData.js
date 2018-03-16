import axios from 'axios'

// 首页接口请求模拟
export const homeNews = () => axios.get('/api/news');
