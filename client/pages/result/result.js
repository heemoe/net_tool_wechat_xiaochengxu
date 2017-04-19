Page({
    data: {
        result: "..."
    },
    onLoad: function(options){
        // console.log(options)
        wx.setNavigationBarTitle({
            title: options.type
        })
        this.setData({
            result : options.type + "---" + options.value
        })
    }
})