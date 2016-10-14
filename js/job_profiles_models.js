angular.module('techpaths', ['ngRoute']).controller('jobprofiles_ctrl', ['$scope', function ($scope) {
    $scope.profile_groups = window.profile.profile_groups;
    $scope.job_profiles = window.profile.job_profiles;
    $scope.profile_list = window.profile.profile_list;
    $scope.shown_profile_keys = [];

    $scope.entry_salary_choice = function(profile_obj) {
	return profile_obj['salary'][1] === -1 ? profile_obj['salary'][0] : profile_obj['salary'][1]
    }
    
    $scope.tenyear_message = function(profile_obj) {
	if(profile_obj['salary'][1] === -1) {
	    return '';
	} else {
	    return 'in 10 years, salary can be ' + profile_obj['salary'][0]
	}
    }
    
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
	return profile['category'] === $scope.profile_groups[0];
    };

    $scope.is_on = function(key) {
	return $scope.shown_profile_key == key;
    };

    $scope.turn_on = function(key) {
	$scope.shown_profile_key = key
	return $scope.shown_profile_key;
    };

    $scope.find_profile_data = function(key) {
	// First profile_list element whose key matches _key_
	return $scope.profile_list.filter( function(element) {
	    return element['key'] == key
	})[0];
    };
}]);
