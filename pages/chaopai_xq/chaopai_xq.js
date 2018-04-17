var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    array: ['南昌', '赣州', '武汉', '贵阳', '常德', '六安', '长沙'],
    index: 0,
    banner:"https://wew.jydianping.com/images/banner2.jpg",
    a1:"大咖团一起体验高空滑翔伞，招募中大咖团一起体验高空滑翔伞，招募中",
    a2:"时间：2018-03-09",
    stop_r:"100",
    stop_itme:"2018-03-09  19：00",
    map:"南昌市青山湖区北京东路458号锦海东方银座",
    // 评论列表
    comment_ul: [{
      image: "https://wew.jydianping.com/images/banner.jpg",
      names: "姓名",
      time: "2018-03-03   15:15",
      content: "环境优雅，值得信赖"
    }, {
      image: "https://wew.jydianping.com/images/banner.jpg",
      names: "姓名",
      time: "2018-03-03   15:15",
      content: "环境优雅，值得信赖"
    }],
    // 返回顶部
    topNum: 0
  },
  onLoad: function () {
    var article = '<div>我是HTML代码</div><img src="https://wew.jydianping.com/images/banner2.jpg">';
    var article2 = '<div>asdfasdfas</div><img src="https://wew.jydianping.com/images/banner2.jpg">';
    var that = this;
    WxParse.wxParse('article', 'html', article, that);
    WxParse.wxParse('article2', 'html', article2, that);
  },
  openLocation: function (e) {
    console.log("openLocation" + e)
    var value = e.detail.value
    wx.openLocation({
      longitude: 115.9411668777,
      latitude: 28.6736077447
    })
  },
  // 返回顶部js
  returnTop: function () {
    this.setData({
      topNum: this.data.topNum = 0
    })
  }
})