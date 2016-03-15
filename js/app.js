$(document).ready(function() {
    $('.lesson-square').click(function(evt, target) {
	$('.course-modal').css('display', 'block');
    });

    $('body').keyup(function(evt) {
	if(evt.keyCode == 27) {
	    $('.course-modal').css('display', 'none');
	}
    });
});
