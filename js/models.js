angular.module('techpaths', ['ngRoute']).controller('techpaths_ctrl', ['$scope', function ($scope) {
    $scope.dd_recs = window.dd_choices;
    $scope.orgs = window.orgs;

    // Convert the shown age label to the internal age label
    $scope.normalized_age = {
	"a child" : "Children",
	"a youth" : "Youth",
	"an adult" : "Adults"
    };
    
    $scope.age_set = 'Children'
    $scope.range_values = window.range_values;
    $scope.close_boxes = [true, true];
    $scope.activities = window.activities;
    $scope.price_ranges = [];
    $scope.price_set = 'Free';
    
    $scope.setPriceRange = function(normalized_range) {
	$scope.price_set = normalized_range;
	$scope.price_ranges = $scope.range_values[normalized_range];
    };
    $scope.setAge = function(shown_label) {
	$scope.age_set = $scope.normalized_age[shown_label];
    };
    
    $scope.filtered_orgs = function() {
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
        
        f_orgs = $scope.orgs.filter(function(elt, idx) {
            // for each org ...
            var matches = false;
	    var idx1, normalized_area, area;
            for (idx1 in elt['areas']) {
                area = elt['areas'][idx1];
                
                // ... check if any of its areas match the chosen skill.

                // normalized by removing all nonspace and non-alpha; reduce all spaces to single space;
                // replace space with period
                normalized_area = area.toLowerCase().replace(/[^a-z\s]/g, '');
                normalized_area = normalized_area.replace(/\s+/g, ' ');
                normalized_area = normalized_area.replace(/\s/g, '.');

                matches = matches || ($scope.activities[skill_rec].indexOf(normalized_area) != -1);
            }
            return matches;
        });

	// If price is chosen (TODO What's the default?) use that as an add'l filter
	// note: price in the data is single choice

	if($scope.price_ranges.length != 0) {
	    f_orgs = f_orgs.filter(function(elt, idx) {
		return $scope.price_ranges.indexOf(elt['price_range']) != -1
	    });
	}

	// If age is chosen (TODO What's the default?) use that as an add'l filter
	// note: age in the data is multiple choice
	
	if(typeof $scope.age_set != 'undefined') {
	    f_orgs = f_orgs.filter(function(elt, idx) {
		return elt['age_range'].indexOf($scope.age_set) != -1
	    });
	}

        return f_orgs;
    }
        
    $scope.toggle_boxes = function(f_idx) {
        $scope.close_boxes[f_idx] = !($scope.close_boxes[f_idx]);
    }
    
    $scope.select_option = function($event, f_idx, c_idx) {
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

    $scope.empty_area = function(str) {
	return str.match(/\d+/)===null;
    };
    
}]);

