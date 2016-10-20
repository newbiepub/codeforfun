Template.myheart.onRendered(function () {
    $("body").css("width", "0");
    Meteor.setTimeout(function () {
        $("#main-heart").html('<span>My</span> <span class="heart">Love</span> <span>Just</span>');
        var heartuptimer = setInterval(heartup, 200);
        function heartup() {
            $(".heart").css("font-weight", "900");
        }

        var heartdowntimer = setInterval(heartdown, 500);
        function heartdown() {
            $(".heart").css("font-weight", "100");
        }
        Meteor.setTimeout(function () {
            $("#main-heart").html('<span>FOR</span> <span class="heart">YOU</span> <span></span>');
        }, 5000);
    }, 3000);
});