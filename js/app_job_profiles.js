function reset_overlay() {
    $('.overlay-grayout').hide();
}

$(document).ready(function() {
    $('body').keyup(function(evt) {
	if(evt.keyCode == 27) {
	    reset_overlay();
	}
    });
    
    $('.x-box').click(function(evt) {
	reset_overlay();
    });
    
    $('.jp-box').click(function(evt) {
	$('.overlay-grayout').toggle();
    });
});

