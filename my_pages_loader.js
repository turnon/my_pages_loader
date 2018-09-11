function MyPagesLoader($, config) {
    function start() {
        var page_count = config.page_count($)

        var page_loaders = [];
        for (var i = 2; i <= page_count; i++) {
            var next_page = config.next_page(i)
            page_loaders.push($.ajax({
                url: next_page
            }));
        }

        (async function () {
            for (var loader of page_loaders) {
                var data = await loader
                config.append_page(data, $)
            }
        })()

        $all.remove()
    }

    var $all = config.button($)
    $all.click(start).css('cursor', 'pointer')
}