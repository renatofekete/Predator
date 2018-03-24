$(document).ready(function() {
	/* section-2 */
	$(".button").click(function() {
		$(this).parent().parent().siblings().find(".div-section-2-box-info").addClass("display-none");
		$(this).parent().next().removeClass("display-none");
	});

	$("i").click(function(){
		$(this).parent().parent().addClass("display-none");
	});
	/*
	$('.div-section-2-box:even').mouseenter(function() {
		$(this).css("width", "60%")
		$(this).next().css("width", "40%");
	});
	$('.div-section-2-box:even').mouseleave(function() {
		$(this).css("width", "50%")
		$(this).next().css("width", "50%");
	});
	$('.div-section-2-box:odd').mouseenter(function() {
		$(this).css("width", "60%")
		$(this).prev().css("width", "40%");
	});
	$('.div-section-2-box:odd').mouseleave(function() {
		$(this).css("width", "50%")
		$(this).prev().css("width", "50%");
	});
	*/
	/* Scroll */
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		var scroll;

		if($(window).scrollTop()==0){
			scroll =  ($target.offset().top) 
		}else{
			scroll =  ($target.offset().top) - 30
		}
		$('html, body').stop().animate({
			'scrollTop': scroll
		}, 700, 'swing', function () {
			//window.location.hash = target;
		});
	});
	/* Slider */
	$('.flexslider').flexslider({
		animation: "slide",
		pauseOnAction: false,
		slideshow: false
	});
	/* Hamburger */
	$(".hamburger-holder").click(function() {
		$(".hamburger-holder").toggleClass("switcher");
		$(".div-fixed").toggleClass("show");
	});
	$(".responsive-menu ul li a").click(function() {
		$(".div-fixed").toggleClass("show");
		$(".hamburger-holder").toggleClass("switcher");	
	});
});