window.max_dropdowns = 3;
angular.module('techpaths', ['ngRoute']).controller('techpaths_ctrl', function ($scope) {
    $scope.dd_recs = window.dd_choices;
    $scope.orgs = window.orgs;
    $scope.close_boxes = [true, true];

    $scope.toggle_boxes = function(f_idx) {
	$scope.close_boxes[f_idx] = !($scope.close_boxes[f_idx]);
    }
    
    $scope.select_option = function($event, f_idx, c_idx) {
	// All options other than the idx'ed option
	$scope.dd_recs[f_idx]['options'][0] = $scope.dd_recs[f_idx]['options'][1][c_idx];
	$scope.close_boxes[f_idx] = true;
	$event.stopPropagation();
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
});

