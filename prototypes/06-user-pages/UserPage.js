app.controller('UserPageController', function($scope, fn) {
	$scope.fn = fn;

	// list of available users
	$scope.users = [
		{username: 'GuiltyDolphin', hasInfo: true, avatar: "guiltydolphin.png"},
		{username: 'AnthonyNeace', hasInfo: true, avatar: "anthonyneace.jpg"},
		{username: 'riqpe', hasInfo: true, avatar: "riqpe.png"},
		{username: 'pjhampton', hasInfo: true, avatar: "pjhampton.jpg"},
		{username: 'mintsoft', hasInfo: true, avatar: "mintsoft.png"},
		{username: 'jagtalon', hasInfo: true, avatar: "jagtalon.jpeg"},
		{username: 'moollaza', hasInfo: true, avatar: "moollaza.jpeg"}
	];

	// for sorting instant answers (live should be first)
	$scope.iaSort = function(ia) {
		switch (ia.dev_milestone) {
			case 'live': return 0;
			case 'complete': return 10;
			case 'testing': return 20;
			case 'development': return 30;
			case 'planning': return 40;
			default: return 1000;
		}
	};

	// $scope.myValueFunction = function(card) {
 	//   		return card.values.opt1 + card.values.opt2;
	// };

	// given a username, fill out the $scope variables appropriately, like IAs, etc.
	$scope.showUser = function() {
		$scope.count = {};
		$scope.topics = [];

		$scope.user = eval($scope.username);

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

		// opened issues
		$scope.issues_open = _.filter($scope.user.issues, function(issue) {
			return issue.state == 'open';
		});

		// all pull requests (from issues list)
		$scope.prs = _.filter($scope.user.issues, function(issue) {
			return issue.pull_request != null;
		});

		// opened pull requests
		$scope.prs_open = _.filter($scope.prs, function(pr) {
			return pr.state == 'open';
		});

		// topic list
		var topics = {};
		_.each($scope.ias, function(ia) {
			if (ia.topic) {
				_.each(ia.topic, function(t) {
					if (topics[t]) ++topics[t];
					else topics[t] = 1;
				});
			}
		});

		_.each(topics, function(value, key) {
			var obj = {topic: '', amount: 0}
			obj.topic = key;
			obj.amount = value;
			$scope.topics.push(obj);
		});

		$scope.count.all_ias = _.size($scope.ias);
		$scope.count.open_issues = _.size($scope.issues_open);
		$scope.count.closed_issues = _.size($scope.user.issues) - $scope.count.open_issues;
		$scope.count.open_prs = _.size($scope.prs_open);
		$scope.count.closed_prs = _.size($scope.prs) - $scope.count.open_prs;

		var maxtopic = _.max($scope.topics, function(topic){ return topic.amount; });
		$scope.count.max_topics = maxtopic.amount;

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
		},
		// get avatar image. If not found, uses first letter from devname
		getAvatar: function(users, username, align) {
			var html = '';
			if (username) {
				html = '<div class="avatar ' + align + '" title="' + username + '"';
				var user = this.findByAttr(users, 'username', username);

				if (user && user.avatar) html += '><img src="avatars/' + user.avatar + '" /></div>';
				else html += "><span>" + username.charAt(0) + '</span></div>';
			}

			return html;
		},
		// get developers based on an instant answer; returns html
		getDevs: function(ia) {
			var html = '';
			_.each(ia.developer, function(dev) {
				html += '<span>' + dev.name + ' </span>';
			});
			return html;
		},
		// get developers based on an instant answer; returns avatars
		getDevsAvatars: function(ia, users, skipname) {
			var html = '';
			_.each(ia.developer, function(dev) {
				// console.log(skipname + ' | ' + dev.name);
				if (skipname != dev.name) html += this.getAvatar(users, dev.name, '');
			}, this);
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
		}

	};
});
