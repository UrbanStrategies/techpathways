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
});

    
