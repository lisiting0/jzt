// pages/review/review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    inputShowed: false,
    inputVal: "",
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
        age: 30,
        createTime: '2019-09-23 10:23:21',
        address: '禅城区xx街道xx号203房',
      idNo: '4410235454532345878'
      }, {
        name: '王小二',
        sex: '0',
        age: 39,
        createTime: '2019-09-23 10:23:21',
        address: '禅城区xx街道xx号203房',
        idNo: '4410235454532342478'
      }, {
        name: '王炸',
        sex: '0',
        age: 28,
        createTime: '2019-09-23 10:23:21',
        address: '禅城区xx街道xx号203房',
        idNo: '4410235454532345258'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "流动人员列表" //页面标题为路由参数
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
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  loadMore() {
    var _this = this;
    // if (_this.data.currentPage == _this.data.totalPage) {
    //   _this.setData({
    //     loadMoreData: '已加载全部数据'
    //   })
    //   return;
    // }
    // 显示加载图标
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      console.log('上拉加载更多');
      // var tempCurrentPage = _this.data.currentPage;
      // tempCurrentPage = tempCurrentPage + 1;
      // _this.setData({
      //   currentPage: tempCurrentPage,
      //   hideBottom: false
      // })
      // _this.loadData();

    }, 1000);
    // 隐藏加载框
    wx.hideLoading();
  },
  refresh() {
    var _this = this;
    setTimeout(function () {
      console.log('下拉刷新');
      // _this.setData({
      //   currentPage: 1,
      //   hideHeader: false
      // })
      // _this.loadData();
    }, 1000);
  },
  linkDetail(){
    wx.navigateTo({
      url: '/pages/query/detail',
    })
  }
})