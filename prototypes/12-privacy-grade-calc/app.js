
// templates

Vue.component('card', {
	props: ['row', 'index', 'x'],
	template: '#card',
	methods: {
		update: function() {
			this.$emit('update');
		},
		toggleCard: function(row, event) {
			// console.log($(event.target).prop('tagName') );
			var thistag = $(event.target).prop('tagName');
			if ( (thistag != 'SPAN') && (thistag != 'INPUT') && (thistag != 'I') ) {
				row.toggle = !row.toggle;	
			}
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
				title: 'Is the connection secure?',
				snippet: 'An encrypted connection prevents eavesdropping of any personal information you send to a website.',
				toggle: false,
				desc: 'Encrypted connections ensure that only authorized clients can access information sent over the connection. In order to decode the encrypted information, the client must have a unique key, otherwise the information is meaningless to an eavesdropper. Over unencrypted connections, information is sent as plain text so  anyone can read it without authorization.',
				points: 0
			},
			{
				id: 'trackers',
				title: 'How many tracker networks?',
				snippet: 'Tracker networks aggregate your web activity into a data profile, which they sell to advertisers.',
				toggle: false,
				desc: ' Trackers lurk on almost every website you visit. The most common types of trackers are used by advertising companies to collect information about your web activity. Advertising companies rely on networks of these trackers to collect as much information as possible about you and your online activity so they can target you with ads.',
				points: 0
			},
			{
				id: 'majornetworks',
				title: 'Any major tracking networks?',
				snippet: 'These networks exist on a larger percentage of websites, tracking you across more of the internet.',
				toggle: false,
				desc: 'Because major tracking networks have much more web coverage than other networks, they can assemble more information about you, making it even easier for advertisers to target you with invasive ads. 76% of websites now contain hidden Google trackers, 24% have hidden Facebook trackers, and several other major tracker networks are at 10%+.',
				points: 0
			},
			{
				id: 'percentsites',
				title: 'Is this a network, and what is its reach?',
				snippet: 'If the sites itself owns a major tracker network, it will have access to more of your personal data.',
				toggle: false,
				desc: 'Some popular web companies also operate tracking networks. These companies will collect any information you share on their websites and combine it with data collected by their tracker network on other sites. This ensures that their profile on you is as robust as possible. The greater the reach of their network, the more personal data they can collect.',
				points: 0
			},
			{
				id: 'privacypractices',
				title: 'How well does the site protect your data?',
				snippet: 'Sites collect and share your personal data, limited to policies outlined in their Terms of Service.',
				toggle: false,
				desc: 'Most websites collect information about you to perform functions or provide services. What they collect, how they use it, and who they share it with is outlined in their Terms of Service. These terms are usually very long and hard to decipher so we\'ve partnered with ToSDR to decode these documents and score websites based on their privacy practices.',
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
				percent: 30,
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
				percent: 15,
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
				percent: 75,
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
				percent: 15,
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
			this.x.info = {};
			this.name = key;
		},

		// calculates total score 
		// this gets called whenever a "filter element" on the page changes
		// thus, changing presets ("domain") will call this automatically
		// this.x.info.majornetworks 
		calculateScore: function() {
			this.rows[0].points = (this.x.isencrypted) ? 0 : -1;
			this.rows[1].points = -Math.floor(this.x.trackers/4);
			var networks_arr = _.pick(this.x.major, function(val, key) { return val==true });
			this.rows[2].points = -_.size(networks_arr);
			this.rows[3].points = -Math.floor(this.x.percent/10);
			this.rows[4].points = this.x.practices;

			// update info
			switch (this.x.practices) {
				case 0: 	this.x.info.practices = 'Excellent'; 	break;
				case -1: 	this.x.info.practices = 'Good'; 		break;
				case -2: 	this.x.info.practices = 'Poor'; 		break;
				case -3: 	this.x.info.practices = 'Mixed'; 		break;
				default: 	this.x.info.practices = 'Unknown'; 
			}

			var str = '';
			_.each(networks_arr, function(val, key) {
				// Title case, and appending a comma to the end
				str += key.substr(0,1).toUpperCase() + key.substr(1, key.length) + ', ';
			});
			this.x.info.majornetworks = str.substring(0, str.length-2);
			
			// update total score
			var total = 0;
			var point_arr = _.pluck(this.rows, 'points');
			_.each(point_arr, function(n) {
				total += n;
			});
			this.score = total;
			
			// update grade
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


