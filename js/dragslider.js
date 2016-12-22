$(document).ready(function () {
	$('.bar').draggable({axis: 'x'});
	var liWidth = $('.light li:eq(0)').outerWidth();
	$('.bar').on('drag', function (event, ui) {
		var posLeft = ui.position.left;
		var index = Math.ceil(posLeft / liWidth);
		if (posLeft <= 0) {
			ui.position.left = 0;
		} else if (posLeft >= 538) {
			ui.position.left = 538;
		} else {
			$('#box .slider').width(posLeft);
		}
		index = index == 0 ? 1 : index;
		var $curLi = $('.light li').eq(index - 1);
		$curLi.find('s, b').addClass('fix');
		$curLi.siblings().find('s, b').removeClass('fix');
	});
	$('.bar').on('dragstop', function (event, ui) {
		var posLeft = ui.position.left;
		var index = Math.ceil(posLeft / liWidth);
		if (index == 0) {
			index = 1;
		} else if (index == $('.light li').length + 1) {
			index--;
		}
		$('.bar').animate({left: liWidth * index}, 200);
		$('#box .slider').animate({width: liWidth * index}, 200);
	});
})