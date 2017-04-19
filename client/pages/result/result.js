Page({
    data: {
        result: "..."
    },
    onLoad: function(options){
        // console.log(options)
        wx.setNavigationBarTitle({
            title: options.type
        })

        wx.request({
            url: 'http://127.0.0.1/api/v1.0/nettool/' + options.type + "/" + options.value, 
            success: function(res) {
                this.setData({
                    result : res.data
                })
            },
            fail: function() {
                this.setData({
                    result : "数据获取失败..."
                })
            }
        })
    }
})

