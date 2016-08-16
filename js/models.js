angular.module('techpaths', ['ngRoute']).controller('techpaths_ctrl', ['$scope', function ($scope) {
    $scope.dd_recs = window.dd_choices;
    $scope.orgs = window.orgs;
    $scope.orgs.forEach(function(elt, idx) {
	elt['rolled_out'] = false;
    });
    
    // Convert the shown age label to the internal age label
    $scope.normalized_age = {
	"a child" : "Children",
	"a youth" : "Teens",
	"an adult" : "Adults",
	'a kid (under 12)' : 'Children',
	'a teen (upto 17)' : 'Teens',
	'an adult (18+)' : 'Adults'
    };
    
    $scope.age_set = 'Children'
    $scope.skill_level_set = 'Learning'
    $scope.filter_values = window.filter_values;
    $scope.close_boxes = [true, true];
    $scope.activities = window.activities;

    $scope.display_convert = function(key, input) {
	if (key === 'price') {
	    if (input === '$$$$$') {
		return '---';
	    };
	};
	return input;
    };
	    

    $scope.idify = function(type, idx) {
	str = $scope.filter_values[type][1][idx]['label'].replace(/\s/, '-');
	str = str.replace(/\$/, 'dollar');
	return type + "-" + str.toLowerCase();
    };
    
    // this might be something to DRY up the similar function that's in job_profiles_models.js
    $scope.getFilterClass = function(type, idx) {
	var str = '';
	var list = $scope.filter_values[type];
	if (idx === 0) {
	    str += ' left-rounded ';
	}
	if (idx === list[1].length - 1) {
	    str += ' right-rounded ';
	}

	if (list[0] === idx) {
	    str += 'filter-active';
	} else {
	    str += 'filter-unset';
	}
	return str;
    };
    
    $scope.getTopFilterClass = function(idx, rec) {
	if (rec['options'][0] === rec['options'][1][idx]) {
	    return 'top-filter-unset';
	} else {
	    return 'top-filter-active';
	}
    };

    $scope.setFilter = function(type, idx) {
	$('.drop-down-details').removeClass('rolldown');
	var list = $scope.filter_values[type];
	list[0] = idx;
    };
    
    $scope.setAge = function(shown_label) {
	$scope.age_set = $scope.normalized_age[shown_label];
    };

    $scope.toggle_show_status = function(org) {
	org['rolled_out'] = !org['rolled_out'];
    };

    $scope.has_certificate = function(org) {
	return org['certification'].trim() != ''
    };
    
    $scope.show_desc = function(org, type) {
	if (type == 'description') {
	    return (org['rolled_out'] ? org['description'] : org['short_desc']);
	} else if (type == 'programs') {
	    return (org['rolled_out'] ? org['areas'].join(', ').replace(/,\s*,/, ', ') : org['short_training']);
	}
    };
    
    $scope.matches_filter = function(org) {
	// Filter by skill taxonomy and also by price range if range is set
        var skill_rec, f_orgs, age_range;

        
        skill_rec = $scope.dd_recs.filter(function(elt, idx) {
            return elt['dropdown_type'] == 'skill taxonomy';
        });
        shown_label = $scope.dd_recs.filter(function(elt, idx) {
            return elt['dropdown_type'] == 'learner taxonomy';
        });
	$scope.setAge(shown_label[0]['options'][0]);

        // Which skill is selected in the dropdown currently
        skill_rec = skill_rec[0].options[0];
        
        var matches = false;
	var idx1, normalized_area, area;
        for (idx1 in org['areas']) {
            area = org['areas'][idx1];
                
            // ... check if any of its areas match the chosen skill.
            // normalized by removing all nonspace and non-alpha; reduce all spaces to single space;
            // replace space with period
            normalized_area = area.toLowerCase().replace(/[^a-z\s]/g, '');
            normalized_area = normalized_area.replace(/\s+/g, ' ');
            normalized_area = normalized_area.replace(/\s/g, '.');
	    
            matches = matches || ($scope.activities[skill_rec].indexOf(normalized_area) != -1);
        }

	// If price is chosen (TODO What's the default?) use that as an add'l filter
	// note: price in the data is single choice

	var type = "price";
	var chosen_index = $scope.filter_values[type][0];
	matches = matches && ($scope.filter_values[type][1][chosen_index]['normalized_list'].indexOf(org['price_range']) != -1);
	
	type = "skill_level";
	chosen_index = $scope.filter_values[type][0];
	var intersects = false;
	org[type].forEach(function(elt, idx) {
	    intersects = intersects || $scope.filter_values[type][1][chosen_index]['normalized_list'].indexOf(elt) != -1;
	});

	// The skills are provided as a list so we have to check for any one of them being in the list of chosen skills
	matches = matches && intersects;

	// If age is chosen (TODO What's the default?) use that as an add'l filter
	// note: age in the data is multiple choice
	
	if(typeof $scope.age_set != 'undefined') {
	    matches = matches && org['age_range'].indexOf($scope.age_set) != -1
	}
	
        return matches;
    }
        
    $scope.toggle_boxes = function(f_idx) {
	// Make sure to close all other boxes
	$scope.close_boxes.forEach(function(elt, idx) {
	    if (idx != f_idx) {
		$scope.close_boxes[idx] = true;
	    }
	});
	
        $scope.close_boxes[f_idx] = !($scope.close_boxes[f_idx]);
    }

    $scope.getSearchOptionClass = function(idx) {
	if ($scope.close_boxes[idx]) {
	    return '';
	} else {
	    return 'chosen';
	}
    };
    
    $scope.select_option = function($event, f_idx, c_idx) {
	$('.drop-down-details').removeClass('rolldown');
	
        // All options other than the idx'ed option
        $scope.dd_recs[f_idx].options[0] = $scope.dd_recs[f_idx].options[1][c_idx];
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

    $scope.true_area = function(str) {
	return str.match(/\s\s\s\s/)===null;
    };
    
}]);

