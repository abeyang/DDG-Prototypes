app.controller('UserPageController', function($scope, ui) {
	ui.init('', '', false);
	$scope.ui = ui;

	// CHANGE USERNAME TO GET SPECIFIC USER
	// $scope.username = 'GuiltyDolphin';
	// $scope.username = 'AnthonyNeace';
	// $scope.username = 'riqpe';

	$scope.users = [
		{username: 'GuiltyDolphin'},
		{username: 'AnthonyNeace'},
		{username: 'riqpe'}
	];
	$scope.username = $scope.users[0].username;	// just setting a default

	// given a username, fill out the $scope variables appropriately, like IAs, etc.
	$scope.showUserInfo = function() {
		$scope.user = eval($scope.username);

		// developed IAs -- using http://underscorejs.org/
		$scope.ias = _.filter(ias, function(ia) { 
	  		return _.some(ia.developer, function(d) { return d.name == $scope.username});
		});

		// maintained IAs
		$scope.ias_maintained = _.filter(ias, function(ia) { 
			var found = false;  		
			if (ia.maintainer) { if (ia.maintainer.github == $scope.username) found = true; }
			return found;
		});
	}

	$scope.showUserInfo();

});