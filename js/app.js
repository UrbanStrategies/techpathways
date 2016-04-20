$(document).ready(function() {
    $('.org-name-link').click(function(evt, target) {
	$(evt.target).closest('.drop-down-details').find('.course-modal').toggle();
    });

    $('body').keyup(function(evt) {
	if(evt.keyCode == 27) {
	    $('.course-modal').css('display', 'none');
	}
    });

    // Open the dropdown details box

    $('.org-list .org-box').click(function(evt, target) {
	dd = $(evt.target).closest('.org-list').find('.drop-down-details')
	dd.toggle();
	if(dd.style('display') == 'none') {
	    $('.course-modal').hide();
	}
    });

    $('.modal-close').click(function(evt, target) {
	$(evt.target).closest('.course-modal').hide();
    });
});
