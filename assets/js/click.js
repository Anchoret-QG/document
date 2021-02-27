var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("若是一切如梦，人能何时醒来","点亮灰烬之息，浴火重生","念念不忘，必有回响","明月装饰了你的窗子，你装饰了别人的梦");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        var arr = ['#1E90FF','#008000','#7FFF00','#FF00FF','#FF0000','#FFD700','#D2691E']
		var randomColor_arr = Math.floor(Math.random()*arr.length)
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": arr[randomColor_arr]
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
