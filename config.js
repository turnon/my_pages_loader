// changes should upload to https://greasyfork.org/zh-CN/scripts/372117-mypagesloader
var MyPagesLoader = {
    config: function ($, cfg) {
        this.cfg = cfg
        var that = this

        var script = document.createElement("SCRIPT");
        script.src = 'https://raw.githubusercontent.com/turnon/my_pages_loader/master/start.js';
        script.type = 'text/javascript';
        script.onload = function () {
            that.button_all = this.cfg.button($)
            that.button_all.click(this.start).css('cursor', 'pointer')
        };

        document.getElementsByTagName("head")[0].appendChild(script);
    }
}