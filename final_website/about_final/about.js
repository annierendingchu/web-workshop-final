$(document).ready(function() {
    $(window).mousemove(function(e) {
        let cursor = $(".cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
})