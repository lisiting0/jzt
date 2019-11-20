// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    name: '',
    // 证件类型
    zjCodes: ['其他', '护照', '身份证', '驾照'],
    zjIndex: 0,
    idNo: '',
    // 性别
    sexCodes: ['男', '女'],
    sexIndex: 0,
    endTime: '',
    date: "2016-09-01",
    concatPhone: '', // 联系电话
    // 民族
    nationCodes: ['其他', '回族', '壮族', '汉族', '维吾尔族', '苗族', '蒙古族', '藏族'],
    nationIndex: 0,
    // 政治面貌
    zzmmCodes: ['其他', '党员', '团员', '民族党派', '群众'],
    zzmmIndex: 0,
    // 户口类型
    hklxCodes: ['农村', '城镇'],
    hklxIndex: 0,
    // 文化程度
    whcdCodes: ['其他', '小学', '初中', '中专', '高中', '大学', '博士', '硕士'],
    whcdIndex: 0,
    hjszdCodes: [{
      "citys": [{
          "areas": [{
              "code": "440303",
              "name": "罗湖区"
            },
            {
              "code": "440304",
              "name": "福田区"
            }, 
          ],
          "code": "440300",
          "name": "深圳市"
        }, 
      ],
      "code": "440000",
      "name": "广东省"
    }],
    hjszdIndex: 0,
    hjxz: '', // 户籍详情地址

    // 地区
    dqCodes: ['顺德区','禅城区','南海区','高明区','三水区'],
    dqIndex: 0, 
    street: '', // 街道
    streetLane: '',//街道巷
    numberPlate: '', // 门牌
    roomNumber: '', // 房号 
    // 居住事由
    lyCodes: ['务工', '经商', '务农', '服务', '因公出差', '借读培训', '治病疗养', '随迁亲属', '拆迁搬家', '寄挂户口', '婚姻嫁娶', '投靠亲友', '保姆', '探亲访友', '旅游观光', '人才引进', '其他'],
    lyIndex: 0,
    // 居住方式
    fsCodes: ['单身居住', '合租'],
    fsIndex: 0,




    // radioItems: [{
    //   name: '男',
    //   value: '0',
    //   checked: true
    // }, {
    //   name: '女',
    //   value: '1'
    // }],
    // hjCodes: ['外地', '本地'],
    // hjIndex: 0,
    // jzCodes: ['外出', '常住', '租住'],
    // jzIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this;
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
    _this.setData({
      endTime: Y + '-' + M + '-' + D,
      date: Y + '-' + M + '-' + D,
    })
  },
  // 证件类型
  bindZjChange: function(e) {
    this.setData({
      zjIndex: e.detail.value
    })
  },
  bindSexChange: function(e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindNationChange: function(e) {
    this.setData({
      nationIndex: e.detail.value
    })
  },
  bindZzmmChange: function(e) {
    this.setData({
      zzmmIndex: e.detail.value
    })
  },
  bindHklxChange: function(e) {
    this.setData({
      hklxIndex: e.detail.value
    })
  },
  bindWhcdChange: function(e) {
    this.setData({
      whcdIndex: e.detail.value
    })
  },
  bindHjszdChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },




  bindHjChange: function(e) {
    this.setData({
      hjIndex: e.detail.value
    })
  },
  bindJzChange: function(e) {
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  showTopTips: function() {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function() {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
})