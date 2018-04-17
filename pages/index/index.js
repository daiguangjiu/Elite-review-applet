Page({
  data: {
    array: ['南昌', '赣州', '武汉', '贵阳', '常德', '六安', '长沙'],
    index: 0,
    // 轮播图
    imgUrls: [
      'https://wew.jydianping.com/images/banner.jpg',
      'https://wew.jydianping.com/images/banner.jpg',
      'https://wew.jydianping.com/images/banner.jpg'
    ],
    indicatorDots: true,//是否显示指示点
    autoplay: true,//是否自动切换
    interval: 5000,//自动切换时间间隔
    duration: 1000,//滑动动画时长
    // 首页新闻列表
    index_ul:[{
      a: "/pages/details/details",
      img: "https://wew.jydianping.com/images/banner.jpg",
      bt:"我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字",
      like:"21",
      view:"2353"
      },{
        a:"/pages/details/details",
        img:"https://wew.jydianping.com/images/banner.jpg",
        bt: "",
        like: "56",
        view: "2353"
      }
      ]
  },
  pickChange: function (e) {
    this.setData({
      index: e.detail.value
    });
  },
  onShareAppMessage: function () {
    return {
      title: '精英点评小程序',
      path: 'pages/index/index'
    }
  }
})