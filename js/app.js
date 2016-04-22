$(document).ready(function() {
    $('.org-name-link').click(function(evt, target) {
	elt = $(evt.target).closest('.drop-down-details').find('.course-modal')
	isVisible = elt.is(':visible');
	// hide everything
	$('.course-modal').hide();

	// now explicitly set the state of the target modal
	if(isVisible) {
	    elt.hide();
	} else {
	    elt.show();
	}
    });

    $('body').keyup(function(evt) {
	if(evt.keyCode == 27) {
	    $('.course-modal').css('display', 'none');
	}
    });

    // Open the dropdown details box

    $('.org-list .org-box').click(function(evt, target) {
	dd = $(evt.target).closest('.org-list').find('.drop-down-details')
	isVisible = dd.is(':visible');
	
	$('.drop-down-details').hide();
	$('.course-modal').hide();
	
	// now explicitly set the state of the target modal
	if(isVisible) {
	    dd.hide();
	} else {
	    dd.show();
	}
    });

    $('.modal-close').click(function(evt, target) {
	$(evt.target).closest('.course-modal').hide();
    });
});
