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
		{username: 'moollaza', hasInfo: true, avatar: "moollaza.jpeg"},
		{username: 'mattr555', hasInfo: true, avatar: "mattr555.jpeg"},
		{username: 'MrChrisW', hasInfo: true, avatar: "MrChrisW.jpeg"}
	];

	// for sorting instant answers: 
	// live first, followed by those with issues + PRs
	// (lowest rank shows first)
	$scope.iaSort = function(ia) {
		var rank = 0;

		switch (ia.dev_milestone) {
			case 'live': rank = 50; break;
			case 'complete': rank = 200; break;
			case 'testing': rank = 400; break;
			case 'development': rank = 600; break;
			case 'planning': rank = 800; break;
			default: rank = 10000;
		};

		rank = rank - Number(ia.open_prs) - Number(ia.open_issues);
		return rank;
	};

	var initial = false;

	// for use by filter (see app.filter... below)
	$scope.filtertopic = '';
	$scope.othertype = '';
	
	$scope.setFilterTopic = function(topic) {
		// double-clicking will reset
		$scope.filtertopic = ($scope.filtertopic == topic) ? '' : topic;
		$scope.othertype = '';
	}
	$scope.setOtherType = function(type) {
		// double-clicking will reset
		$scope.othertype = ($scope.othertype == type) ? '' : type;
		$scope.filtertopic = '';
	}

	// given a username, fill out the $scope variables appropriately, like IAs, etc.
	$scope.showUser = function() {
		$scope.count = {};
		$scope.topics = [];

		if(!initial && window.location.hash) {
			$scope.username = window.location.hash.replace(/#\//, "");
		}
		initial = true;

		window.location.hash = "#/" + $scope.username;

		$scope.user = eval($scope.username);

		// developed & maintained IAs, all in one array (no ghosted or deprecated)
		$scope.ias = _.filter(ias, function(ia) {
	  		return (
	  			(_.some(ia.developer, function(d) { return d.name == $scope.username}) || (ia.maintainer && ia.maintainer.github == $scope.username))
	  			&& !(ia.dev_milestone=='ghosted' || ia.dev_milestone=='deprecated'));
		});

		// developed IAs -- using http://underscorejs.org/
		$scope.ias_developed = _.filter(ias, function(ia) {
	  		return _.some(ia.developer, function(d) { return d.name == $scope.username});
		});

		// developed IAs w/o the pipeline stuff
		$scope.ias_developed_reduced = _.filter($scope.ias_developed, function(ia) {
			return ia.dev_milestone === "complete" || ia.dev_milestone === "live";
		})

		// maintained IAs (no ghosted or deprecated)
		$scope.ias_maintained = _.filter(ias, function(ia) {
			return (ia.maintainer && ia.maintainer.github == $scope.username) && !(ia.dev_milestone=='ghosted' || ia.dev_milestone=='deprecated');
		});

		// developed IAs but NOT maintained (no ghosted or deprecated)
		$scope.ias_developed_only = _.filter(ias, function(ia) {
	  		return (_.some(ia.developer, function(d) { return d.name == $scope.username}) && !(ia.maintainer && ia.maintainer.github == $scope.username) && !(ia.dev_milestone=='ghosted' || ia.dev_milestone=='deprecated'));
		});

		// opened issues
		$scope.issues_open = _.filter($scope.user.issues, function(issue) {
			return issue.state === 'open' && issue.body.match(/https:\/\/duck\.co\/ia\/view\/(.*?)/);
		});

		// all pull requests (from issues list)
		$scope.prs = _.filter($scope.user.issues, function(issue) {
			return issue.pull_request != null;
		});

		// opened pull requests
		$scope.prs_open = _.filter($scope.prs, function(pr) {
			return pr.state == 'open';
		});

		// opened pull requests & being reviewed by user
		$scope.prs_open_reviewed = _.filter($scope.prs, function(pr) {
			return (pr.state == 'open' && (pr.assignee && pr.assignee.login == $scope.username));
		});

		var getIA = function(issue) {
			var ia = issue.body.match(/https:\/\/duck\.co\/ia\/view\/([_a-zA-Z]+)/);

			if(ia) {
				return _.extend(issue, { ia_page: ia[1].replace(/_/g, " ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) });
			}

			return issue;
		};

		$scope.prs_open_reviewed_2 = _.map(_.filter($scope.prs, function(pr) {
			return /https:\/\/duck\.co\/ia\/view\//.test(pr.body) && (pr.state == 'open' && (pr.assignee && pr.assignee.login == $scope.username));
		}), getIA);

		// opened pull requests & developed by user
		$scope.prs_open_developed = _.filter($scope.prs, function(pr) {
			return (pr.state == 'open' && (pr.user && pr.user.login == $scope.username));
		});

		// opened pull requests & developed by user
		$scope.prs_open_developed_2 = _.map(_.filter($scope.prs, function(pr) {
			return /https:\/\/duck\.co\/ia\/view\//.test(pr.body) && (pr.state == 'open' && (pr.user && pr.user.login == $scope.username));
		}), getIA);

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

		// reset filters
		$scope.setFilterTopic('');

		// set "counters"
		$scope.count.all_ias = _.size($scope.ias);
		$scope.count.maintained_ias = _.size($scope.ias_maintained);
		$scope.count.developed_ias = _.size($scope.ias_developed);
		$scope.count.developed_only_ias = _.size($scope.ias_developed_only);
		$scope.count.open_issues = _.size($scope.issues_open);
		$scope.count.closed_issues = _.size($scope.user.issues) - $scope.count.open_issues;
		$scope.count.open_prs = _.size($scope.prs_open);
		$scope.count.reviewed_prs = _.size($scope.prs_open_reviewed);
		$scope.count.developed_prs = _.size($scope.prs_open_developed);
		$scope.count.closed_prs = _.size($scope.prs) - $scope.count.open_prs;

		$scope.count.prs_ias = _.size(_.filter($scope.ias, function(ia) {
			return (ia.open_prs > 0) || (ia.open_issues > 0);
		}));
		$scope.count.progress_ias = _.size(_.filter($scope.ias, function(ia) {
			return (ia.dev_milestone != 'live');
		}));

		var maxtopic = _.max($scope.topics, function(topic){ return topic.amount; });
		$scope.count.max_topics = maxtopic.amount;

		// by default. for 'filterable'
		$scope.show_ias = ($scope.count.maintained_ias) ? $scope.ias_maintained : $scope.ias_developed_only;

	} // showUser()

	// initializing a default user
	$scope.username = $scope.users[0].username;
	$scope.showUser();

	// initializing show_issues
	$scope.show_issues = '';

});

// filter IAs by... (default is to show all)
// http://stackoverflow.com/questions/16563018/angularjs-custom-filters-and-ng-repeat
// check out "filter 3": https://toddmotto.com/everything-about-custom-filters-in-angular-js/
app.filter('filterIA', function() {
	return function (items, topic, othertype, username) {
		// console.log (items + ' ' + topic + ' ' + othertype + ' ' + username);

		// return everything if no topic + othertype is given
		if (topic == '' && othertype == '') return items;

		// filter by topic
		else if (topic != '') {
			return _.filter(items, function(ia) {
				return _.contains(ia.topic, topic);
			});
		}

		// filter by type
		else {
			if (othertype == 'prs') {
				return _.filter(items, function(ia) {
					return (ia.open_prs > 0) || (ia.open_issues > 0);
				});
			}

			else if (othertype == 'maintained') {
				return _.filter(items, function(ia) {
					return (ia.maintainer && ia.maintainer.github == username);
				});
			}

			else if (othertype == 'developed') {
				return _.filter(items, function(ia) {
					return _.some(ia.developer, function(d) { return d.name == username});
				});
			}

			else if (othertype == 'progress') {
				return _.filter(items, function(ia) {
					return (ia.dev_milestone != 'live');
				});
			}
		}

	};
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
		},
		// get "time ago" from date: "1 month ago"
		getFromNow: function(datetimestr) {
        	return moment(datetimestr).fromNow();
        },
        // get *shortened* "time ago" from date: "1m"
        getFromNowShort: function(datetimestr) {
        	var str = moment(datetimestr).fromNow(true);
        	var arr = str.split(' '); 	// "2 months" => ['2', 'months']
        	str = (arr[0] == 'a') ? 1 : arr[0];		// "a" => "1"
        	return str + arr[1][0];	// "2m"
        },
        // get *shortened* "time ago" from date into days: "1m" => "31d"
        getFromNowShortDays: function(datetimestr) {
        	var today = new Date();
        	var day = new Date(datetimestr);
        	var timeago = today.getTime() - day.getTime();	// in milliseconds
        	return Math.round(timeago/86400000) + 'd';	// 1000 * 60 * 60 * 24
        }

	};
});
