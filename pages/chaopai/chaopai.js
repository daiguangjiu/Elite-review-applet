Page({
  data:{
    array: ['南昌', '赣州', '武汉', '贵阳', '常德', '六安', '长沙'],
    index: 0,
    top_img:"https://wew.jydianping.com/images/top_img.jpg",
    chao_ul:[{
      kong:"a1",
      a:"/pages/chaopai_xq/chaopai_xq",
      img:"https://wew.jydianping.com/images/banner.jpg",
      bt:"大咖团一起体验高空滑翔伞，招募中",
      time:"时间：2018-03-09",
      address:"地址：南昌市青山湖区北京东路458号锦海东方银座南昌市青山湖区北京东路458号锦海东方银座",
      bm:"点击报名",
      bm_a:"/pages/reports/reports"},{
        kong: "a2",
        a: "/pages/chaopai_xq/chaopai_xq",
        img: "https://wew.jydianping.com/images/banner.jpg",
        bt: "大咖团一起体验高空滑翔伞，招募中",
        time: "时间：2018-03-09",
        address: "地址：南昌市青山湖区北京东路458号锦海东方银座",
        bm: "点击报名",
        bm_a: ""
    }]
  },
  onShareAppMessage: function () {
    return {
      title: '精英点评小程序'
    }
  }
})