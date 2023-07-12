/*Scroll */

$(document).scroll(function () {
	if ($(this).scrollTop() > 45) {
		$('.header-area').addClass('fixed-top shadow-navbar bg-transparent-blue');
	} else {
		$('.header-area').removeClass('fixed-top shadow-navbar bg-transparent-blue');
	}
});
/*Click en opciones de busquedas sidebar menu*/
$('.nav-open-click a').on('click', function () {
	$(this).addClass('active').siblings('a').removeClass('active');
});

/*Seach*/
$(".box-search input").click(function () {
	$(".box-search").addClass("w-100");
	$(".box-search label").addClass("d-none");
	$(".close-input").css({ "margin-right": "2em", "visibility": "visible" })
});
$(".close-input").click(function () {
	closeInput();
});
$(document).click(function (event) {
	if (!$(event.target).closest('.box-search').length) {
		closeInput();
	}
});
function closeInput() {
	if ($('.box-search').hasClass("w-100")) {
		$(".box-search").removeClass("w-100");
		$(".close-input").css("visibility", "hidden");
		$(".box-search label").removeClass("d-none");

	}
}
/*menu click*/
$(".nav-menu a").click(function () {
	// ID del botón (Es el mismo para obtener data-relacion)
	var id_a = $(this).attr('id');
	$(".nav-menu a").each(function () {
		if ($(this).attr('id') === id_a) {
			return true;
		}
		$(this).removeClass('active');
	});
	var dataBsTargetProcess = $(this).attr("aria-controls");
	$('.nav-open-click ul').each(function () {
		$(this).addClass('d-none');
		if ($(this).data('relacion') === dataBsTargetProcess) {
			$(this).removeClass('d-none');
			return true;
		}
	});
});