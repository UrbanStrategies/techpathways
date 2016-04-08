angular.module('techpaths', ['ngRoute']).controller('techpaths_ctrl', ['$scope', function ($scope) {
    $scope.dd_recs = window.dd_choices;
    $scope.orgs = window.orgs;
    $scope.close_boxes = [true, true];
    $scope.activities = window.activities;
    
    $scope.filtered_orgs = function() {
        var skill_rec, f_orgs;
        
        skill_rec = $scope.dd_recs.filter(function(elt, idx) {
            return elt['dropdown_type'] == 'skill taxonomy';
        });

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
}]);

