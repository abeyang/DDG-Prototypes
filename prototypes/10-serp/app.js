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
			// backing:
			event.currentTarget.style.backgroundColor = this.x.result.backing
			// title:
			if (this.x.result.title_hover_enable) {
				event.currentTarget.getElementsByClassName('titlelink')[0].style.color = this.x.result.title_hover;	
				event.currentTarget.getElementsByClassName('titlelink')[1].style.color = this.x.result.title_hover;	
			}
			// url:
			if (this.x.result.url_hover_enable) {
				event.currentTarget.getElementsByClassName('urllink')[0].style.color = this.x.result.url_hover;
				event.currentTarget.getElementsByClassName('urllink')[1].style.color = this.x.result.url_hover;
			}
			// favicon: 
			event.currentTarget.getElementsByTagName('img')[0].className = this.x.result.favicon_hover;
			event.currentTarget.getElementsByTagName('img')[1].className = this.x.result.favicon_hover;
		},
		outResult: function(event) {
			// backing:
			event.currentTarget.style.backgroundColor = 'transparent';
			// title:
			if (this.x.result.title_hover_enable) {
				event.currentTarget.getElementsByClassName('titlelink')[0].style.color = this.x.title.color;
				event.currentTarget.getElementsByClassName('titlelink')[1].style.color = this.x.title.color;
			}
			// url:
			if (this.x.result.url_hover_enable) {
				event.currentTarget.getElementsByClassName('urllink')[0].style.color = this.x.url.color;
				event.currentTarget.getElementsByClassName('urllink')[1].style.color = this.x.url.color;
			}
			// favicon:
			event.currentTarget.getElementsByTagName('img')[0].className = this.x.favicon.type;
			event.currentTarget.getElementsByTagName('img')[1].className = this.x.favicon.type;
		}
	}
});


// Blues:
// #1669aa  
// #0967aa  
// #084999  
// #0562a4  
// #03548b
// url: 
// #3375cc
// Purple:
// #5843bf
// Green:
// #26804b
// #107a47

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
				url: 'ghostly.com/artists/#/<b>tycho</b>',
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
			misc: false,
			export: false
		},
		// x = current settings
		x: {},
		presets: {
			'Abe - gray favicon': {
				title: {
					color: '#333',
					size: '17',
					weight: 'bold',		// bold | normal | unbold
					margin: '0.2',
					visited: 'default',	// default | purple | gray
					underline: ['underline'] // [] | ['underline']
				},
				snippet: {
					color: '#666',
					size: '14',
					weight: 'normal',	// normal | unbold
					lineheight: '1.5',
					margin: '0.2'
				},
				url: {
					color: '#1669aa',
					size: '14',
					weight: 'normal',	// normal | unbold
					aftersnippet: true,
					visited: 'purple',	// default | purple | gray
					underline: ['underline'], // [] | ['underline']
					margin: '0'
				},
				favicon: {
					type: 'grayscale'	// hide | default | grayscale
				},
				more: {
					type: 'floatright', // floatright | withurl | hide
					color: '#888',
				},
				result: {
					font: 'proxima',	// proxima | helvetica | arial
					margin: '0.8',
					width: '560',
					separator: false,
					title_hover_enable: false,
					title_hover: 'inherit',
					url_hover_enable: false,
					url_hover: 'inherit',
					favicon_hover: 'default', // hide | default | grayscale
					backing: '#F7F7F7'
				}
			},
			'Brian - gray visited urls': { "title": { "color": "#00308e", "size": 18, "weight": "unbold", "margin": "0", "visited": "purple", "underline": [ "underline" ] }, "snippet": { "color": "#666", "size": 13, "weight": "unbold", "lineheight": "1.4", "margin": "0.2" }, "url": { "color": "#006621", "size": "13", "weight": "unbold", "aftersnippet": true, "visited": "gray", "underline": [ "underline" ] }, "favicon": { "type": "default" }, "more": { "type": "hide", "color": "#fff" }, "result": { "font": "helvetica", "margin": "1.2", "width": "580", "separator": false, "title_hover": "inherit", "url_hover": "inherit", "favicon_hover": "hide", "backing": "#fff" } },
			'Brad - url below title': { "title": { "color": "#1a3591", "size": "17", "weight": "unbold", "margin": "0.3", "visited": "purple", "underline": [ "underline" ] }, "snippet": { "color": "#565656", "size": "14", "weight": "normal", "lineheight": "1.5", "margin": "0.1" }, "url": { "color": "#365e07", "size": "14", "weight": "normal", "aftersnippet": false, "visited": "default", "underline": [], "margin": "0" }, "favicon": { "type": "hide" }, "more": { "type": "hide", "color": "#888" }, "result": { "font": "arial", "margin": "0.4", "width": "560", "separator": false, "title_hover_enable": false, "title_hover": "inherit", "url_hover_enable": false, "url_hover": "inherit", "favicon_hover": "hide", "backing": "#FFF" } },
			'Olivia - dark, big title': { "title": { "color": "#333", "size": "19", "weight": "bold", "margin": "0.2", "visited": "purple", "underline": [ "underline" ] }, "snippet": { "color": "#666", "size": "13", "weight": "normal", "lineheight": "1.4", "margin": "0.4" }, "url": { "color": "#1669aa", "size": "14", "weight": "normal", "aftersnippet": true, "visited": "purple", "underline": [ "underline" ] }, "favicon": { "type": "default" }, "more": { "type": 'floatright', "color": '#888'	}, "result": { "font": "proxima", "margin": "1", "width": "560", "separator": false, "title_hover": "inherit", "url_hover": "inherit", "favicon_hover": "default", "backing": "#F2F2F2F2" } },
			'Blue titles / gray favicon': { "title": { "color": "#0967aa", "size": "17", "weight": "bold", "margin": "0.3", "visited": "purple", "underline": [ "underline" ] }, "snippet": { "color": "#666", "size": "14", "weight": "normal", "lineheight": "1.5", "margin": "0.1" }, "url": { "color": "#777", "size": "14", "weight": "unbold", "aftersnippet": true, "visited": "default", "underline": [] }, "favicon": { "type": "grayscale" }, "more": { "type": 'floatright', "color": '#888' }, "result": { "font": "proxima", "margin": "0.4", "width": "540", "separator": false, "title_hover": "inherit", "url_hover": "inherit", "favicon_hover": "default", "backing": "#F7F7F7" } },
			'Green + Purple links': { "title": { "color": "#333", "size": "17", "weight": "bold", "margin": "0.3", "visited": "default", "underline": [] }, "snippet": { "color": "#666", "size": "14", "weight": "normal", "lineheight": "1.5", "margin": "0.1" }, "url": { "color": "#26804b", "size": "14", "weight": "normal", "aftersnippet": true, "visited": "purple", "underline": [] }, "favicon": { "type": "default" }, "more": { "type": 'floatright', "color": '#888' }, "result": { "font": "proxima", "margin": "0.4", "width": "560", "separator": false, "title_hover": "inherit", "url_hover": "inherit", "favicon_hover": "default", "backing": "#F7F7F7" } },
			'Thom - no favicon': { "title": { "color": "#333", "size": "17", "weight": "normal", "margin": "0.2", "visited": "default", "underline": [] }, "snippet": { "color": "#666", "size": "14", "weight": "normal", "lineheight": "1.5", "margin": "0.1" }, "url": { "color": "#4495d4", "size": "14", "weight": "unbold", "aftersnippet": true, "visited": "purple", "underline": [ "underline" ] }, "favicon": { "type": "hide" }, "more": { "type": "withurl", "color": "#888" }, "result": { "font": "proxima", "margin": "0.4", "width": "540", "separator": false, "title_hover": "inherit", "url_hover": "inherit", "favicon_hover": "hide", "backing": "#F7F7F7" } },
			'DDG 11/15/16': { "title": { "color": "#333", "size": "19", "weight": "normal", "margin": "0", "visited": "default", "underline": [ "underline" ] }, "snippet": { "color": "#666", "size": "13", "weight": "normal", "lineheight": "1.4", "margin": "0.2" }, "url": { "color": "#888", "size": "13", "weight": "unbold", "aftersnippet": true, "visited": "gray", "underline": [ "underline" ] }, "favicon": { "type": "default" }, "more": { "type": 'floatright', "color": '#888' }, "result": { "font": "proxima", "margin": "0.4", "width": "620", "separator": false, "title_hover": "inherit", "url_hover": "inherit", "favicon_hover": "default", "backing": "#F7F7F7" } }
		}
	},
	methods: {
		showhide: function(item) {
			this.toggle[item] = !this.toggle[item];
		},
		setPreset: function(key) {
			this.x = this.presets[key];
		},
		changePreset: function(event) {
			// the 'key' is actually event's value (confusing, I know)
			var key = event.target.value
			this.setPreset(key);
		}

	},
	created: function() {
		// set x as this preset:
		this.setPreset('Abe - gray favicon');
	}
});
