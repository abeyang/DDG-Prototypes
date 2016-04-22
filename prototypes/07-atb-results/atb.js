app.controller('atbController', function($scope, fn) {
	$scope.fn = fn;

	$scope.magicratio = 0.72;
	$scope.h = 300;				// set height for graphs

	$scope.info = {
		// version '0' == intent of browser testing
		chrome: [
			{version: 0, desc: "Reduce or eliminate drop-outs from the setup process; to have them install DDG as their default browser!"},
			{version: 1, desc: "Baseline metric: has 'click here' button in modal"},
			{version: 2, desc: "Removed the 'click here' on Chrome (but screenshot — pointing out the hamburger menu — was deleted by accident)"},
			{version: 3, desc: "Copy/paste the chrome:// settings url"},
			{version: 4, desc: "Replaced Chrome logo with DDG logo on ATB button; added screenshots back to instructions"},
			{version: 5, desc: "Added ATB button to SERP for users searching without t-param"},
			{version: 6, desc: "Same as v5"},
			{version: 7, desc: "Removed ATB button from SERP; added ATB in 'Basic' theme"},
			{version: 8, desc: "Removed ATB from 'Basic' theme; added big screenshots to modal"}
		],
		firefox: [
			{version: 0, desc: "Improve the CTA; get people to click the button"},
			{version: 1, desc: "Baseline metric (versions 1-4)"},
			{version: 2, desc: "Baseline metric (versions 1-4)"},
			{version: 3, desc: "Baseline metric (versions 1-4)"},
			{version: 4, desc: "Baseline metric (versions 1-4)"},
			{version: 5, desc: "Removed links/carousel from homepage"},
			{version: 6, desc: "Same as v5"},
			{version: 7, desc: "Added links/carousel back to homepage; added blue button in ATB and moved near hamburger menu"},
			{version: 8, desc: "Reverted ATB back to normal (got a lot of hate)"}
		],
		safari: [
			{version: 0, desc: "Improve the CTA; get people to click the button"},
			{version: 1, desc: "Baseline metric (versions 1-4)"},
			{version: 2, desc: "Baseline metric (versions 1-4)"},
			{version: 3, desc: "Baseline metric (versions 1-4)"},
			{version: 4, desc: "Baseline metric (versions 1-4)"},
			{version: 5, desc: "Using DDG logo instead of Safari's"},
			{version: 6, desc: "swapped back to Safari logo"},
			{version: 7, desc: "Same as v6"},
			{version: 8, desc: "Added blue button to ATB"}
		]
	};

	$scope.toggles = {
		v1: false,
		v2: false,
		v3: false,
		v4: true,
		v5: true,
		v6: true,
		v7: true,
		v8: true,

		xclick: false,
		serp: false,
		graph: true,
		graphtype: 'impressions'	// impressions vs modal
	};

	$scope.stats = {
		avg: {
			firststep: {},
			clickratio: {},
			searches: {}
		}
	};

	$scope.updateColspan = function() {
		$scope.colspan = 1;
		if ($scope.toggles.xclick) $scope.colspan += 2;
		if ($scope.toggles.graphtype=='impressions') $scope.colspan += 2;
	};
	$scope.updateColspan();

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
		// v2
		{version: 2, date: '160301', partial: true, clickbutton_home: 784, clickbutton_side: 37, clickhere: 0, blur: 404, searches_cohort: 1117, searches_total: 2190151},
		{version: 2, date: '160302', clickbutton_home: 3109, clickbutton_side: 111, clickhere: 0, blur: 1539, searches_cohort: 9072, searches_total: 2237941},
		{version: 2, date: '160303', clickbutton_home: 3070, clickbutton_side: 143, clickhere: 0, blur: 1553, searches_cohort: 15020, searches_total: 2153460},
		{version: 2, date: '160304', clickbutton_home: 2868, clickbutton_side: 101, clickhere: 0, blur: 1446, searches_cohort: 18020, searches_total: 2016418},
		{version: 2, date: '160305', clickbutton_home: 2807, clickbutton_side: 100, clickhere: 0, blur: 1461, searches_cohort: 18019, searches_total: 1710715},
		{version: 2, date: '160306', clickbutton_home: 3137, clickbutton_side: 111, clickhere: 0, blur: 1637, searches_cohort: 24719, searches_total: 1820450},
		{version: 2, date: '160307', clickbutton_home: 3246, clickbutton_side: 126, clickhere: 0, blur: 1576, searches_cohort: 32937, searches_total: 2220956},
		{version: 2, date: '160308', clickbutton_home: 3376, clickbutton_side: 168, clickhere: 0, blur: 1729, searches_cohort: 35062, searches_total: 2181247},
		{version: 2, date: '160309', partial: true, clickbutton_home: 2697, clickbutton_side: 120, clickhere: 0, blur: 1354, searches_cohort: 40735, searches_total: 2174589},
		// v3
		{version: 3, date: '160309', partial: true, clickbutton_home: 588, clickbutton_side: 24, clickhere: 461, blur: 353, searches_cohort: 815, searches_total: 2174589},
		{version: 3, date: '160310', clickbutton_home: 3385, clickbutton_side: 158, clickhere: 2076, blur: 1797, searches_cohort: 9964, searches_total: 2142686},
		{version: 3, date: '160311', clickbutton_home: 2952, clickbutton_side: 131, clickhere: 1672, blur: 1568, searches_cohort: 12422, searches_total: 2153460},
		{version: 3, date: '160312', clickbutton_home: 2919, clickbutton_side: 128, clickhere: 1511, blur: 1584, searches_cohort: 8034, searches_total: 1663353},
		{version: 3, date: '160313', clickbutton_home: 3048, clickbutton_side: 134, clickhere: 1615, blur: 1698, searches_cohort: 8565, searches_total: 1739116},
		{version: 3, date: '160314', clickbutton_home: 3162, clickbutton_side: 140, clickhere: 1994, blur: 1700, searches_cohort: 11616, searches_total: 2198432},
		{version: 3, date: '160315', clickbutton_home: 3325, clickbutton_side: 136, clickhere: 2136, blur: 1798, searches_cohort: 14050, searches_total: 2163321},
		{version: 3, date: '160316', partial: true, clickbutton_home: 2907, clickbutton_side: 111, clickhere: 1977, blur: 1558, searches_cohort: 22394, searches_total: 2174589},
		// v4
		{version: 4, date: '160316', partial: true, impressions_home: 107526, impressions_side: 1405, clickbutton_home: 899, clickbutton_side: 26, x_home: 700, x_side: 36, clickhere: 461, blur: 353, searches_cohort: 815, searches_total: 2174589},
		{version: 4, date: '160317', impressions_home: 356449, impressions_side: 4497, clickbutton_home: 2902, clickbutton_side: 136, x_home: 2562, x_side: 117, clickhere: 0, blur: 1540, searches_cohort: 8344, searches_total: 2067126},
		{version: 4, date: '160318', impressions_home: 346531, impressions_side: 4179, clickbutton_home: 2565, clickbutton_side: 112, x_home: 2397, x_side: 124, clickhere: 0, blur: 1337, searches_cohort: 13246, searches_total: 1960891},
		{version: 4, date: '160319', impressions_home: 293645, impressions_side: 4104, clickbutton_home: 2601, clickbutton_side: 116, x_home: 1969, x_side: 113, clickhere: 0, blur: 1407, searches_cohort: 14802, searches_total: 1649008},
		{version: 4, date: '160320', impressions_home: 304992, impressions_side: 4271, clickbutton_home: 2607, clickbutton_side: 106, x_home: 1940, x_side: 107, clickhere: 0, blur: 1382, searches_cohort: 20210, searches_total: 1778827},
		{version: 4, date: '160321', impressions_home: 371491, impressions_side: 4358, clickbutton_home: 2741, clickbutton_side: 94, x_home: 2467, x_side: 116, clickhere: 0, blur: 1424, searches_cohort: 27230, searches_total: 2171017},
		{version: 4, date: '160322', impressions_home: 362222, impressions_side: 4388, clickbutton_home: 2640, clickbutton_side: 98, x_home: 2364, x_side: 107, clickhere: 0, blur: 1357, searches_cohort: 30881, searches_total: 2115995},
		{version: 4, date: '160323', partial: true, impressions_home: 271786, impressions_side: 3281, clickbutton_home: 2044, clickbutton_side: 100, x_home: 1842, x_side: 90, clickhere: 0, blur: 1076, searches_cohort: 32444, searches_total: 2085366},
		// v5
		{version: 5, date: '160323', partial: true, impressions_home: 86123, impressions_side: 547, impressions_serp: 80031, clickbutton_home: 605, clickbutton_side: 18, clickbutton_serp: 314, x_home: 490, x_side: 10, x_serp: 638, clickhere: 0, blur: 406, searches_cohort: 908, searches_total: 2085366},
		{version: 5, date: '160324', impressions_home: 339952, impressions_side: 2077, impressions_serp: 322980, clickbutton_home: 2522, clickbutton_side: 76, clickbutton_serp: 1240, x_home: 2190, x_side: 52, x_serp: 2751, clickhere: 0, blur: 1672, searches_cohort: 7094, searches_total: 1987034},
		{version: 5, date: '160325', impressions_home: 311401, impressions_side: 2037, impressions_serp: 290346, clickbutton_home: 2553, clickbutton_side: 87, clickbutton_serp: 904, x_home: 2020, x_side: 65, x_serp: 2139, clickhere: 0, blur: 1637, searches_cohort: 12144, searches_total: 1819639},
		{version: 5, date: '160326', impressions_home: 272091, impressions_side: 1815, impressions_serp: 249982, clickbutton_home: 2248, clickbutton_side: 72, clickbutton_serp: 776, x_home: 1709, x_side: 49, x_serp: 1712, clickhere: 0, blur: 1456, searches_cohort: 14399, searches_total: 1557983},
		{version: 5, date: '160327', impressions_home: 271209, impressions_side: 1994, impressions_serp: 252045, clickbutton_home: 2386, clickbutton_side: 77, clickbutton_serp: 741, x_home: 1843, x_side: 46, x_serp: 1622, clickhere: 0, blur: 1473, searches_cohort: 18733, searches_total: 1589232},
		{version: 5, date: '160328', impressions_home: 344407, impressions_side: 2228, impressions_serp: 323858, clickbutton_home: 2987, clickbutton_side: 70, clickbutton_serp: 950, x_home: 2448, x_side: 61, x_serp: 2411, clickhere: 0, blur: 1806, searches_cohort: 25498, searches_total: 2020433},
		{version: 5, date: '160329', impressions_home: 353290, impressions_side: 2283, impressions_serp: 326398, clickbutton_home: 2826, clickbutton_side: 86, clickbutton_serp: 886, x_home: 2437, x_side: 39, x_serp: 2381, clickhere: 0, blur: 1707, searches_cohort: 29453, searches_total: 2138972},
		{version: 5, date: '160330', impressions_home: 262984, impressions_side: 1696, impressions_serp: 237086, clickbutton_home: 2070, clickbutton_side: 55, clickbutton_serp: 704, x_home: 1856, x_side: 55, x_serp: 1784, clickhere: 0, blur: 1255, searches_cohort: 32945, searches_total: 2133031},
		// v6
		{version: 6, date: '160330', partial: true, impressions_home: 99043, impressions_side: 668, impressions_serp: 88634, clickbutton_home: 735, clickbutton_side: 21, clickbutton_serp: 181, x_home: 580, x_side: 13, x_serp: 543, clickhere: 0, blur: 477, searches_cohort: 1453, searches_total: 2133031},
		{version: 6, date: '160331', impressions_home: 348974, impressions_side: 2312, impressions_serp: 325289, clickbutton_home: 2598, clickbutton_side: 67, clickbutton_serp: 808, x_home: 2308, x_side: 65, x_serp: 2160, clickhere: 1, blur: 1611, searches_cohort: 9124, searches_total: 2199102},
		{version: 6, date: '160401', impressions_home: 340670, impressions_side: 2310, impressions_serp: 312927, clickbutton_home: 2819, clickbutton_side: 81, clickbutton_serp: 840, x_home: 2540, x_side: 69, x_serp: 2122, clickhere: 0, blur: 1722, searches_cohort: 13354, searches_total: 1991588},
		{version: 6, date: '160402', impressions_home: 290687, impressions_side: 2189, impressions_serp: 270831, clickbutton_home: 2656, clickbutton_side: 81, clickbutton_serp: 710, x_home: 2057, x_side: 69, x_serp: 1578, clickhere: 0, blur: 1673, searches_cohort: 17784, searches_total: 1676843},
		{version: 6, date: '160403', impressions_home: 292862, impressions_side: 2078, impressions_serp: 273093, clickbutton_home: 2595, clickbutton_side: 80, clickbutton_serp: 688, x_home: 1966, x_side: 55, x_serp: 1527, clickhere: 0, blur: 1589, searches_cohort: 22971, searches_total: 1783310},
		{version: 6, date: '160404', impressions_home: 358356, impressions_side: 2256, impressions_serp: 339803, clickbutton_home: 2741, clickbutton_side: 56, clickbutton_serp: 804, x_home: 2498, x_side: 65, x_serp: 2106, clickhere: 0, blur: 1617, searches_cohort: 31376, searches_total: 2223028},
		{version: 6, date: '160405', impressions_home: 355468, impressions_side: 2181, impressions_serp: 337672, clickbutton_home: 2524, clickbutton_side: 60, clickbutton_serp: 761, x_home: 2309, x_side: 45, x_serp: 2169, clickhere: 0, blur: 1533, searches_cohort: 34601, searches_total: 2198234},
		{version: 6, date: '160406', impressions_home: 250769, impressions_side: 1522, impressions_serp: 231331, clickbutton_home: 2352, clickbutton_side: 64, clickbutton_serp: 560, x_home: 2095, x_side: 49, x_serp: 1587, clickhere: 0, blur: 1310, searches_cohort: 26922, searches_total: 2220016},
		// v7
		{version: 7, date: '160406', partial: true, impressions_home: 105209, impressions_side: 1407, clickbutton_home: 897, clickbutton_side: 35, x_home: 717, x_side: 38, clickhere_home: 0, clickhere_side: 0, blur_home: 443, blur_side: 15, searches_cohort: 1298, searches_total: 2220016},
		{version: 7, date: '160407', impressions_home: 354415, impressions_side: 4561, clickbutton_home: 3113, clickbutton_side: 114, x_home: 2781, x_side: 134, clickhere_home: 0, clickhere_side: 0, blur_home: 1471, blur_side: 46, searches_cohort: 8069, searches_total: 2206775},
		{version: 7, date: '160408', impressions_home: 339476, impressions_side: 4235, clickbutton_home: 2853, clickbutton_side: 107, x_home: 2430, x_side: 120, clickhere_home: 0, clickhere_side: 0, blur_home: 1411, blur_side: 37, searches_cohort: 13251, searches_total: 2073089},
		{version: 7, date: '160409', impressions_home: 291492, impressions_side: 4002, clickbutton_home: 2598, clickbutton_side: 115, x_home: 2042, x_side: 96, clickhere_home: 0, clickhere_side: 0, blur_home: 1316, blur_side: 43, searches_cohort: 15207, searches_total: 1732747},
		{version: 7, date: '160410', impressions_home: 298522, impressions_side: 3920, clickbutton_home: 2566, clickbutton_side: 97, x_home: 2038, x_side: 84, clickhere_home: 0, clickhere_side: 0, blur_home: 1356, blur_side: 36, searches_cohort: 19750, searches_total: 1841753},
		{version: 7, date: '160411', impressions_home: 370977, impressions_side: 4156, clickbutton_home: 2707, clickbutton_side: 84, x_home: 2531, x_side: 115, clickhere_home: 0, clickhere_side: 0, blur_home: 1401, blur_side: 28, searches_cohort: 26504, searches_total: 2287823},
		{version: 7, date: '160412', impressions_home: 363215, impressions_side: 4416, clickbutton_home: 2757, clickbutton_side: 115, x_home: 2539, x_side: 125, clickhere_home: 2, clickhere_side: 0, blur_home: 1415, blur_side: 44, searches_cohort: 30610, searches_total: 2240965},
		{version: 7, date: '160413', impressions_home: 282913, impressions_side: 3157, clickbutton_home: 2138, clickbutton_side: 87, x_home: 2050, x_side: 81, clickhere_home: 1, clickhere_side: 0, blur_home: 1057, blur_side: 33, searches_cohort: 33055, searches_total: 2203201},
		// v8
		{version: 8, date: '160413', partial: true, impressions_home: 75491, impressions_side: 950, clickbutton_home: 588, clickbutton_side: 25, x_home: 494, x_side: 21, clickhere_home: 0, clickhere_side: 0, blur_home: 352, blur_side: 12, searches_cohort: 976, searches_total: 2203201},
		{version: 8, date: '160414', impressions_home: 354781, impressions_side: 4215, clickbutton_home: 2968, clickbutton_side: 100, x_home: 2735, x_side: 121, clickhere_home: 0, clickhere_side: 0, blur_home: 1658, blur_side: 42, searches_cohort: 8287, searches_total: 2157698},
		{version: 8, date: '160415', impressions_home: 345343, impressions_side: 4061, clickbutton_home: 2734, clickbutton_side: 102, x_home: 2586, x_side: 125, clickhere_home: 0, clickhere_side: 0, blur_home: 1567, blur_side: 39, searches_cohort: 12774, searches_total: 2063509},
		{version: 8, date: '160416', impressions_home: 290194, impressions_side: 3615, clickbutton_home: 2633, clickbutton_side: 77, x_home: 2126, x_side: 118, clickhere_home: 1, clickhere_side: 1, blur_home: 1515, blur_side: 25, searches_cohort: 14512, searches_total: 1686405},
		{version: 8, date: '160417', impressions_home: 298139, impressions_side: 3723, clickbutton_home: 2746, clickbutton_side: 100, x_home: 2297, x_side: 109, clickhere_home: 0, clickhere_side: 0, blur_home: 1587, blur_side: 28, searches_cohort: 19353, searches_total: 1810407},
		{version: 8, date: '160418', impressions_home: 371582, impressions_side: 4334, clickbutton_home: 3074, clickbutton_side: 130, x_home: 2973, x_side: 122, clickhere_home: 0, clickhere_side: 0, blur_home: 1683, blur_side: 56, searches_cohort: 26858, searches_total: 2274421},
		{version: 8, date: '160419', impressions_home: 352335, impressions_side: 3981, clickbutton_home: 2886, clickbutton_side: 102, x_home: 2734, x_side: 108, clickhere_home: 0, clickhere_side: 0, blur_home: 1624, blur_side: 34, searches_cohort: 29270, searches_total: 2230889},
		{version: 8, date: '160420', impressions_home: 248338, impressions_side: 2809, clickbutton_home: 2076, clickbutton_side: 76, x_home: 2096, x_side: 88, clickhere_home: 0, clickhere_side: 0, blur_home: 1195, blur_side: 32, searches_cohort: 33935, searches_total: 2183546}
	];

	$scope.firefox = [
		// v1
		{version: 1, date: '160227', clickbutton_home: 3716, clickbutton_side: 111, clickhere: -1, blur: 1827, searches_cohort: -1, searches_total: -1},
		{version: 1, date: '160228', clickbutton_home: 3831, clickbutton_side: 127, clickhere: -1, blur: 1843, searches_cohort: -1, searches_total: -1},
		{version: 1, date: '160229', clickbutton_home: 3955, clickbutton_side: 99, clickhere: -1, blur: 1866, searches_cohort: -1, searches_total: -1},
		{version: 1, date: '160301', partial: true, clickbutton_home: 3084, clickbutton_side: 79, clickhere: -1, blur: 1461, searches_cohort: -1, searches_total: -1},
		// v2
		{version: 2, date: '160302', clickbutton_home: 3776, clickbutton_side: 97, clickhere: 201, blur: 1758, searches_cohort: 203, searches_total: 5226375},
		{version: 2, date: '160303', clickbutton_home: 3603, clickbutton_side: 89, clickhere: 177, blur: 1632, searches_cohort: 222, searches_total: 5105836},
		{version: 2, date: '160304', clickbutton_home: 3702, clickbutton_side: 90, clickhere: 194, blur: 1663, searches_cohort: 282, searches_total: 4863156},
		{version: 2, date: '160305', clickbutton_home: 3540, clickbutton_side: 91, clickhere: 192, blur: 1676, searches_cohort: 123, searches_total: 4400280},
		{version: 2, date: '160306', clickbutton_home: 3979, clickbutton_side: 109, clickhere: 227, blur: 1809, searches_cohort: 260, searches_total: 4686476},
		{version: 2, date: '160307', clickbutton_home: 3768, clickbutton_side: 102, clickhere: 228, blur: 1707, searches_cohort: 341, searches_total: 5295542},
		{version: 2, date: '160308', clickbutton_home: 3781, clickbutton_side: 115, clickhere: 213, blur: 1769, searches_cohort: 375, searches_total: 5159572},
		{version: 2, date: '160309', partial: true, clickbutton_home: 3280, clickbutton_side: 112, clickhere: 162, blur: 1532, searches_cohort: 393, searches_total: 5141847},
		// v3
		{version: 3, date: '160309', partial: true, clickbutton_home: 598, clickbutton_side: 19, clickhere: 32, blur: 267, searches_cohort: 17, searches_total: 5141847},
		{version: 3, date: '160310', clickbutton_home: 3839, clickbutton_side: 124, clickhere: 201, blur: 1732, searches_cohort: 145, searches_total: 5096512},
		{version: 3, date: '160311', clickbutton_home: 3554, clickbutton_side: 109, clickhere: 196, blur: 1663, searches_cohort: 282, searches_total: 5105836},
		{version: 3, date: '160312', clickbutton_home: 3716, clickbutton_side: 106, clickhere: 194, blur: 1681, searches_cohort: 123, searches_total: 4254963},
		{version: 3, date: '160313', clickbutton_home: 3716, clickbutton_side: 97, clickhere: 192, blur: 1700, searches_cohort: 97, searches_total: 4472663},
		{version: 3, date: '160314', clickbutton_home: 3883, clickbutton_side: 110, clickhere: 223, blur: 1760, searches_cohort: 252, searches_total: 5248054},
		{version: 3, date: '160315', clickbutton_home: 3677, clickbutton_side: 137, clickhere: 193, blur: 1744, searches_cohort: 242, searches_total: 5167500},
		{version: 3, date: '160316', partial: true, clickbutton_home: 3128, clickbutton_side: 95, clickhere: 129, blur: 1399, searches_cohort: 290, searches_total: 5137801},
		// v4
		{version: 4, date: '160318', impressions_home: 1089357, impressions_side: 5168, clickbutton_home: 3498, clickbutton_side: 91, x_home: 5044, x_side: 124, clickhere: 167, blur: 1604, searches_cohort: 302, searches_total: 4661751},
		{version: 4, date: '160319', impressions_home: 982833, impressions_side: 5312, clickbutton_home: 3542, clickbutton_side: 111, x_home: 4750, x_side: 145, clickhere: 207, blur: 1680, searches_cohort: 355, searches_total: 4162760},
		{version: 4, date: '160320', impressions_home: 1030371, impressions_side: 5347, clickbutton_home: 3800, clickbutton_side: 120, x_home: 4869, x_side: 147, clickhere: 211, blur: 1756, searches_cohort: 321, searches_total: 4505724},
		{version: 4, date: '160321', impressions_home: 1176242, impressions_side: 5080, clickbutton_home: 3732, clickbutton_side: 112, x_home: 5341, x_side: 135, clickhere: 197, blur: 1777, searches_cohort: 443, searches_total: 5180685},
		{version: 4, date: '160322', impressions_home: 1136479, impressions_side: 5070, clickbutton_home: 3547, clickbutton_side: 107, x_home: 5087, x_side: 167, clickhere: 212, blur: 1676, searches_cohort: 422, searches_total: 4981605},
		{version: 4, date: '160323', partial: true, impressions_home: 868935, impressions_side: 3878, clickbutton_home: 2667, clickbutton_side: 107, x_home: 4028, x_side: 122, clickhere: 144, blur: 1251, searches_cohort: 352, searches_total: 4917571},
		// v5
		{version: 5, date: '160323', partial: true, impressions_home: 257044, impressions_side: 482, impressions_serp: 0, clickbutton_home: 823, clickbutton_side: 15, clickbutton_serp: 0, x_home: 1113, x_side: 20, x_serp: 1, clickhere: 54, blur: 386, searches_cohort: 16, searches_total: 4917571},
		{version: 5, date: '160324', impressions_home: 1104220, impressions_side: 1919, impressions_serp: 53, clickbutton_home: 3776, clickbutton_side: 61, clickbutton_serp: 0, x_home: 5437, x_side: 60, x_serp: 1, clickhere: 220, blur: 1780, searches_cohort: 214, searches_total: 4705493},
		{version: 5, date: '160325', impressions_home: 1053444, impressions_side: 1997, impressions_serp: 71, clickbutton_home: 3999, clickbutton_side: 75, clickbutton_serp: 0, x_home: 5330, x_side: 51, x_serp: 4, clickhere: 231, blur: 1793, searches_cohort: 303, searches_total: 4521448},
		{version: 5, date: '160326', impressions_home: 927662, impressions_side: 1915, impressions_serp: 137, clickbutton_home: 3567, clickbutton_side: 84, clickbutton_serp: 2, x_home: 4683, x_side: 69, x_serp: 1, clickhere: 190, blur: 1582, searches_cohort: 287, searches_total: 3888845},
		{version: 5, date: '160327', impressions_home: 924259, impressions_side: 1796, impressions_serp: 38, clickbutton_home: 3689, clickbutton_side: 68, clickbutton_serp: 0, x_home: 4683, x_side: 57, x_serp: 0, clickhere: 219, blur: 1675, searches_cohort: 259, searches_total: 3924367},
		{version: 5, date: '160328', impressions_home: 1109417, impressions_side: 2156, impressions_serp: 74, clickbutton_home: 4119, clickbutton_side: 66, clickbutton_serp: 0, x_home: 5424, x_side: 73, x_serp: 2, clickhere: 221, blur: 1878, searches_cohort: 308, searches_total: 4807871},
		{version: 5, date: '160329', impressions_home: 1158212, impressions_side: 2124, impressions_serp: 46, clickbutton_home: 4173, clickbutton_side: 75, clickbutton_serp: 0, x_home: 5746, x_side: 61, x_serp: 1, clickhere: 235, blur: 1904, searches_cohort: 503, searches_total: 5123550},
		{version: 5, date: '160330', impressions_home: 879720, impressions_side: 1566, impressions_serp: 59, clickbutton_home: 3207, clickbutton_side: 55, clickbutton_serp: 1, x_home: 4444, x_side: 38, x_serp: 0, clickhere: 182, blur: 1490, searches_cohort: 524, searches_total: 5079640},
		// v6
		{version: 6, date: '160330', partial: true, impressions_home: 283962, impressions_side: 544, impressions_serp: 7, clickbutton_home: 928, clickbutton_side: 26, clickbutton_serp: 0, x_home: 1266, x_side: 15, x_serp: 0, clickhere: 80, blur: 471, searches_cohort: 27, searches_total: 5079640},
		{version: 6, date: '160331', impressions_home: 1155740, impressions_side: 2062, impressions_serp: 105, clickbutton_home: 3930, clickbutton_side: 84, clickbutton_serp: 0, x_home: 5353, x_side: 85, x_serp: 0, clickhere: 223, blur: 1743, searches_cohort: 242, searches_total: 5009085},
		{version: 6, date: '160401', impressions_home: 1119655, impressions_side: 2026, impressions_serp: 64, clickbutton_home: 3882, clickbutton_side: 59, clickbutton_serp: 0, x_home: 5561, x_side: 51, x_serp: 0, clickhere: 225, blur: 1773, searches_cohort: 273, searches_total: 4761632},
		{version: 6, date: '160402', impressions_home: 983096, impressions_side: 1900, impressions_serp: 102, clickbutton_home: 3895, clickbutton_side: 77, clickbutton_serp: 2, x_home: 4900, x_side: 43, x_serp: 1, clickhere: 200, blur: 1838, searches_cohort: 189, searches_total: 4144709},
		{version: 6, date: '160403', impressions_home: 1013757, impressions_side: 1936, impressions_serp: 92, clickbutton_home: 3782, clickbutton_side: 73, clickbutton_serp: 0, x_home: 5041, x_side: 70, x_serp: 1, clickhere: 210, blur: 1754, searches_cohort: 233, searches_total: 4411764},
		{version: 6, date: '160404', impressions_home: 1179851, impressions_side: 1945, impressions_serp: 65, clickbutton_home: 3980, clickbutton_side: 62, clickbutton_serp: 0, x_home: 5557, x_side: 69, x_serp: 0, clickhere: 198, blur: 1799, searches_cohort: 474, searches_total: 5384922},
		{version: 6, date: '160405', impressions_home: 1174628, impressions_side: 1878, impressions_serp: 59, clickbutton_home: 3921, clickbutton_side: 72, clickbutton_serp: 1, x_home: 5426, x_side: 67, x_serp: 0, clickhere: 231, blur: 1796, searches_cohort: 554, searches_total: 5921940},
		{version: 6, date: '160406', impressions_home: 855134, impressions_side: 1327, impressions_serp: 57, clickbutton_home: 2808, clickbutton_side: 40, clickbutton_serp: 0, x_home: 4098, x_side: 41, x_serp: 0, clickhere: 165, blur: 1269, searches_cohort: 509, searches_total: 5912666},
		// v7
		{version: 7, date: '160406', partial: true, impressions_home: 305227, impressions_side: 1332, clickbutton_home: 5780, clickbutton_side: 38, x_home: 10454, x_side: 40, clickhere_home: 88, clickhere_side: 2, blur_home: 1268, blur_side: 11, searches_cohort: 25, searches_total: 5912666},
		{version: 7, date: '160407', impressions_home: 1096010, impressions_side: 4510, clickbutton_home: 17158, clickbutton_side: 130, x_home: 31861, x_side: 139, clickhere_home: 282, clickhere_side: 7, blur_home: 3718, blur_side: 54, searches_cohort: 256, searches_total: 5792850},
		{version: 7, date: '160408', impressions_home: 1048551, impressions_side: 4690, clickbutton_home: 9389, clickbutton_side: 130, x_home: 19091, x_side: 147, clickhere_home: 227, clickhere_side: 6, blur_home: 2338, blur_side: 44, searches_cohort: 306, searches_total: 5486859},
		{version: 7, date: '160409', impressions_home: 939316, impressions_side: 3296, clickbutton_home: 3296, clickbutton_side: 99, x_home: 4901, x_side: 132, clickhere_home: 180, clickhere_side: 8, blur_home: 1480, blur_side: 35, searches_cohort: 287, searches_total: 4913114},
		{version: 7, date: '160410', impressions_home: 970604, impressions_side: 4681, clickbutton_home: 3337, clickbutton_side: 107, x_home: 4730, x_side: 138, clickhere_home: 196, clickhere_side: 9, blur_home: 1582, blur_side: 33, searches_cohort: 224, searches_total: 5188157},
		{version: 7, date: '160411', impressions_home: 1146901, impressions_side: 4738, clickbutton_home: 3403, clickbutton_side: 108, x_home: 5236, x_side: 147, clickhere_home: 179, clickhere_side: 7, blur_home: 1568, blur_side: 35, searches_cohort: 411, searches_total: 5998729},
		{version: 7, date: '160412', impressions_home: 1119849, impressions_side: 4652, clickbutton_home: 3472, clickbutton_side: 83, x_home: 5407, x_side: 122, clickhere_home: 182, clickhere_side: 4, blur_home: 1624, blur_side: 31, searches_cohort: 451, searches_total: 5880935},
		{version: 7, date: '160413', impressions_home: 898197, impressions_side: 3716, clickbutton_home: 2940, clickbutton_side: 86, x_home: 4429, x_side: 114, clickhere_home: 165, clickhere_side: 8, blur_home: 1343, blur_side: 26, searches_cohort: 584, searches_total: 5814609},
		// v8
		{version: 8, date: '160413', partial: true, impressions_home: 209682, impressions_side: 1039, clickbutton_home: 588, clickbutton_side: 21, x_home: 877, x_side: 33, clickhere_home: 37, clickhere_side: 1, blur_home: 294, blur_side: 11, searches_cohort: 45, searches_total: 5814601},
		{version: 8, date: '160414', impressions_home: 1099689, impressions_side: 4638, clickbutton_home: 3484, clickbutton_side: 91, x_home: 5295, x_side: 122, clickhere_home: 180, clickhere_side: 5, blur_home: 1584, blur_side: 33, searches_cohort: 218, searches_total: 5737028},
		{version: 8, date: '160415', impressions_home: 1079722, impressions_side: 4527, clickbutton_home: 3107, clickbutton_side: 109, x_home: 4899, x_side: 142, clickhere_home: 165, clickhere_side: 4, blur_home: 1415, blur_side: 35, searches_cohort: 375, searches_total: 5546589},
		{version: 8, date: '160416', impressions_home: 949564, impressions_side: 4645, clickbutton_home: 3175, clickbutton_side: 99, x_home: 4521, x_side: 147, clickhere_home: 188, clickhere_side: 7, blur_home: 1497, blur_side: 36, searches_cohort: 186, searches_total: 4875331},
		{version: 8, date: '160417', impressions_home: 1001003, impressions_side: 4704, clickbutton_home: 3384, clickbutton_side: 100, x_home: 4728, x_side: 128, clickhere_home: 184, clickhere_side: 11, blur_home: 1596, blur_side: 29, searches_cohort: 344, searches_total: 5225072},
		{version: 8, date: '160418', impressions_home: 1146910, impressions_side: 4739, clickbutton_home: 3535, clickbutton_side: 100, x_home: 5305, x_side: 139, clickhere_home: 220, clickhere_side: 12, blur_home: 1697, blur_side: 34, searches_cohort: 463, searches_total: 6024911},
		{version: 8, date: '160419', impressions_home: 1220039, impressions_side: 4505, clickbutton_home: 3305, clickbutton_side: 104, x_home: 5191, x_side: 130, clickhere_home: 125, clickhere_side: 6, blur_home: 1485, blur_side: 41, searches_cohort: 668, searches_total: 5823981},
		{version: 8, date: '160420', impressions_home: 830813, impressions_side: 3209, clickbutton_home: 2468, clickbutton_side: 57, x_home: 3950, x_side: 95, clickhere_home: 0, clickhere_side: 0, blur_home: 1102, blur_side: 24, searches_cohort: 545, searches_total: 5671962}
	];

	$scope.safari = [
		// v1
		{version: 1, date: '160227', clickbutton_home: 751, clickbutton_side: 29, clickhere: -1, blur: 272, searches_cohort: -1, searches_total: -1},
		{version: 1, date: '160228', clickbutton_home: 796, clickbutton_side: 27, clickhere: -1, blur: 300, searches_cohort: -1, searches_total: -1},
		{version: 1, date: '160229', clickbutton_home: 666, clickbutton_side: 24, clickhere: -1, blur: 246, searches_cohort: -1, searches_total: -1},
		{version: 1, date: '160301', partial: true, clickbutton_home: 536, clickbutton_side: 22, clickhere: -1, blur: 214, searches_cohort: -1, searches_total: -1},
		// v2
		{version: 2, date: '160301', partial: true, clickbutton_home: 198, clickbutton_side: 9, clickhere: -1, blur: 71, searches_cohort: -1, searches_total: 1120451},
		{version: 2, date: '160302', clickbutton_home: 721, clickbutton_side: 32, clickhere: -1, blur: 256, searches_cohort: -1, searches_total: 1210516},
		{version: 2, date: '160303', clickbutton_home: 744, clickbutton_side: 17, clickhere: -1, blur: 293, searches_cohort: -1, searches_total: 1171151},
		{version: 2, date: '160304', clickbutton_home: 686, clickbutton_side: 15, clickhere: -1, blur: 275, searches_cohort: -1, searches_total: 1117219},
		{version: 2, date: '160305', clickbutton_home: 732, clickbutton_side: 21, clickhere: -1, blur: 245, searches_cohort: -1, searches_total: 1076640},
		{version: 2, date: '160306', clickbutton_home: 829, clickbutton_side: 29, clickhere: -1, blur: 326, searches_cohort: -1, searches_total: 1157972},
		{version: 2, date: '160307', clickbutton_home: 848, clickbutton_side: 30, clickhere: -1, blur: 321, searches_cohort: 138, searches_total: 1242487},
		{version: 2, date: '160308', clickbutton_home: 764, clickbutton_side: 24, clickhere: -1, blur: 291, searches_cohort: 154, searches_total: 1197611},
		{version: 2, date: '160309', partial: true, clickbutton_home: 558, clickbutton_side: 21, clickhere: -1, blur: 215, searches_cohort: 155, searches_total: 1190475},
		// v3
		{version: 3, date: '160309', partial: true, clickbutton_home: 142, clickbutton_side: 7, clickhere: 0, blur: 64, searches_cohort: 2, searches_total: 1190475},
		{version: 3, date: '160310', clickbutton_home: 692, clickbutton_side: 28, clickhere: 0, blur: 268, searches_cohort: 0, searches_total: 1167640},
		{version: 3, date: '160311', clickbutton_home: 636, clickbutton_side: 24, clickhere: 2, blur: 248, searches_cohort: 52, searches_total: 1171151},
		{version: 3, date: '160312', clickbutton_home: 683, clickbutton_side: 24, clickhere: 0, blur: 269, searches_cohort: 33, searches_total: 1033166},
		{version: 3, date: '160313', clickbutton_home: 745, clickbutton_side: 26, clickhere: 0, blur: 270, searches_cohort: 17, searches_total: 1100747},
		{version: 3, date: '160314', clickbutton_home: 725, clickbutton_side: 25, clickhere: 0, blur: 268, searches_cohort: 44, searches_total: 1214816},
		{version: 3, date: '160315', clickbutton_home: 714, clickbutton_side: 28, clickhere: 0, blur: 267, searches_cohort: 58, searches_total: 1214816},
		{version: 3, date: '160316', partial: true, clickbutton_home: 533, clickbutton_side: 18, clickhere: 0, blur: 202, searches_cohort: 98, searches_total: 1159974},
		// v4
		{version: 4, date: '160318', impressions_home: 231359, impressions_side: 997, clickbutton_home: 601, clickbutton_side: 24, x_home: 921, x_side: 21, clickhere: 0, blur: 217, searches_cohort: 110, searches_total: 1062380},
		{version: 4, date: '160319', impressions_home: 217766, impressions_side: 1065, clickbutton_home: 750, clickbutton_side: 21, x_home: 898, x_side: 17, clickhere: 0, blur: 291, searches_cohort: 130, searches_total: 1022863},
		{version: 4, date: '160320', impressions_home: 233248, impressions_side: 1122, clickbutton_home: 736, clickbutton_side: 34, x_home: 932, x_side: 25, clickhere: 0, blur: 261, searches_cohort: 150, searches_total: 1119579},
		{version: 4, date: '160321', impressions_home: 262247, impressions_side: 1072, clickbutton_home: 763, clickbutton_side: 26, x_home: 1095, x_side: 27, clickhere: 0, blur: 277, searches_cohort: 149, searches_total: 1206607},
		{version: 4, date: '160322', impressions_home: 249243, impressions_side: 1028, clickbutton_home: 646, clickbutton_side: 21, x_home: 900, x_side: 23, clickhere: 0, blur: 247, searches_cohort: 239, searches_total: 1147944},
		{version: 4, date: '160323', partial: true, impressions_home: 180537, impressions_side: 721, clickbutton_home: 523, clickbutton_side: 19, x_home: 775, x_side: 19, clickhere: 0, blur: 200, searches_cohort: 218, searches_total: 1135445},
		// v5
		{version: 5, date: '160323', partial: true, impressions_home: 66189, impressions_side: 147, impressions_serp: 0, clickbutton_home: 155, clickbutton_side: 4, clickbutton_serp: 0, x_home: 240, x_side: 6, x_serp: 0, clickhere: 0, blur: 63, searches_cohort: 4, searches_total: 1135445},
		{version: 5, date: '160324', impressions_home: 237586, impressions_side: 492, impressions_serp: 29, clickbutton_home: 543, clickbutton_side: 14, clickbutton_serp: 0, x_home: 818, x_side: 22, x_serp: 2, clickhere: 0, blur: 218, searches_cohort: 47, searches_total: 1081560},
		{version: 5, date: '160325', impressions_home: 229782, impressions_side: 535, impressions_serp: 18, clickbutton_home: 495, clickbutton_side: 12, clickbutton_serp: 0, x_home: 848, x_side: 5, x_serp: 0, clickhere: 0, blur: 221, searches_cohort: 144, searches_total: 1071316},
		{version: 5, date: '160326', impressions_home: 204429, impressions_side: 525, impressions_serp: 11, clickbutton_home: 436, clickbutton_side: 15, clickbutton_serp: 0, x_home: 757, x_side: 18, x_serp: 0, clickhere: 0, blur: 171, searches_cohort: 116, searches_total: 954729},
		{version: 5, date: '160327', impressions_home: 204367, impressions_side: 504, impressions_serp: 19, clickbutton_home: 505, clickbutton_side: 15, clickbutton_serp: 0, x_home: 745, x_side: 14, x_serp: 0, clickhere: 0, blur: 217, searches_cohort: 93, searches_total: 965758},
		{version: 5, date: '160328', impressions_home: 252061, impressions_side: 655, impressions_serp: 16, clickbutton_home: 638, clickbutton_side: 20, clickbutton_serp: 0, x_home: 934, x_side: 17, x_serp: 1, clickhere: 0, blur: 264, searches_cohort: 130, searches_total: 1173102},
		{version: 5, date: '160329', impressions_home: 255103, impressions_side: 589, impressions_serp: 20, clickbutton_home: 577, clickbutton_side: 20, clickbutton_serp: 0, x_home: 903, x_side: 13, x_serp: 0, clickhere: 0, blur: 244, searches_cohort: 145, searches_total: 1176748},
		{version: 5, date: '160330', impressions_home: 178526, impressions_side: 422, impressions_serp: 13, clickbutton_home: 396, clickbutton_side: 17, clickbutton_serp: 0, x_home: 682, x_side: 16, x_serp: 0, clickhere: 0, blur: 182, searches_cohort: 136, searches_total: 1164260},
		// v6
		{version: 6, date: '160330', partial: true, impressions_home: 73298, impressions_side: 180, impressions_serp: 4, clickbutton_home: 225, clickbutton_side: 8, clickbutton_serp: 0, x_home: 324, x_side: 5, x_serp: 0, clickhere: 0, blur: 67, searches_cohort: 4, searches_total: 1164260},
		{version: 6, date: '160331', impressions_home: 248737, impressions_side: 541, impressions_serp: 30, clickbutton_home: 729, clickbutton_side: 20, clickbutton_serp: 0, x_home: 1034, x_side: 14, x_serp: 0, clickhere: 0, blur: 233, searches_cohort: 52, searches_total: 1141091},
		{version: 6, date: '160401', impressions_home: 234769, impressions_side: 541, impressions_serp: 26, clickbutton_home: 651, clickbutton_side: 19, clickbutton_serp: 0, x_home: 926, x_side: 9, x_serp: 0, clickhere: 0, blur: 259, searches_cohort: 75, searches_total: 1078786},
		{version: 6, date: '160402', impressions_home: 216047, impressions_side: 490, impressions_serp: 16, clickbutton_home: 757, clickbutton_side: 27, clickbutton_serp: 0, x_home: 938, x_side: 13, x_serp: 0, clickhere: 0, blur: 258, searches_cohort: 134, searches_total: 1013014},
		{version: 6, date: '160403', impressions_home: 231439, impressions_side: 581, impressions_serp: 12, clickbutton_home: 744, clickbutton_side: 14, clickbutton_serp: 1, x_home: 992, x_side: 14, x_serp: 0, clickhere: 0, blur: 306, searches_cohort: 92, searches_total: 1091098},
		{version: 6, date: '160404', impressions_home: 260703, impressions_side: 586, impressions_serp: 29, clickbutton_home: 709, clickbutton_side: 20, clickbutton_serp: 0, x_home: 1051, x_side: 10, x_serp: 1, clickhere: 0, blur: 281, searches_cohort: 87, searches_total: 1227252},
		{version: 6, date: '160405', impressions_home: 252200, impressions_side: 515, impressions_serp: 52, clickbutton_home: 651, clickbutton_side: 21, clickbutton_serp: 0, x_home: 1023, x_side: 21, x_serp: 0, clickhere: 0, blur: 225, searches_cohort: 123, searches_total: 1203925},
		{version: 6, date: '160406', impressions_home: 170967, impressions_side: 344, impressions_serp: 12, clickbutton_home: 484, clickbutton_side: 12, clickbutton_serp: 0, x_home: 695, x_side: 11, x_serp: 0, clickhere: 0, blur: 169, searches_cohort: 171, searches_total: 1193502},
		// v7
		{version: 7, date: '160406', partial: true, impressions_home: 80535, impressions_side: 289, clickbutton_home: 208, clickbutton_side: 6, x_home: 304, x_side: 6, clickhere_home: 0, clickhere_side: 0, blur_home: 76, blur_side: 2, searches_cohort: 2, searches_total: 1193502},
		{version: 7, date: '160407', impressions_home: 246701, impressions_side: 929, clickbutton_home: 689, clickbutton_side: 25, x_home: 1050, x_side: 22, clickhere_home: 0, clickhere_side: 0, blur_home: 262, blur_side: 7, searches_cohort: 37, searches_total: 1161482},
		{version: 7, date: '160408', impressions_home: 234550, impressions_side: 969, clickbutton_home: 615, clickbutton_side: 22, x_home: 929, x_side: 18, clickhere_home: 0, clickhere_side: 0, blur_home: 220, blur_side: 6, searches_cohort: 64, searches_total: 1102820},
		{version: 7, date: '160409', impressions_home: 221330, impressions_side: 953, clickbutton_home: 647, clickbutton_side: 22, x_home: 957, x_side: 15, clickhere_home: 0, clickhere_side: 0, blur_home: 236, blur_side: 7, searches_cohort: 64, searches_total: 1058681},
		{version: 7, date: '160410', impressions_home: 231097, impressions_side: 956, clickbutton_home: 660, clickbutton_side: 25, x_home: 954, x_side: 25, clickhere_home: 0, clickhere_side: 0, blur_home: 248, blur_side: 4, searches_cohort: 93, searches_total: 1128468},
		{version: 7, date: '160411', impressions_home: 259165, impressions_side: 1046, clickbutton_home: 681, clickbutton_side: 28, x_home: 1023, x_side: 16, clickhere_home: 0, clickhere_side: 0, blur_home: 300, blur_side: 9, searches_cohort: 149, searches_total: 1235714},
		{version: 7, date: '160412', impressions_home: 251579, impressions_side: 991, clickbutton_home: 712, clickbutton_side: 15, x_home: 970, x_side: 18, clickhere_home: 0, clickhere_side: 0, blur_home: 246, blur_side: 1, searches_cohort: 132, searches_total: 1201194},
		{version: 7, date: '160413', impressions_home: 190048, impressions_side: 758, clickbutton_home: 506, clickbutton_side: 24, x_home: 773, x_side: 19, clickhere_home: 0, clickhere_side: 0, blur_home: 147, blur_side: 9, searches_cohort: 187, searches_total: 1179272},
		// v8
		{version: 8, date: '160413', partial: true, impressions_home: 56301, impressions_side: 185, clickbutton_home: 336, clickbutton_side: 1, x_home: 907, x_side: 7, clickhere_home: 0, clickhere_side: 0, blur_home: 83, blur_side: 0, searches_cohort: 6, searches_total: 1179272},
		{version: 8, date: '160414', impressions_home: 233690, impressions_side: 1003, clickbutton_home: 1117, clickbutton_side: 30, x_home: 2886, x_side: 35, clickhere_home: 0, clickhere_side: 0, blur_home: 308, blur_side: 14, searches_cohort: 26, searches_total: 1149685},
		{version: 8, date: '160415', impressions_home: 221694, impressions_side: 881, clickbutton_home: 922, clickbutton_side: 12, x_home: 2352, x_side: 29, clickhere_home: 0, clickhere_side: 0, blur_home: 291, blur_side: 2, searches_cohort: 44, searches_total: 1097476},
		{version: 8, date: '160416', impressions_home: 202343, impressions_side: 913, clickbutton_home: 844, clickbutton_side: 27, x_home: 2014, x_side: 30, clickhere_home: 0, clickhere_side: 0, blur_home: 260, blur_side: 9, searches_cohort: 79, searches_total: 1017026},
		{version: 8, date: '160417', impressions_home: 213861, impressions_side: 944, clickbutton_home: 833, clickbutton_side: 17, x_home: 2000, x_side: 34, clickhere_home: 0, clickhere_side: 0, blur_home: 255, blur_side: 4, searches_cohort: 64, searches_total: 1109575},
		{version: 8, date: '160418', impressions_home: 240215, impressions_side: 970, clickbutton_home: 883, clickbutton_side: 24, x_home: 2116, x_side: 40, clickhere_home: 0, clickhere_side: 0, blur_home: 269, blur_side: 6, searches_cohort: 67, searches_total: 1222618},
		{version: 8, date: '160419', impressions_home: 230090, impressions_side: 1050, clickbutton_home: 775, clickbutton_side: 26, x_home: 1978, x_side: 34, clickhere_home: 0, clickhere_side: 0, blur_home: 228, blur_side: 7, searches_cohort: 83, searches_total: 1179882},
		{version: 8, date: '160420', impressions_home: 159722, impressions_side: 702, clickbutton_home: 592, clickbutton_side: 16, x_home: 1367, x_side: 26, clickhere_home: 0, clickhere_side: 0, blur_home: 195, blur_side: 6, searches_cohort: 87, searches_total: 1145784}
	];

	// set average for specific cohort
	$scope.setAvg = function(type, version, num, den) {
		var avg = num/den;
		$scope.stats.avg[type][version] = avg;
		// console.log(type + ' ' + version + ': ' + num + '/' + den);
	};

	// init browser
	$scope.selectBrowser = function() {
		var browser = $scope.title;
		$scope.browser = $scope[browser];

		// graph: determine (A) the largest % first step complete modal, as well as (B) button click / impression ratio
		// (no magicratio needed here)
		var maxfirststep = 0;
		var maxclickratio = 0;
		// var maxblurratio = 0;
		var maxsearches = 0;
		var version = 0;
		var avg_n = {};
		var avg_d = 0;
		
		_.each($scope.browser, function(entry) {
			// Find the maximum value for "first step"
			var serp = (entry.clickbutton_serp) ? entry.clickbutton_serp : 0;
			var blur = (entry.blur) ? entry.blur : 0;
			var blur_home = (entry.blur_home) ? entry.blur_home : 0;
			var blur_side = (entry.blur_side) ? entry.blur_side : 0;
			var result = (blur + blur_home + blur_side)/(entry.clickbutton_home + entry.clickbutton_side + serp);
			if (result > maxfirststep) maxfirststep = result;

			// Find the maximum value for "click ratio"
			var ratio = 0;
			if (entry.impressions_home) ratio = (entry.clickbutton_home + entry.clickbutton_side) / (entry.impressions_home + entry.impressions_side);
			if (ratio > maxclickratio) maxclickratio = ratio;

			// Find the maximum value for "% of searches" thru cohort
			if (entry.searches_total && entry.searches_total > 0) {
				var search = entry.searches_cohort / entry.searches_total;
				if (search > maxsearches) maxsearches = search;	
				// console.log(entry.searches_cohort + '/' + entry.searches_total);
			}

			// Find averages for each version
			// TODO -- different versions
			if (entry.version != version) {
				// new version -- find avg of previous version
				if (version) {
					$scope.setAvg('firststep', version, avg_n['firststep'], avg_d);
					$scope.setAvg('clickratio', version, avg_n['clickratio'], avg_d);
					$scope.setAvg('searches', version, avg_n['searches'], avg_d);
				}
				// update counters
				version++;
				avg_n = {
					firststep: 0,
					clickratio: 0,
					searches: 0
				};
				avg_d = 0;
			}
			else {
				// keep adding to numerator and denominator
				avg_n['firststep'] += result;
				avg_n['clickratio'] += ratio;
				avg_n['searches'] += search;
				avg_d++;
			}
		});
		// Need to find the final average
		$scope.setAvg('firststep', version, avg_n['firststep'], avg_d);
		$scope.setAvg('clickratio', version, avg_n['clickratio'], avg_d);
		$scope.setAvg('searches', version, avg_n['searches'], avg_d);

		// "Max" stats
		$scope.stats.maxfirststep = maxfirststep;
		$scope.stats.maxclickratio = maxclickratio;
		$scope.stats.maxsearches = maxsearches;
	}

	$scope.title = 'safari';
	$scope.selectBrowser();

}); // atbController()

// helper functions
app.factory('fn', function() {
	return {
		prettyDate: function(date) {
			return date.substr(2, 2) + '/' + date.substr(4,2);
		},
		percent: function(num, den, pos) {
			if (num < 0) return '<span class="gray">n/a</span>';
			if (!den) return '';

			if (pos == null) pos = 2
			return (num/den * 100).toFixed(pos) + '%';
		},
		ratio: function(num, den) {
			if (den == null) return '';

			var r = (num/den).toFixed(2);
			var c = (r >= 1) ? 'good' : 'bad';
			return '<span class="' + c + '">' + r + '</span>';
		}
	};
});
