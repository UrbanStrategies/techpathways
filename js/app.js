window.max_dropdowns = 3;

$(document).ready(function() {
    $('.lesson-square').click(function(evt, target) {
	$('.course-modal').css('display', 'block');
    });

    $('body').keyup(function(evt) {
	if(evt.keyCode == 27) {
	    $('.course-modal').css('display', 'none');
	}
    });

    $('.selection-dropdown').click(function(evt, target) {
	tid = $(evt.target).data('target-id');
	if(typeof(tid) == undefined) {
	    tid = $(evt.target).closest('.selection-dropdown').data('target-id');
	}
	$('#search-dropdown-' + tid).toggle();

	// hide all other dropdowns
	for(i=1; i<=window.max_dropdowns; i++) {
	    if(i !== tid) {
		$('#search-dropdown-' + i).hide();
	    }
	}
		
    });
	    
});
