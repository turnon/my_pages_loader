// changes should upload to https://greasyfork.org/zh-CN/scripts/372117-mypagesloader
var MyPagesLoader = {
    config: function ($, cfg) {
        this.cfg = cfg
        var that = this

        $.get('https://raw.githubusercontent.com/turnon/my_pages_loader/master/start.js', function (code) {
            var script = document.createElement("SCRIPT");
            script.innerText = code;
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            that.button_all = this.cfg.button($)
            that.button_all.click(this.start).css('cursor', 'pointer')
        })
    }
}