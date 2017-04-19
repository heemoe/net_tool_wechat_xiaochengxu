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
      if (!checkInputValue()){
          return
      }
      wx.navigateTo({
      url: '../result/result?type=ping' + inputValueParameter()
    })
  },
  digBtnClick: function() {
       if (!checkInputValue()){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=dig' + inputValueParameter()
    })
  },
  whoisBtnClick: function() {
       if (!checkInputValue()){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=whois' + inputValueParameter()
    })
  },
  ipBtnClick: function() {
       if (!checkInputValue()){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=ip' + inputValueParameter()
    })
  },
  ipv6BtnClick: function() {
       if (!checkInputValue()){
          return
      }
    wx.navigateTo({
      url: '../result/result?type=ipv6' + inputValueParameter()
    })
  }
})
function checkInputValue() {
    if (!input_value.includes(".")){
        wx.showModal({
            title: "请输入正确的URL或者IP地址!",
            showCancel: false
        })
        return false
    }
    return true
}

function inputValueParameter(){
  return "&value=" + input_value;
}