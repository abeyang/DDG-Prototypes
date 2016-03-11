app.controller('UserPageController', function($scope, fn) {
	$scope.fn = fn;

	// list of available users
	$scope.users = [
		{username: 'GuiltyDolphin', hasInfo: true, avatar: "guiltydolphin.png"},
		{username: 'AnthonyNeace', hasInfo: true, avatar: "anthonyneace.jpg"},
		{username: 'riqpe', hasInfo: true, avatar: "riqpe.png"},
		{username: 'pjhampton', hasInfo: true, avatar: "pjhampton.jpg"},
		{username: 'mintsoft', hasInfo: true, avatar: "mintsoft.png"}
	];

	// console.log(fn.findByAttr($scope.users, 'username', 'pjhampton'));

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

// helper functions
app.factory('fn', function() {
	return {
		// given an array, search for an attr (like 'username'): if found, return object
		findByAttr: function(arr, attr, name) {
			return _.find(arr, function(obj) {
		        return obj[attr] == name;
		    });
		}
	};
});