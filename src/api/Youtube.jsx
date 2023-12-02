import axios from 'axios'

export default axios.create({
    baseURL: "https://www.googlepapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyBRuHbLRfJwrjlM4QkOTZvNRbq4Zk-v_50'
    }
})