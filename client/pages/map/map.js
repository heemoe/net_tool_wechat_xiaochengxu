const baseIpUrl = "https://freegeoip.net/json/"
Page({
    data: {
        lon: "23.099994",
        lat: "113.324520"
    },
    onLoad: function(options){
        const that = this
        // console.log(options)
        wx.setNavigationBarTitle({
            title: options.type
        })
        wx.request({
        url: baseIpUrl + options.value, 
        success: function(res) {
            console.log(res)
            if (res.statusCode != 200){
                wx.showModal({
                title: "请输入正确的URL或者IP地址!",
                showCancel: false,
                success: function(res) {
                    if (res.confirm){
                        wx.navigateBack()
                        }
                    }
                })
            }
            var obj = res.data
            wx.openLocation({
                    latitude: obj.latitude,
                    longitude: obj.longitude,
                    scale: 28
                    })
return
            that.setData({
                lon: obj.longitude,
                lat: obj.latitude
                })
            },
        fail: function() {
            wx.showModal({
                title: "请求失败!",
                showCancel: false,
                success: function(res) {
                    if (res.confirm){
                        wx.navigateBack()
                        }
                    }
                })
            }
        })
    }
})

