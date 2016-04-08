describe('init test', function() {
    var scope;
    var ctrl;

    beforeEach(module('ngRoute'));
    beforeEach(module('techpaths'));

    beforeEach(inject(function($rootScope, $controller) {
	scope = $rootScope.$new();
	ctrl = $controller('techpaths_ctrl', {$scope: scope});
    }));

    it('should have initial state', function(){
	expect(scope.close_boxes.length).to.equal(2);
    });

    it('should get activity matches', function() {
	// Select the skill type
	scope.dd_recs[1]['options'][0] = 'hardware';

	// very tied in right now to the data...
	expect(scope.filtered_orgs().length).to.equal(11);
    });
});

    
