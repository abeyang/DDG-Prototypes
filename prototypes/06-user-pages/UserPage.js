app.controller('UserPageController', function($scope, ui) {
	ui.init('', '', false);
	$scope.ui = ui;

	// CHANGE USERNAME TO GET SPECIFIC USER
	//var username = 'GuiltyDolphin';
	// var username = 'AnthonyNeace';
	var username = 'riqpe';

	$scope.user = eval(username);
	$scope.ias = _.filter(ias, function(ia) { 
  		return _.some(ia.developer, function(d) { return d.name == username});
	});

});