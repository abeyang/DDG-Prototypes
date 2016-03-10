app.controller('UserPageController', function($scope, ui) {
	ui.init('', '', false);
	$scope.ui = ui;

	// CHANGE USERNAME TO GET SPECIFIC USER
	var username = 'GuiltyDolphin';
	// var username = 'AnthonyNeace';
	// var username = 'riqpe';

	$scope.user = eval(username);

	// developed IAs -- using http://underscorejs.org/
	$scope.ias = _.filter(ias, function(ia) { 
  		return _.some(ia.developer, function(d) { return d.name == username});
	});

	// maintained IAs
	$scope.ias_maintained = _.filter(ias, function(ia) { 
		var found = false;  		
		if (ia.maintainer) { if (ia.maintainer.github == username) found = true; }
		return found;
	});

});