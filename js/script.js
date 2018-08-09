$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".timeline-panel");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("visible");
        }
    }

    var progressbars = $(".progress");

    var progressbar = progressbars[i];

    if ($(progressbar).position().top < pageBottom-100){
        $('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
        );
    }
});
