// changes should upload to https://greasyfork.org/zh-CN/scripts/372117-mypagesloader
var MyPagesLoader = {
    config: function ($, cfg) {
        this.cfg = cfg
        var that = this

        $.get('https://raw.githubusercontent.com/turnon/my_pages_loader/master/start.js', function (code) {
            eval(code);

            that.button_all = that.cfg.button($)
            that.button_all.click(that.start).css('cursor', 'pointer')
        })
    }
}