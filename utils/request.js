const BASE_URL = "https://163musicapi.roletang.cn"

class Request {
  api(url, method, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data,
        success: (res) => {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(url, data) {
    return this.api(url, "get", data)
  }

  post(url, data) {
    return this.api(url, "post", data)
  }
}

const request = new Request()

export default request