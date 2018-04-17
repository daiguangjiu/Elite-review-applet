var app = getApp()
Page({
  data: {
    array: ['南昌', '赣州', '武汉', '贵阳', '常德', '六安', '长沙'],
    index: 0,
    isShow: true,
    currentTab: 0,
    // 首页新闻列表
    index_ul: [{
      a: "/pages/details/details",
      img: "https://wew.jydianping.com/images/banner.jpg",
      bt: "我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字",
      introduction: "百位贤能达士，精英点评小程序",
      like: "21",
      view: "2353"
    }, {
      a: "/pages/details/details",
      img: "https://wew.jydianping.com/images/banner.jpg",
      bt: "我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字",
      introduction: "1",
      like: "21",
      view: "2353"
    }
    ],
    index_ul2: [{
      a: "/pages/details/details",
      img: "https://wew.jydianping.com/images/banner.jpg",
      bt: "我是22222222文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字",
      introduction: "百位贤能达士，精英点评小程序",
      like: "21",
      view: "2353"
    }, {
      a: "/pages/details/details",
      img: "https://wew.jydianping.com/images/banner.jpg",
      bt: "我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字",
      introduction: "1",
      like: "21",
      view: "2353"
    }
    ]
  },

  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var showMode = e.target.dataset.current == 0;
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
})