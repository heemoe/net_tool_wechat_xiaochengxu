Page({
    data: {
        result: "..."
    },
    onLoad: function(options){
        // console.log(options)
        wx.setNavigationBarTitle({
            title: options.type
        })
        const that = this
        wx.request({
            url: 'https://yourdomain.com/api/v1.0/nettool/' + options.type + "/" + options.value, 
            success: function(res) {
                console.log(res.data)
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

