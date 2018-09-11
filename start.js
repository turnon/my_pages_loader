MyPagesLoader.start = function () {
    var page_count = this.cfg.page_count($)

    var page_loaders = [];
    for (var i = 2; i <= page_count; i++) {
        var next_page = this.cfg.next_page(i)
        page_loaders.push($.ajax({
            url: next_page
        }));
    }

    (async function () {
        for (var loader of page_loaders) {
            var data = await loader
            this.cfg.append_page(data, $)
        }
    })()

    this.button_all.remove()
}