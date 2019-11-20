//index.js
//获取应用实例
const app = getApp()

Page({
  data: { 
    list: [
      {
        id: 'form',
        name: '登记',
        pages: 'register'
      },
      {
        id: 'widget',
        name: '审核',
        pages: 'review'
      },
      {
        id: 'feedback',
        name: '查询',
        pages: 'query'
      },
    ]
  }, 
  onLoad: function () { 
  }, 
})
