var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    array: ['南昌', '赣州', '武汉', '贵阳', '常德', '六安', '长沙'],
    index: 0,
    bt:"我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题",
    bt_f1:"精英点评",
    bt_f2:"2018-03-03",
    bt_f3:"22:22",
    // 评论列表
    comment_ul:[{
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
    var article = '<div>我asdnasjdhasjkhd码</div><img src="https://wew.jydianping.com/images/banner.jpg" alt="">';
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);
  },
  onShareAppMessage: function () {
    return {
      title: '精英点评小程序'
    }
  },
  // 返回顶部js
  returnTop: function () {
    this.setData({
      topNum: this.data.topNum = 0
    })
  }
})