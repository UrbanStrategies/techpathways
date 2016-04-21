describe('init test', function() {
    var scope;
    var ctrl;

    beforeEach(module('ngRoute'));
    beforeEach(module('techpaths'));

    beforeEach(inject(function($rootScope, $controller) {
	scope = $rootScope.$new();
	ctrl = $controller('techpaths_ctrl', {$scope: scope});
    }));

    it('sees browser', function() {

	expect(document.documentElement).to.not.equal(null);
    });

    it('should have initial state', function(){
	expect(scope.close_boxes.length).to.equal(2);
    });

    it('should get learner matches', function() {
	// Select the skill type
	scope.dd_recs[0]['options'][0] = 'an adult';
	scope.dd_recs[1]['options'][0] = 'hardware';
	scope.price_ranges = ['$$', '$$ - $$$'];
	
	// very tied in right now to the data...
	stride = (scope.orgs.filter(function(elt, idx) {
	    return elt.id == 12
	}));

	expect(scope.matches_filter(stride[0])).to.equal(true);
    });
});

    
