// pages/index/next.js
var app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    
  },
  clickback:function(){
    wx.navigateTo({
      url: 'index'
    })
  },
  clickCritic: function () {
    wx.navigateTo({
      url: 'share'
    })
  },
  saveim(){
    console.log("1")
    wx.saveImageToPhotosAlbum({
      filePath:"imgs/img.jpg",
      success(res) { }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      images: [app.globalData.ImgSrc],
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})