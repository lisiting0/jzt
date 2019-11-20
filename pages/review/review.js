// pages/review/review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    list: [{
      name: '纪斌',
      sex: '0',
      age: 35,
      createTime: '2019-09-23 10:23:21',
      address: '禅城区xx街道xx号203房',
      idNo: '4410235454545845878'
    }, {
        name: '李玲',
        sex: '1',
        age: 38,
        createTime: '2019-09-23 10:23:21',
        address: '顺德区xx街道xx号203房',
        idNo: '4410235454532345878'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "流动人员审核" //页面标题为路由参数
    })
    const _this = this;
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度 
    // 微信小程序获取某个元素的高度宽度
    let query = wx.createSelectorQuery();
    query.select('.weui-search-bar').boundingClientRect(function (rect) {
      _this.setData({
        scroll_height: windowHeight - rect.height
      })
    }).exec();
  },
  linkDetail() {
    wx.navigateTo({
      url: '/pages/query/detail',
    })
  }
})