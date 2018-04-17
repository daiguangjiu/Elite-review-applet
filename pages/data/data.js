Page({
  data: {
    date: '2018-03-28',
    region: ['广东省', '广州市', '海珠区'],
    items: [
      { name: 'CHN', value: '男', checked: 'true' },
      { name: 'BRA', value: '女' }
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 上传头像测试
  changeAvatar: function () {
    var that = this;
    // var childId = wx.getStorageSync("child_id");
    // var token = wx.getStorageSync('token');
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        console.log(res.tempFilePaths + "修改页面")
        var avatar = res.tempFilePaths;
        that.setData({
          avatar: avatar,
          upAvatar: true
        })

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})