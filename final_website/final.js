$(document).ready(function() {
    $(".bunny").click(happybunny);

    function happybunny() {
        // $(".bunny").css("background-image","url(happy.GIF)");
        $(".bunny").addClass("happy")
        setTimeout(changeBack, 2000);
    }

    function changeBack() {
        // $(".bunny").css("background-image","url(angry.GIF)");
        $(".bunny").removeClass("happy");
    }


    $(window).mousemove(function(e) {
        let cursor = $(".cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window).mousemove(function(e) {
        let cursor = $(".bite");
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(".bunny").click(biteCarrot);

    function biteCarrot() {
        $(".bite").addClass("showing");
        $(".cursor").addClass("hide");
        setTimeout(changeCursor,1000);
    }

    function changeCursor() {
        $(".bite").removeClass("showing");
        $(".cursor").removeClass("hide");
    }

    // window.onload = function() {
    //     document.getElementById("audioplayer").play();
    // }
    // $(document).ready(function() {
    //     $("#audioplayer").get(0).play();
    // });    
})