// app
var app = new Vue({
	el: '#app',
	data: {
		ui: {
			search: 'tycho',
			tab: 'Web'
		}
	}
});

// serp
Vue.component('serp-result', {
	props: ['serp', 'x'],
	template: '#serp-result',
	methods: {
		// a computed getter
		getLink: function () {
			// `this` points to the vm instance
			var url = this.serp.url;
			// strip html (b tags):
			return 'http://' + String(url).replace('<b>', '').replace('</b>', '');
		},
		gotoLink: function() {
			location.assign(this.getLink());
		},
		getDate: function() {
			var date = this.serp.date;
			if (date) {
				return moment(date, "YYYYMMDD").format("MMM DD, YYYY");
			}
		},
		hoverResult: function(event) {
			// console.log(event.currentTarget.getElementsByClassName('titlelink')[0].style);
			// backing:
			event.currentTarget.style.backgroundColor = this.x.result.backing
			// title:
			// event.currentTarget.getElementsByClassName('titlelink')[0].style.color = this.x.result.title_hover;
			// url:
			// event.currentTarget.getElementsByClassName('urllink')[0].style.color = this.x.result.url_hover;
			// favicon: 
			event.currentTarget.getElementsByTagName('img')[0].className = this.x.result.favicon_hover;
		},
		outResult: function(event) {
			// console.log(event.currentTarget.style);
			// backing:
			event.currentTarget.style.backgroundColor = 'transparent';
			// title:
			// event.currentTarget.getElementsByClassName('titlelink')[0].style.color = this.x.title.color;
			// url:
			// event.currentTarget.getElementsByClassName('urllink')[0].style.color = this.x.url.color;
			// favicon:
			event.currentTarget.getElementsByTagName('img')[0].className = this.x.favicon.type;
		}
	}
});

var serp = new Vue({
	el: '#serp',
	data: {
		serps: [
			{
				title: '<b>Tycho</b>',
				snippet: 'RECORD LABELS. Worldwide minus Japan: Ghostly International / Jeff Owens - jeff@ghostly.com Japan: Hostess / Ben Munro - ben@hostess.co.jp Australia/NewZealand',
				url: '<b>tycho</b>music.com',
				favicon: 'https://icons.duckduckgo.com/ip2/tychomusic.com.ico'
			},
			{
				title: '<b>Tycho</b> Brahe - Wikipedia',
				snippet: '<b>Tycho</b> was born as heir to several of Denmark\'s most influential noble families and in addition to his immediate ancestry with the Brahe and the Bille',
				url: 'en.wikipedia.org/wiki/<b>Tycho</b>_Brahe',
				favicon: 'https://duckduckgo.com/assets/icons/favicons/wikipedia.2x.png'
			},
			{
				title: '<b>Tycho</b> — Free listening, videos, concerts, stats and photos at ...',
				snippet: 'Scott Hansen (born 1976/1977), professionally known as <b>Tycho</b>, is an American ambient music artist and producer, who is known as ISO50 for his photographic and design',
				url: 'last.fm/music/<b>Tycho</b>',
				favicon: 'https://icons.duckduckgo.com/ip2/www.last.fm.ico'
			},
			{
				title: '<b>Tycho</b> - Dive {Full Album} - YouTube',
				snippet: '<b>Tycho</b> - Dive {Full Album} itskerim. Subscribe Subscribed Unsubscribe 17,946 17K. ... <b>Tycho</b> - Past is Prologue {FULL ALBUM} - Duration: 1:03:29.',
				url: 'youtube.com/watch?v=Z6ih1aKeETk',
				favicon: 'https://duckduckgo.com/assets/icons/favicons/youtube.2x.png',
				date: '20121121'
			},
			{
				title: '<b>Tycho</b> - Awake [Full Album] - YouTube',
				snippet: '<b>Tycho\'s</b> Brand New Album "Awake" released March 18, 2014. Tracklist: 1. Awake 2. Montana 3. L 4. Dye 5',
				url: 'youtube.com/watch?v=qEI1_oGPQr0',
				favicon: 'https://duckduckgo.com/assets/icons/favicons/youtube.2x.png',
				date: '201403¢21'
			},
			{
				title: '<b>Tycho</b> — Ghostly International',
				snippet: 'As <b>Tycho</b>, Scott Hansen blends swirling melodies into vaguely triumphant arcs that crisscross between stuttering beats and vocal samples, creating rolling sonic',
				url: 'ghostly.com/artists/<b>tycho</b>',
				favicon: 'https://icons.duckduckgo.com/ip2/ghostly.com.ico'
			},
			{
				title: 'ISO50 Blog – The Blog of Scott Hansen (<b>Tycho</b> / ISO50) » The blog of ...',
				snippet: 'Now that the new <b>Tycho</b> album — Epoch — is out I wanted to write a little about the meaning and origin of the artwork. I worked as a graphic',
				url: 'blog.iso50.com/',
				favicon: 'https://icons.duckduckgo.com/ip2/blog.iso50.com.ico',
				date: '20161027'
			},
			{
				title: 'Chandra :: Photo Album :: <b>Tycho\'s</b> Supernova Remnant :: May 12...',
				snippet: 'For the first time, a movie has been made of the evolution of <b>Tycho\'s</b> supernova remnant. This sequence includes X-rays observations from Chandra spaced out over a',
				url: 'chandra.harvard.edu/photo/2016/<b>tycho</b>/',
				favicon: 'https://icons.duckduckgo.com/ip2/chandra.harvard.edu.ico',
				date: '20160512'
			}
		],
		// dark ui toggles:
		toggle: {
			title: true,
			snippet: true,
			url: true,
			favicon: true,
			result: true,
			misc: false
		},
		// default settings:
		x: {
			title: {
				color: '#333',
				size: '17px',
				weight: 'bold',		// bold | normal | unbold
				margin: '0.3em',
				visited: 'default',	// default | purple | gray
				underline: []		// [] | ['underline']
			},
			snippet: {
				color: '#666',
				size: '14px',
				weight: 'normal',	// normal | unbold
				lineheight: '1.5',
				margin: '0.1em'
			},
			url: {
				color: '#4495d4',
				size: '14px',
				weight: 'unbold',	// normal | unbold
				aftersnippet: true,
				visited: 'purple',	// default | purple | gray
				underline: []		// [] | ['underline']
			},
			favicon: {
				type: 'grayscale'	// hide | default | grayscale
			},
			result: {
				margin: '0.4em',
				width: '540px',
				separator: false,
				title_hover: 'inherit',
				url_hover: 'inherit',
				favicon_hover: 'default', // hide | default | grayscale
				backing: '#F7F7F7'
			}
		}
	},
	methods: {
		showhide: function(item) {
			this.toggle[item] = !this.toggle[item];
		}

	}
});