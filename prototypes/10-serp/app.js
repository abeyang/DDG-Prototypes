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
	template: '#serp-result'
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
				favicon: 'https://duckduckgo.com/assets/icons/favicons/youtube.2x.png'
			},
			{
				title: '<b>Tycho</b> — Ghostly International',
				snippet: 'As <b>Tycho</b>, Scott Hansen blends swirling melodies into vaguely triumphant arcs that crisscross between stuttering beats and vocal samples, creating rolling sonic',
				url: 'ghostly.com/artists/tycho',
				favicon: 'https://icons.duckduckgo.com/ip2/ghostly.com.ico'
			}
		]
	}
});