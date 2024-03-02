// pages/video/index.js
import {
  getTopMvs
} from "../../service/api_video"

Page({
  data: {
    topMvs: [],
    hasMore: true, // mv 列表是否 offset 到底
    reachBottomLoading: false, // 触底加载
  },

  goToVideoDetails(event) {
    const {
      id
    } = event.currentTarget.dataset.video
    wx.navigateTo({
      url: '/pages/video-detail/index',
    })
  },

  loadTopMvs(offset, pullDown = false) {
    if (!this.data.hasMore || this.data.reachBottomLoading) return
    if (offset) {
      this.setData({
        reachBottomLoading: true
      })
    }
    getTopMvs(offset).then(res => {
      this.setData({
        topMvs: !pullDown ? [...this.data.topMvs, ...res.data] : res.data
      })
      this.setData({
        hasMore: res.hasMore
      })
    }).finally(() => {
      if (pullDown) {
        wx.stopPullDownRefresh()
      }
      if (offset) {
        this.setData({
          reachBottomLoading: false
        })
      }
    })
  },

  onLoad() {
    this.loadTopMvs(0)
  },

  onPullDownRefresh() {
    this.loadTopMvs(0, true)
  },

  // 触底加载是追加
  // offset即为当前已有长度
  onReachBottom() {
    this.loadTopMvs(this.data.topMvs.length)
  }

})