$(document).ready(function() {
    $('body').keyup(function(evt) {
	if(evt.keyCode == 27) {
	    $('.course-modal').css('display', 'none');
	}
    });

    // Open the dropdown details box

    $('.org-result-box .org-box').click(function(evt, target) {
	orgbox_parent = $(evt.target).closest('.org-box')
	dd = $(evt.target).closest('.org-result-box').find('.drop-down-details')
	
	isVisible = dd.hasClass('rolldown');

	// Unroll everything
	$('.drop-down-details').removeClass('rolldown');
	
	// now explicitly set the roll state of the dropdown
	if(!isVisible) {
	    dd.addClass('rolldown');
	}
    });

    // Hover behavior for cert icons

    $('.cert-wrapper').mouseenter(function(evt) {
	$(evt.target).closest('.cert-wrapper').find('.cert-hover').show();
    });
    $('.cert-wrapper').mouseleave(function(evt) {
	$(evt.target).closest('.cert-wrapper').find('.cert-hover').hide();
    });
    
    $('.modal-close').click(function(evt) {
	$(evt.target).closest('.course-modal').hide();
    });

    $('.modal-main').height($(document).height()-100);
});
