app.controller('UserPageController', function($scope, ui) {
	ui.init('', '', false);
	$scope.ui = ui;

	// list of available users
	$scope.users = [
		{username: 'GuiltyDolphin', hasInfo: true, hasAvatar: true},
		{username: 'AnthonyNeace', hasInfo: true, hasAvatar: true},
		{username: 'riqpe', hasInfo: true, hasAvatar: true},
		{username: 'pjhampton', hasInfo: true, hasAvatar: true},
		{username: 'mintsoft', hasInfo: true, hasAvatar: true}
	];

	// given a username, fill out the $scope variables appropriately, like IAs, etc.
	$scope.showUser = function() {
		$scope.user = eval($scope.username);

		// TODO: merge developed IAs with maintained IAs, which means need to dig deeper
		// developed IAs -- using http://underscorejs.org/
		$scope.ias_developed = _.filter(ias, function(ia) { 
	  		return _.some(ia.developer, function(d) { return d.name == $scope.username});
		});

		// maintained IAs
		$scope.ias_maintained = _.filter(ias, function(ia) { 
			var found = false;  		
			if (ia.maintainer) { if (ia.maintainer.github == $scope.username) found = true; }
			return found;
		});
	}

	// initializing a default user
	$scope.username = $scope.users[0].username;	
	$scope.showUser();

	// initializing show_issues
	$scope.show_issues = '';

});