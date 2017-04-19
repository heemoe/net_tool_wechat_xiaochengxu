//index.js
//获取应用实例
var app = getApp()
var input_value = ""
Page({
  data: {
      focus : true,
      input_placeholder : "输入你要查询的URL~"
  },
  endInputting: function(e){
    console.log(e.detail.value)
    input_value = e.detail.value;
  },
  pingBtnClick: function() {
      if (!checkInputValue(input_value)){
          return
      }
      wx.navigateTo({
      url: '../result/result?type=ping'
    })
  },
  digBtnClick: function() {
       if (!checkInputValue(input_value)){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=dig'
    })
  },
  whoisBtnClick: function() {
       if (!checkInputValue(input_value)){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=whois'
    })
  },
  ipBtnClick: function() {
       if (!checkInputValue(input_value)){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=ip'
    })
  },
  ipv6BtnClick: function() {
       if (!checkInputValue(input_value)){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=ipv6'
    })
  }
})
function checkInputValue(value) {
    if (!value.includes(".")){
        wx.showModal({
            title: "请输入正确的URL或者IP地址!",
            showCancel: false
        })
        return false
    }
    return true
}