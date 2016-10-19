Template.heartbeat.onRendered(function () {
    Meteor.setTimeout(function () {
        if (window.innerWidth >= 480) {
            heartbeat();
        } else {
            swal('Xoay ngang màn hình đi bé');
        }
        $(window).resize(function () {
            location.reload();
            if (window.innerWidth >= 480) {
                heartbeat();
            } else {
                swal('Xoay ngang màn hình đi bé');
            }
        });
    }, 500);
});

Template.heartbeat.helpers({
    checkWidth: function () {
        Session.set("checkWidth", false);
        $(window).resize(function () {
            if ($(window).width() < 480) {
                Session.set("checkWidth", true);
            } else {
                Session.set("checkWidth", false);
            }
        });
        return Session.get("checkWidth");
    }
});

function heartbeat() {
    var openComment, styles, time, writeStyleChar, writeStyles;

    styles = "/* \n * \"From Your Lover...\" v1.0.5\n * Robot rights protected under BOT License\n * Authored by LamNguyen\n */\n\nbody {\n overflow: overlay; \n  background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* ...                  \n *\n * ...Chào bé?            \n *\n * Anh iu của bé đây. Anh đang chỉnh một số thứ ...         \n *\n * Anh làm cái này để tặng bé.            \n *\n * Mong bé hông chế :D.                       \n *\n *\n * Đợi chút để anh chỉnh lại cho dễ nhìn \n *.        \n *\n * Có vẻ hơi bối rối nhỉ !\n *\n */\n\npre { \nwhite-space: pre-wrap; /* Since CSS 2.1 */ white-space: -moz-pre-wrap; /* Mozilla, since 1999 */ white-space: -pre-wrap; /* Opera 4-6 */ white-space: -o-pre-wrap; /* Opera 7 */ word-wrap: break-word; /* Internet Explorer 5.5+ */  position: fixed; width: 48%; \n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * Syntax highlighting \n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n * Anh sẽ cho em thấy điều đặc biệt.\n */ \n\n\n/* Ah, Chuyển cái này qua tí */\n\npre { left: 50%; }\n\n\n/* Bây giờ là bước quan trọng đây */\n\n#heart, #echo {\n left: 10% !important;\n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8;}\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 181px;\n}\n\n#heart::after, #echo::after {\n  left: 10%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* Thêm một chút nữa...  */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* Đây là trái tim của anh. */\n\n#heart i::before {\n  content: 'Belong To Thùy Trâm';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 15px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n\n/* \n * Trái tim sẽ đập. \n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * Bé thấy đẹp chứ! Bây giờ hãy cho nó đập nào...\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n * Sẵn sàng...           \n */\n\n#heart, #echo {\n\n/* \n * ...chuẩn bị...          \n */\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  \n/* \n * ...đập!        \n */\n  \n}\n\n/* \n *\n * Wahoo!         \n *\n * Đã xong rồi!       \n *\n * Anh đã làm nó cho bé...\n * tuy không nhiều  \n * nhưng mong là bé thích.\n *\n *       \n * \n * \t ANH YÊU BÉ!\n *  \n */";

    openComment = false;

    writeStyleChar = function (which) {
        if (which === '/' && openComment === false) {
            openComment = true;
            styles = $('#style-text').html() + which;
        } else if (which === '/' && openComment === true) {
            openComment = false;
            styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
        } else if (which === ':') {
            styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
        } else if (which === ';') {
            styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
        } else if (which === '{') {
            styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
        } else {
            styles = $('#style-text').html() + which;
        }
        $('#style-text').html(styles);
        return $('#style-tag').append(which);
    };

    writeStyles = function (message, index, interval) {
        var pre;
        if (index < message.length) {
            pre = document.getElementById('style-text');
            pre.scrollTop = pre.scrollHeight;
            writeStyleChar(message[index++]);
            return setTimeout((function () {
                return writeStyles(message, index, interval);
            }), interval);
        } else {
            Meteor.setTimeout(function () {
                window.location.assign(Meteor.absoluteUrl('myheart'));
            }, 2000)

        }
    };

    $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

    time = window.innerWidth <= 578 ? 35 : 35;

    writeStyles(styles, 0, time);


    /*
     Changelog:
     1.0.0: i exist!
     1.0.1: heart instead of circle
     1.0.2: including standard CSS3 transforms and animations
     was only using `-webkit` to be less verbose (standard transforms dont work in safari)
     now works in FF
     1.0.3: crossbrowser echo
     nested `scale()` styles (scaled in scaled) only worked in chrome
     moved echo out of heart to fix
     1.0.4: more efficient animations
     `0%, 100% {}` instead of duplicated keyframes
     1.0.5: overflwo fix
     `overflow: auto` on the `pre`
     */
}