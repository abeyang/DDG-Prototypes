
// templates

Vue.component('card', {
	props: ['row', 'index', 'x'],
	template: '#card',
	methods: {
		update: function() {
			this.$emit('update');
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
				type: 'radio',
				options: [
					{
						title: 'Encrypted',
						points: 0
					},
					{
						title: 'Unencrypted',
						points: -1
					}
				],
				toggle: false,
				desc: 'You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…',
				points: 0
			},
			{
				id: 'trackers',
				title: 'Tracker Networks',
				snippet: 'Tracker networks aggregate your web history into a data profile about you.',
				type: 'scale',
				options: [{
					min: 0,
					max: 20,
					points: -4
				}],
				toggle: false,
				desc: 'You may realize that hidden trackers lurk on many sites you visit. What you may not realize, though, is 76 percent of websites now contain hidden Google trackers, 24 percent have hidden Facebook trackers, and several other major tracker networks are at 10%+.Because these major tracker networks are on so many pages…',
				points: 0
			}

		],
		score: 0,
		grade: 'A',
		// dark ui toggles:
		toggle: {
			title: true,
			snippet: true,
			url: true,
			favicon: true,
			result: true,
			misc: false,
			export: false
		},
		// x = current settings
		x: {},
		presets: {
			'default': {
				isencrypted: false, 
				trackers: 10
			}
		}
	},
	methods: {
		showhide: function(item) {
			this.toggle[item] = !this.toggle[item];
		},
		setPreset: function(key) {
			this.x = this.presets[key];
			// TODO: needs to update elements
		},
		changePreset: function(event) {
			// the 'key' is actually event's value (confusing, I know)
			var key = event.target.value
			this.setPreset(key);
		},

		// calculates total score 
		calculateScore: function() {
			this.rows[0].points = (this.x.isencrypted) ? 0 : -1;
			this.rows[1].points = -Math.floor(this.x.trackers/4);

			var total = 0;
			var point_arr = _.pluck(this.rows, 'points');
			_.each(point_arr, function(n) {
				total += n;
			});
			this.score = total;
			
			
		}

	},
	created: function() {
		// set x as this preset:
		this.setPreset('default');
		this.calculateScore();
	}
});


