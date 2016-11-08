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
	props: ['serp'],
	template: '#serp-result',
	methods: {
		// a computed getter
		getLink: function () {
			// `this` points to the vm instance
			return 'http://' + this.serp.url;
		},
		gotoLink: function() {
			location.assign(this.getLink());
		},
		getDate: function() {
			var date = this.serp.date;
			if (date) {
				return moment(date, "YYYYMMDD").format("MMM DD, YYYY");
			}
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
				url: 'tychomusic.com',
				favicon: 'https://icons.duckduckgo.com/ip2/tychomusic.com.ico'
			},
			{
				title: '<b>Tycho</b> Brahe - Wikipedia',
				snippet: '<b>Tycho</b> was born as heir to several of Denmark\'s most influential noble families and in addition to his immediate ancestry with the Brahe and the Bille',
				url: 'en.wikipedia.org/wiki/Tycho_Brahe',
				favicon: 'https://duckduckgo.com/assets/icons/favicons/wikipedia.2x.png'
			},
			{
				title: '<b>Tycho</b> — Free listening, videos, concerts, stats and photos at ...',
				snippet: 'Scott Hansen (born 1976/1977), professionally known as <b>Tycho</b>, is an American ambient music artist and producer, who is known as ISO50 for his photographic and design',
				url: 'last.fm/music/Tycho',
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
				url: 'ghostly.com/artists/tycho',
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
				url: 'chandra.harvard.edu/photo/2016/tycho/',
				favicon: 'https://icons.duckduckgo.com/ip2/chandra.harvard.edu.ico',
				date: '20160512'
			}
		]
	}
});