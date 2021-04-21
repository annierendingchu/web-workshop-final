$(document).ready(function() {
    $(window).mousemove(function(e) {
        let cursor = $(".cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 5,
            left: e.clientX - cursor.width() / 5
        });
    });

})