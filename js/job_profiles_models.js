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
	return profile['category'] === $scope.profile_groups[0];
    };


    $scope.job_profiles = [{category: 'Product Development', title: 'Product Manager', description: 'Brings a technology product to market in response to a customer need (from vision to planning to execution).'},
			   {category: 'Product Development', title: 'User Experience Designers', description: 'Ensures that users have a valuable experience interacting with a digital or physical product or service.'},
			   {category: 'Software', title: 'Coders/Programmers', description: 'Turns the designs made by software engineers and web developers into data instructions called code that computing devices can follow (end product: software & web pages).'},{category: 'Software', title: 'Web Developer', description: 'Designs and creates websites. Responsible for the look of the site (front-end) and behind the scenes interactions with servers and databases (back-end). Developers who work on both the front-end and back-end are called "full-stack" developers.'},
			   {category: 'Hardware', title: 'Hardware Engineer', description: 'Designs, develops, and tests physical computing devices and their internal and external components.'},
			   {category: 'Software', title: 'Software Engineer', description: 'Designs, develops, and tests the virtual operating systems and applications that run on computing devices.'},

			   {category: 'Visual Design', title: 'Graphic & Multi-media Designers (including 3D animators)', description: 'Combines art and technology to visually inspire, inform, and captivate.  Graphic designers work on still images for print or the web, whereas multi-media designers and animators produce animation for video games, movies, television, and the web.'},
			  ];
    
}]);
