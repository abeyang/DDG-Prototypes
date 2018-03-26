
// templates

Vue.component('card', {
	props: ['row', 'index', 'x'],
	template: '#card',
	methods: {
		update: function() {
			this.$emit('update');
		},
		toggleCard: function(row, event) {
			var e = event.target;
			// console.log($(e).prop('tagName') );
			
			var thistag = $(e).prop('tagName');

			// toggle card
			if ( ((thistag != 'SPAN') && (thistag != 'INPUT') && (thistag != 'I')) || $(e).hasClass('disabled') ) {
				row.toggle = !row.toggle;	
			}
			// otherwise, it's most likely a button -- change website to custom
			else {
				pg.name = 'Custom';
			}
		},
		hoverResult: function(event) {
			var row = event.currentTarget;
			$(row).addClass('hover');
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
				title: 'Type of connection?',
				snippet: 'An encrypted connection prevents eavesdropping of any personal information you send to a website.',
				toggle: false,
				desc: 'Encrypted connections ensure that only authorized clients can access information sent over the connection. In order to decode the encrypted information, the client must have a unique key, otherwise the information is meaningless to an eavesdropper. Over unencrypted connections, information is sent as plain text so  anyone can read it without authorization.',
				points: 0
			},
			{
				id: 'trackers',
				title: 'How many tracker networks?',
				snippet: 'Tracker networks aggregate your web activity into a data profile about you.',
				toggle: false,
				desc: 'Trackers lurk on almost every website you visit. The most common types of trackers are used by advertising companies to collect information about your web activity. Advertising companies rely on networks of these trackers to collect as much information as possible about you and your online activity so they can target you with ads.',
				points: 0
			},
			{
				id: 'majornetworks',
				title: 'Any major tracker networks?',
				snippet: 'These networks exist on a large percentage of websites, tracking more of your Internet activity.',
				toggle: false,
				desc: 'Because major tracking networks have much more web coverage than other networks, they can assemble more information about you, making it even easier for advertisers to target you with invasive ads. 76% of websites now contain hidden Google trackers, 24% have hidden Facebook trackers, and several other major tracker networks are at 10%+.',
				points: 0
			},
			{
				id: 'percentsites',
				title: 'Is website a major tracker network itself?',
				snippet: 'If the website is itself a major tracker network, it can use your data to target you across the Internet.',
				toggle: false,
				desc: 'Some popular web companies also operate tracking networks. These companies will collect any information you share on their websites and combine it with data collected by their tracker network on other sites. This ensures that their profile on you is as robust as possible. The greater the reach of their network, the more personal data they can collect.',
				points: 0
			},
			{
				id: 'privacypractices',
				title: 'How good is the website privacy policy?',
				snippet: 'The website\'s privacy policy outlines how they can collect and share your personal information.',
				toggle: false,
				desc: 'Most websites collect information about you to perform functions or provide services. What they collect, how they use it, and who they share it with is outlined in their Terms of Service. These terms are usually very long and hard to decipher so we\'ve partnered with ToSDR to decode these documents and score websites based on their privacy practices.',
				points: 0
			},
		],
		name: '',
		score: 0,
		grade: 'A',
		gradeclass: 'success',
		worst: -10,		// worst possible grade
		// x = current settings
		x: {},
		// "percent": 1=10%, 2=25%, 3=50%, 4=75%
		presets: {
			'Amazon': {
				isencrypted: true, 
				trackers: 1,
				major: {
					google: false,
					facebook: false,
					other: false
				},
				percent: 1,
				practices: -2
			},
			'Google': {
				isencrypted: true, 
				trackers: 0,
				major: {
					google: false,
					facebook: false,
					other: false
				},
				percent: 4,
				practices: -2
			},
			'LinkedIn': {
				isencrypted: true, 
				trackers: 8,
				major: {
					google: true,
					facebook: false,
					other: false
				},
				percent: 0,
				practices: -3
			},
			'Twitter': {
				isencrypted: true, 
				trackers: 5,
				major: {
					google: true,
					facebook: false,
					other: false
				},
				percent: 1,
				practices: -3
			},
			'Wikipedia': {
				isencrypted: true, 
				trackers: 0,
				major: {
					google: false,
					facebook: false,
					other: false
				},
				percent: 0,
				practices: -3
			},
			'Youtube': {
				isencrypted: true, 
				trackers: 0,
				major: {
					google: false,
					facebook: false,
					other: false
				},
				percent: 0,
				practices: -2
			},
			'Custom': {
				isencrypted: false, 
				trackers: 10,
				major: {
					google: true,
					facebook: true,
					other: true
				},
				percent: 2,
				practices: -2
			}
		}
	},
	methods: {
		setPreset: function(key) {		
			// clone is shallow; need to do another clone for the 'major' property
			var clone = _.clone(this.presets[key]);
			clone.major = _.clone(this.presets[key].major);

			this.x = clone;
			this.name = key;
		},

		// calculates total score 
		// this gets called whenever a "filter element" on the page changes
		// thus, changing presets ("domain") will call this automatically
		// this.x.info.majornetworks 
		calculateScore: function() {
			// update points for each row
			this.rows[0].points = (this.x.isencrypted) ? 0 : -1;

			if (this.x.trackers == 0) this.rows[1].points = 0;
			else if (this.x.trackers < 10) this.rows[1].points = -1;
			else if (this.x.trackers < 20) this.rows[1].points = -2;
			else this.rows[1].points = -3;

			this.rows[2].points = (_.some(this.x.major, function(val, key) { return val==true })) ? -1 : 0;
			
			// "percent": 1=10%, 2=25%, 3=50%, 4=75%
			this.rows[3].points = -this.x.percent;
			switch (String(this.x.percent)) {
				case '1': this.x.percentblurb = '10%'; break;
				case '2': this.x.percentblurb = '25%'; break;
				case '3': this.x.percentblurb = '50%'; break;
				case '4': this.x.percentblurb = '75%'; break;
				default: this.x.percentblurb = '0%';
			}
			this.x.percentblurb = (this.x.percent == 0) ? 
				'Not a major tracker network — ' + this.x.percentblurb + ' reach' :
				'Yes — ' + this.x.percentblurb + ' reach';
			
			// privacy policy: "unknown" is also -1, not -3
			this.rows[4].points = (this.x.practices > -3) ? this.x.practices : -1;
			
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
		this.setPreset('Twitter');
	}
});


