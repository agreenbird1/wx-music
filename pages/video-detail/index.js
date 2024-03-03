import {
  getRelevantMv,
  getMvUrl,
  getMvDetail
} from "../../service/api_video"
Page({
  data: {
    urlInfo:"",
    detail: {},
    relevantMvs: []
  },
  onLoad(options) {
    this.getPageData(options.id)
  },

  getPageData(id) {
    getRelevantMv(id).then(res => {
      this.setData({relevantMvs: res.mvs})
    })
    getMvUrl(id).then(res => {
      this.setData({urlInfo: res.data})
    })
    getMvDetail(id).then(res => {
      this.setData({detail: res.data})
    })
  }
})