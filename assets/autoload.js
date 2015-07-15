
PF.event.on('openPanel', function() {
	$('#header_search_form').show();
});

$Ready(function() {
	// add JS here... jQuery is supported!
	$('#header_sub_menu_search_input').focus(function() {
		$('body').addClass('in-search-mode');
		$('#panel').html('<div class="js_temp_friend_search_form"></div>');
	});

	$('#header_sub_menu_search_input').blur(function() {
		//$('body').removeClass('in-search-mode');
		//$('#panel').html('');
	});

	/*
	$('._panel').click(function() {
		var b = $('body'), t = $(this), i = t.offset();

		if (!b.hasClass('panel_is_active')) {
			$('#panel').addClass('show').css({
				left: ((i.left - 300) + 40)
			});
		}
	});
	*/
});