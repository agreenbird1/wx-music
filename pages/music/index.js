import {
  getBanners
} from "../../service/api_music"

let loaded = false;

Page({
  data: {
    banners: [],
    swiperHeight: 0,
  },
  clickSearchInput() {
    wx.navigateTo({
      url: '/pages/search-detail/index',
    })
  },
  getPageData() {
    getBanners().then(res => {
      this.setData({
        banners: res.banners
      })
    })
  },
  onLoad() {
    this.getPageData()
  },

  swiperImageLoaded(e) {
    // 防止多个图片加载触发多次事件
    if (loaded) return
    loaded = true
    const {
      width,
      height
    } = e.detail
    // 根据设备宽高比设置swiper高度
    // 或者获取当前image的本来高度再次赋值
    const proportion = width / height
    const windowInfo = wx.getWindowInfo()
    this.setData({
      swiperHeight: Math.floor(windowInfo.windowWidth / proportion)
    })
  }
})