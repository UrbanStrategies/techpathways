window.max_dropdowns = 3;
angular.module('techpaths', ['ngRoute']).controller('techpaths_ctrl', function ($scope) {
    $scope.dd_selections = [0, 0, 0];
    $scope.dd_recs = [{
	'id': 0,
	'label': "I'm",
	'options': ['cat', 'dog', 'pigeon']
    }, {
	'id': 1,
	'label': "I want to be",
	'options': ['superman', 'batman', 'xena']
    }, {
	'id': 2,
	'label': "My goal is to",
	'options': ['save world', 'be super', 'build car']
    }];
    
    $scope.dd_unselected = function(idx) {
	// All options other than the idx'ed option
	return $scope.dd_recs[idx]['options'].filter(function(elt, i, arr) {
	    return i != $scope.dd_selections[idx];
	});
    };

    $scope.dd_rec_search = function(idx, query) {
	var result = 0;
	$scope.dd_recs[idx]['options'].forEach(function(elt, i, arr) {
	    if(elt === query) { 
		result = i;
	    }
	});
	return result;
    }
    
    $(document).ready(function() {
	$('.option-box').click(function(evt) {
	    tgt = $(evt.target);
	    option_index = tgt.data('rec-index');
	    
	    result = $scope.dd_rec_search(option_index, tgt.html().trim());
	    $scope.dd_selections[option_index] = result;
	    $scope.$digest();
	    tgt.closest('.search-selection').css('display', 'none');
	});
	
	$('.selection-dropdown').click(function(evt) {
	    tid = $(evt.target).data('target-id');
	    if(typeof(tid) == undefined) {
		tid = $(evt.target).closest('.selection-dropdown').data('target-id');
	    }
	    $('#search-dropdown-' + tid).toggle();

	    // hide all other dropdowns
	    for(i=0; i < window.max_dropdowns; i++) {
		if(i !== tid) {
		    $('#search-dropdown-' + i).hide();
		}
	    }
	});
    });
    
});

