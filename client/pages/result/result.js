const baseServerUrl = "https://DOMAIN/api/v1.0/nettool/"
const baseIpUrl = "https://freegeoip.net/json/"
Page({
    data: {
        result: "..."
    },
    onLoad: function(options){
        const that = this
        // console.log(options)
        wx.setNavigationBarTitle({
            title: options.type
        })

        if (options.type == "ip"){
            wx.request({
            url: baseIpUrl + options.value, 
            success: function(res) {
                console.log(res.data)
                if (!isSucucessCode(res.statusCode)){
                    return;
                }
                var obj = res.data
                that.setData({
                    result: "ip:" + obj.ip + "\n" +
                            "country_code: " + obj.country_code + "\n" +
                            "country_name: " + obj.country_name + "\n" +
                            "region_code: " + obj.region_code + "\n" +
                            "region_name: " + obj.region_name + "\n" +
                            "city: " + obj.city + "\n" +
                            "zip_code: " + obj.zip_code + "\n" +
                            "time_zone: " + obj.time_zone + "\n"
                })
            },
            fail: function() {
                that.setData({
                    result: "数据获取失败..."
                })
            }
        })
            return
        }
        
        wx.request({
            url: baseServerUrl + options.type + "/" + options.value, 
            success: function(res) {
                console.log(res.data)
                if (!isSucucessCode(res.statusCode)){
                    return;
                }
                that.setData({
                    result: res.data
                })
            },
            fail: function() {
                that.setData({
                    result: "数据获取失败..."
                })
            }
        })
    }
})
function isSucucessCode(code){
    if (code != 200){
            wx.showModal({
                title: "请输入正确的URL或者IP地址!",
                showCancel: false,
                success: function(res) {
                    if (res.confirm){
                        wx.navigateBack()
                    }
                }
            })
            return false
        }
    return true
}

