; $(document).ready(function(){

	/*work d-w links*/

	$(".js_header_link").on("click", function(e){

		e.preventDefault();


		var hrefDw = $(this).attr("href"), 
			scrollTopCus = $(hrefDw).offset().top;

			$("html, body").animate({
   				scrollTop: scrollTopCus
   			}, 1000);
	});

	// header position top

	var headerH = $("#header").height();

		$(document).on("scroll", function(){

			var docScroll = $(this).scrollTop(),
				header_b = $("header").innerHeight(), 
				header_b_ext = 0;

				if(docScroll > (header_b + header_b)){

					$("#header").addClass("js_fixed_header");
					$(".slider").css("marginTop", header_b);
				}else{
					$("#header").removeClass("js_fixed_header");
					$(".slider").css("marginTop", header_b_ext);
				}


		});

		// modals

		$(".js-show-modal").on("click", function(e){

			e.preventDefault();

			$(".js-modal, #js-overlay").fadeIn();
			$("body").addClass("openModal");

		});

		$(".js-modal-close, #js-overlay").on("click", function(e){

			e.preventDefault();

			$(".js-modal, #js-overlay").fadeOut();
			$("body").removeClass("openModal");

		});


})