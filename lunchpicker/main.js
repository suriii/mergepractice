$(document).ready(function(){
    $("input").click(function()
     {                
       var numberofListItem=$("#choices li").length;
       var randomChildNumber=Math.floor(Math.random()*numberofListItem);
        console.log(randomChildNumber);
$("H1").text($("#choices li").eq(randomChildNumber).text());
                               
    });
    var animations = [ 'shake',
					   'hop',
					   'spin',
					   'grow',
					   'hooray' ];

	function getRandomInt (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('.images').on ('click', function () {
		var images = this;
		var animation = animations[getRandomInt(0, 4)];

		$(images).addClass(animation);

		setTimeout(function () {
			$(images).removeClass(animation);
		}, 2100);
	});


});



