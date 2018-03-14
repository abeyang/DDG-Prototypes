
// templates

Vue.component('card', {
	props: ['row', 'index', 'x'],
	template: '#card',
	methods: {
		update: function() {
			this.$emit('update');
		},
		hoverResult: function(event) {
			var row = event.currentTarget;
			$(row).addClass('hover');
			// TODO: need to figure out how to check the toggle is on...
			// - MAYBE it is toggling another field..?
			// console.log(this.row);
		},
		outResult: function(event) {
			// console.log(event.currentTarget);
			var row = event.currentTarget;
			$(row).removeClass('hover');
		}
	}
});


// privacy grade app
var pg = new Vue({
	el: '#pg',
	data: {
		rows: [
			{
				id: 'connection',
				title: 'Type of Connection',
				snippet: 'An encrypted connection prevents eavesdropping of any personal information you send to a website.',
				toggle: false,
				desc: 'You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…',
				points: 0
			},
			{
				id: 'trackers',
				title: 'Tracker Networks',
				snippet: 'Tracker networks aggregate your web history into a data profile about you.',
				toggle: false,
				desc: 'You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…',
				points: 0
			},
			{
				id: 'majornetworks',
				title: 'Major Tracker Networks',
				snippet: 'These are more harmful because they can track and target you across more of the internet.',
				toggle: false,
				desc: 'You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…',
				points: 0
			},
			{
				id: 'percentsites',
				title: 'How widely disseminated is this site?',
				snippet: 'Anything over 10% would be considered a major tracker network',
				toggle: false,
				desc: 'You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…',
				points: 0
			},
			{
				id: 'privacypractices',
				title: 'Privacy Practices Score',
				snippet: 'Scoring on Privacy Practices',
				toggle: false,
				desc: 'You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…',
				points: 0
			},
		],
		name: '',
		score: 0,
		grade: 'A',
		gradeclass: 'success',
		worst: -21,		// worst possible grade
		// x = current settings
		x: {},
		presets: {
			'Random Site': {
				isencrypted: false, 
				trackers: 10,
				major: {
					google: true,
					facebook: true,
					twitter: false,
					amazon: false,
					appnexus: true,
					oracle: false
				},
				percent: 36,
				practices: -2
			},
			'Amazon': {
				isencrypted: true, 
				trackers: 1,
				major: {
					google: false,
					facebook: false,
					twitter: false,
					amazon: false,
					appnexus: false,
					oracle: false
				},
				percent: 12,
				practices: -2
			},
			'Google': {
				isencrypted: true, 
				trackers: 0,
				major: {
					google: false,
					facebook: false,
					twitter: false,
					amazon: false,
					appnexus: false,
					oracle: false
				},
				percent: 76,
				practices: -2
			},
			'LinkedIn': {
				isencrypted: true, 
				trackers: 8,
				major: {
					google: true,
					facebook: false,
					twitter: false,
					amazon: false,
					appnexus: true,
					oracle: false
				},
				percent: 0,
				practices: -4
			},
			'Twitter': {
				isencrypted: true, 
				trackers: 5,
				major: {
					google: true,
					facebook: false,
					twitter: false,
					amazon: false,
					appnexus: false,
					oracle: false
				},
				percent: 12,
				practices: -4
			},
			'Wikipedia': {
				isencrypted: true, 
				trackers: 0,
				major: {
					google: false,
					facebook: false,
					twitter: false,
					amazon: false,
					appnexus: false,
					oracle: false
				},
				percent: 0,
				practices: -4
			},
			'Youtube': {
				isencrypted: true, 
				trackers: 0,
				major: {
					google: false,
					facebook: false,
					twitter: false,
					amazon: false,
					appnexus: false,
					oracle: false
				},
				percent: 0,
				practices: -2
			}
		}
	},
	methods: {
		setPreset: function(key) {
			this.x = this.presets[key];
			this.name = key;
		},

		// calculates total score 
		// this gets called whenever a "filter element" on the page changes
		// thus, changing presets ("domain") will call this automatically
		calculateScore: function() {
			this.rows[0].points = (this.x.isencrypted) ? 0 : -1;
			this.rows[1].points = -Math.floor(this.x.trackers/4);
			this.rows[2].points = -_.filter(this.x.major, function(val, key) { return val==true}).length;
			this.rows[3].points = -Math.floor(this.x.percent/10);
			this.rows[4].points = this.x.practices;

			var total = 0;
			var point_arr = _.pluck(this.rows, 'points');
			_.each(point_arr, function(n) {
				total += n;
			});
			
			this.score = total;
			
			if (total == 0) { 		this.grade = 'A'; this.gradeclass = 'success'; }
			else if (total == -1) {	this.grade = 'B'; this.gradeclass = 'success'; }
			else if (total >= -3) {	this.grade = 'C'; this.gradeclass = 'warning'; }
			else { 					this.grade = 'D'; this.gradeclass = 'danger'; }
		}

	},

	created: function() {
		// set x as this preset:
		this.setPreset('Random Site');
	}
});


