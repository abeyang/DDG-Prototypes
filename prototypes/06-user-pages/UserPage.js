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
		// developed & maintained IAs, all in one array
		$scope.ias = _.filter(ias, function(ia) { 
	  		return (_.some(ia.developer, function(d) { return d.name == $scope.username}) || (ia.maintainer && ia.maintainer.github == $scope.username));
		});

		// developed IAs -- using http://underscorejs.org/
		$scope.ias_developed = _.filter(ias, function(ia) { 
	  		return _.some(ia.developer, function(d) { return d.name == $scope.username});
		});

		// maintained IAs
		$scope.ias_maintained = _.filter(ias, function(ia) { 
			return (ia.maintainer && ia.maintainer.github == $scope.username);
		});
	}

	// initializing a default user
	$scope.username = $scope.users[2].username;	
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
		},
		// get developers based on an instant answer; returns html
		getDevs: function(ia) {
			var html = '';
			_.each(ia.developer, function(dev) {
				html += '<span>' + dev.name + ' </span>';
			});
			return html;
		},
		// get topics based on an instant answer; returns html
		getTopics: function(ia) {
			var html = '';
			_.each(ia.topic, function(topic) {
				html += '<span>' + topic + ' </span>';
			});
			return html;
		},
		// get labels based on an issue; returns html
		getLabels: function(issue) {
			var html = '';
			_.each(issue.labels, function(label) {
				html += '<span>' + label.name + '; </span>';
			});
			return html;
		},
	};
});