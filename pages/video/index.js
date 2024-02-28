// pages/video/index.js
import {
  getTopMvs
} from "../../service/api_video"

Page({
  data: {
    topMvs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getTopMvs(10).then(res => {
      this.setData({
        topMvs: res.data.data
      })
    })
  },
})