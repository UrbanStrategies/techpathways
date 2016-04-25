angular.module('techpaths', ['ngRoute']).controller('jobprofiles_ctrl', ['$scope', function ($scope) {
    $scope.profile_groups = ['Software', ['Software', 'Hardware', 'Product Development', 'Visual Design']]
    
    $scope.getFilterDisplay = function(idx, target_list) {
	str = '';
	if (idx === 0) {
	    str += ' left-rounded ';
	}
	if (idx === target_list[1].length - 1) {
	    str += ' right-rounded ';
	}
	if (target_list[0] === target_list[1][idx]) {
	    str += 'filter-active';
	} else {
	    str += 'filter-unset';
	}

	return str;
    };

    $scope.setCurrentProfileGroup = function(set_to_index) {
	$scope.profile_groups[0] = $scope.profile_groups[1][set_to_index];
    };

    $scope.matches_filter = function(profile) {
	return true;
    };
}]);
