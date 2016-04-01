app.controller('atbController', function($scope, fn) {
	$scope.fn = fn;

	$scope.magicratio = 0.72;

	$scope.info = [
		{version: 1, browser: 'chrome', type: 'cta', desc: "Baseline: has 'click here' button in modal"},
		{version: 2, browser: 'chrome', type: 'cta', desc: "removed the 'click here' on Chrome (but screenshot — pointing out the hamburger menu — was deleted by accident)"},
		{version: 3, browser: 'chrome', type: 'cta', desc: "copy/paste the chrome:// settings url"},
		{version: 4, browser: 'chrome', type: 'cta', desc: "revert back; added screenshot back"},
		{version: 5, browser: 'chrome', type: 'cta', desc: "added ATB to SERP after users perform a search"}
	];

	// last updated: 3/27
	$scope.chrome = [
		// v1
		{version: 1, date: '160223', partial: true, clickbutton_home: 1488, clickbutton_side: 63, clickhere: 800, blur: -1, searches_cohort: 2757, searches_total: 1104186.5},
		{version: 1, date: '160224', clickbutton_home: 3130, clickbutton_side: 108, clickhere: 1625, blur: -1, searches_cohort: 11676, searches_total: 2181199},
		{version: 1, date: '160225', clickbutton_home: 3420, clickbutton_side: 112, clickhere: 1759, blur: -1, searches_cohort: 17992, searches_total: 2090013},
		{version: 1, date: '160226', clickbutton_home: 2913, clickbutton_side: 93, clickhere: 1498, blur: -1, searches_cohort: 21543, searches_total: 2002262},
		{version: 1, date: '160227', clickbutton_home: 2910, clickbutton_side: 101, clickhere: 1483, blur: 2083, searches_cohort: 22689, searches_total: 1684199},
		{version: 1, date: '160228', clickbutton_home: 2886, clickbutton_side: 112, clickhere: 1420, blur: 2023, searches_cohort: 27972, searches_total: 1811167},
		{version: 1, date: '160229', clickbutton_home: 2987, clickbutton_side: 102, clickhere: 1549, blur: 2092, searches_cohort: 34143, searches_total: 2237941},
		{version: 1, date: '160301', partial: true, clickbutton_home: 2279, clickbutton_side: 76, clickhere: 1196, blur: 1636, searches_cohort: 38598, searches_total: 2190151},
		// v5
		{version: 5, date: '160323', partial: true, impressions_home: 86123, impressions_side: 547, impressions_serp: 80031, clickbutton_home: 605, clickbutton_side: 18, clickbutton_serp: 314, x_home: 490, x_side: 10, x_serp: 638, clickhere: 0, blur: 406, searches_cohort: 908, searches_total: 2085366},
		{version: 5, date: '160324', impressions_home: 339952, impressions_side: 2077, impressions_serp: 322980, clickbutton_home: 2522, clickbutton_side: 76, clickbutton_serp: 1240, x_home: 2190, x_side: 52, x_serp: 2751, clickhere: 0, blur: 1672, searches_cohort: 7094, searches_total: 1987034},
		{version: 5, date: '160325', impressions_home: 311401, impressions_side: 2037, impressions_serp: 290346, clickbutton_home: 2553, clickbutton_side: 87, clickbutton_serp: 904, x_home: 2020, x_side: 65, x_serp: 2139, clickhere: 0, blur: 1637, searches_cohort: 12144, searches_total: 1819639},
		{version: 5, date: '160326', impressions_home: 272091, impressions_side: 1815, impressions_serp: 249982, clickbutton_home: 2248, clickbutton_side: 72, clickbutton_serp: 776, x_home: 1709, x_side: 49, x_serp: 1712, clickhere: 0, blur: 1456, searches_cohort: 14399, searches_total: 1557983},
		{version: 5, date: '160327', impressions_home: 271209, impressions_side: 1994, impressions_serp: 252045, clickbutton_home: 2386, clickbutton_side: 77, clickbutton_serp: 741, x_home: 1843, x_side: 46, x_serp: 1622, clickhere: 0, blur: 1473, searches_cohort: 18733, searches_total: 1589232}
	];

	$scope.firefox = [
		// v5
		{version: 5, date: '160323', partial: true, impressions_home: 257044, impressions_side: 482, impressions_serp: 0, clickbutton_home: 823, clickbutton_side: 15, clickbutton_serp: 0, x_home: 1113, x_side: 20, x_serp: 1, clickhere: 54, blur: 386, searches_cohort: 16, searches_total: 4917571},
		{version: 5, date: '160323', partial: true, impressions_home: 257044, impressions_side: 482, impressions_serp: 0, clickbutton_home: 823, clickbutton_side: 15, clickbutton_serp: 0, x_home: 1113, x_side: 20, x_serp: 1, clickhere: 54, blur: 386, searches_cohort: 16, searches_total: 4917571},
		{version: 5, date: '160325', impressions_home: 1053444, impressions_side: 1997, impressions_serp: 71, clickbutton_home: 3999, clickbutton_side: 75, clickbutton_serp: 0, x_home: 5330, x_side: 51, x_serp: 4, clickhere: 231, blur: 1793, searches_cohort: 303, searches_total: 4521448},
		{version: 5, date: '160326', impressions_home: 927662, impressions_side: 1915, impressions_serp: 137, clickbutton_home: 3567, clickbutton_side: 84, clickbutton_serp: 2, x_home: 4683, x_side: 69, x_serp: 1, clickhere: 190, blur: 1582, searches_cohort: 287, searches_total: 3888845},
		{version: 5, date: '160327', impressions_home: 924259, impressions_side: 1796, impressions_serp: 38, clickbutton_home: 3689, clickbutton_side: 68, clickbutton_serp: 0, x_home: 4683, x_side: 57, x_serp: 0, clickhere: 219, blur: 1675, searches_cohort: 259, searches_total: 3924367}
	];

	$scope.safari = [
		// v5
		{version: 5, date: '160323', partial: true, impressions_home: 66189, impressions_side: 147, impressions_serp: 0, clickbutton_home: 155, clickbutton_side: 4, clickbutton_serp: 0, x_home: 240, x_side: 6, x_serp: 0, clickhere: 0, blur: 63, searches_cohort: 4, searches_total: 1135445},
		{version: 5, date: '160324', impressions_home: 237586, impressions_side: 492, impressions_serp: 29, clickbutton_home: 543, clickbutton_side: 14, clickbutton_serp: 0, x_home: 818, x_side: 22, x_serp: 2, clickhere: 0, blur: 218, searches_cohort: 47, searches_total: 1081560},
		{version: 5, date: '160325', impressions_home: 229782, impressions_side: 535, impressions_serp: 18, clickbutton_home: 495, clickbutton_side: 12, clickbutton_serp: 0, x_home: 848, x_side: 5, x_serp: 0, clickhere: 0, blur: 221, searches_cohort: 144, searches_total: 1071316},
		{version: 5, date: '160326', impressions_home: 204429, impressions_side: 525, impressions_serp: 11, clickbutton_home: 436, clickbutton_side: 15, clickbutton_serp: 0, x_home: 757, x_side: 18, x_serp: 0, clickhere: 0, blur: 171, searches_cohort: 116, searches_total: 954729},
		{version: 5, date: '160327', impressions_home: 204367, impressions_side: 504, impressions_serp: 19, clickbutton_home: 505, clickbutton_side: 15, clickbutton_serp: 0, x_home: 745, x_side: 14, x_serp: 0, clickhere: 0, blur: 217, searches_cohort: 93, searches_total: 965758}
	];

}); // atbController()

// helper functions
app.factory('fn', function() {
	return {
		prettyDate: function(date) {
			return date.substr(2, 2) + '/' + date.substr(4,2);
		},
		percent: function(num, den, pos) {
			if (pos == null) pos = 2
			return (num/den * 100).toFixed(pos) + '%';
		},
		ratio: function(num, den) {
			var r = (num/den).toFixed(2);
			var c = (r >= 1) ? 'good' : 'bad';
			return '<span class="' + c + '">' + r + '</span>';
		}
	};
});
