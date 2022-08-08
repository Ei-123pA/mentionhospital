$(document).ready(function(){
	// Start Header Section
	// Start Banner Section
	// console.log('djfk')
	// End Banner Section
	// End Header Section

	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		console.log(getscrollpoint)

		if(getscrollpoint >= 220){
			$('.infotext').addClass('fromlefts');
			$('.infotopic').addClass('fromrights');
		}else{
			$('.infotext').removeClass('fromlefts');
			$('.infotopic').removeClass('fromrights');
		}
	});
	// End Info Section

	// start adv section

	$("#videos").click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc+"?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});
	});
	// end asdv section

	// start premises Section
	$('#lightslider').lightSlider({
		// auto:true,
		item:4,
        loop:true,
        slideMove:1,
        speed:600
	}).play();
	// end premises Section

	// start pricing Section
	$(window).scroll(function(){
		let getscroll = $(this).scrollTop();
		console.log(getscroll);

		if(getscroll >= 2450){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights");
		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights");
		}
	})
	// end pricing Section

	// start join us Section
	$("#accordion").accordion();
	// end join us Section

	// start footer sectiono
	$("#getyear").text(new Date().getUTCFullYear());
	// end footer section

	// start progress
	$(window).scroll(function(){
		var getprogress = $("#progresses");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();

		var getscrollheight = $(document).height();

		var getclientheight = $(window).height();

		var calcheight = getscrollheight - getclientheight;
		var getfinalheight = Math.round(getscrolltop * 100 / calcheight);

		getprogressval.text(`${getfinalheight}%`);
		getprogress.css({
			"background": `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		});

	});
	// end progress

	

})