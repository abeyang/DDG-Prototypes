app.controller('atbController', function($scope, fn) {
	$scope.fn = fn;

	// $scope.magicratio = 0.72;
	$scope.magicratio = 1;
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
			{version: 8, desc: "Removed ATB from 'Basic' theme; added big screenshots to modal"},
			{version: 9, desc: "Same as v8 (separate project: measure how much IAs contribute to retention)"},
			{version: 10, desc: "Same as v9, but fixed atb param from being dropped on requeries (NEW BASELINE)"},
			{version: 11, desc: "Added 'right-click to add search-engine' in modal (now 2 steps instead of 3)"},
			{version: 12, desc: "Same as v11"},
			{version: 13, desc: "Same as v12 (minor fix for versions of Chrome less than 48)"},
			{version: 14, desc: "Same as v13"},
			{version: 15, desc: "Added new page instructions (no more modal); has options to share"},
			{version: 16, desc: "Same as v15"}

		],
		firefox: [
			{version: 0, desc: "Improve the CTA; get people to click the button (CANNOT trust % searches through cohort)"},
			{version: 1, desc: "Baseline metric (versions 1-4)"},
			{version: 2, desc: "Baseline metric (versions 1-4)"},
			{version: 3, desc: "Baseline metric (versions 1-4)"},
			{version: 4, desc: "Baseline metric (versions 1-4)"},
			{version: 5, desc: "Removed links/carousel from homepage"},
			{version: 6, desc: "Same as v5"},
			{version: 7, desc: "Added links/carousel back to homepage; added blue button in ATB and moved near hamburger menu"},
			{version: 8, desc: "Reverted ATB back to normal (got a lot of hate)"},
			{version: 9, desc: "Updated modal to include screenshot in Step 2"},
			{version: 10, desc: "Same as v9, but fixed atb param from being dropped on requeries (NEW BASELINE)"},
			{version: 11, desc: "Same as v10"},
			{version: 12, desc: "Added big screenshots to modal"},
			{version: 13, desc: "Added new page instructions (no more modal)"},
			{version: 14, desc: "Same as v13"},
			{version: 15, desc: "Updated new page instructions with options to share"},
			{version: 16, desc: "Same as v15"}
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
			{version: 8, desc: "Added blue button to ATB"},
			{version: 9, desc: "Hide CTA when t-param is set"},
			{version: 10, desc: "Same as v9, but fixed atb param from being dropped on requeries (NEW BASELINE)"},
			{version: 11, desc: "Same as v10"},
			{version: 12, desc: "Same as v11"},
			{version: 13, desc: "Moved CTA to top-right; dismissing it shows msg for start.ddg.com"},
			{version: 14, desc: "Same as v13"},
			{version: 15, desc: "Same as v13"},
			{version: 16, desc: "Same as v13"}
		]
	};

	$scope.toggles = {
		v1: false,
		v2: false,
		v3: false,
		v4: false,
		v5: false,
		v6: false,
		v7: false,
		v8: false,
		v9: false,
		v10: true,
		v11: true,
		v12: true,
		v13: true,
		v14: true,
		v15: true,
		v16: true,

		xclick: false,
		serp: false,
		graph: false,
		newpage: true,
		graphtype: 'modal'	// impressions vs modal
	};

	$scope.stats = {
		avg: {
			firststep: {},
			clickratio: {},
			blurratio: {},
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
		{version: 8, date: '160420', impressions_home: 248338, impressions_side: 2809, clickbutton_home: 2076, clickbutton_side: 76, x_home: 2096, x_side: 88, clickhere_home: 0, clickhere_side: 0, blur_home: 1195, blur_side: 32, searches_cohort: 33935, searches_total: 2183546},
		// v9
		{version: 9, date: '160420', partial: true, impressions_home: 89899, impressions_side: 1109, clickbutton_home: 649, clickbutton_side: 21, x_home: 610, x_side: 37, clickhere_home: 0, clickhere_side: 0, blur_home: 395, blur_side: 10, searches_cohort: 976, searches_total: 2183546},
		{version: 9, date: '160421', impressions_home: 332620, impressions_side: 3805, clickbutton_home: 2536, clickbutton_side: 92, x_home: 2552, x_side: 102, clickhere_home: 0, clickhere_side: 0, blur_home: 1469, blur_side: 47, searches_cohort: 8285, searches_total: 2186177},
		{version: 9, date: '160422', impressions_home: 320179, impressions_side: 3659, clickbutton_home: 2562, clickbutton_side: 91, x_home: 2428, x_side: 108, clickhere_home: 0, clickhere_side: 0, blur_home: 1497, blur_side: 39, searches_cohort: 11449, searches_total: 2085170},
		{version: 9, date: '160423', impressions_home: 264690, impressions_side: 3332, clickbutton_home: 2443, clickbutton_side: 73, x_home: 2044, x_side: 115, clickhere_home: 0, clickhere_side: 0, blur_home: 1433, blur_side: 38, searches_cohort: 15148, searches_total: 1727222},
		{version: 9, date: '160424', impressions_home: 276352, impressions_side: 3647, clickbutton_home: 2481, clickbutton_side: 121, x_home: 2168, x_side: 122, clickhere_home: 0, clickhere_side: 0, blur_home: 1464, blur_side: 56, searches_cohort: 20082, searches_total: 1845807},
		{version: 9, date: '160425', impressions_home: 350016, impressions_side: 3985, clickbutton_home: 3134, clickbutton_side: 102, x_home: 2663, x_side: 109, clickhere_home: 0, clickhere_side: 0, blur_home: 1883, blur_side: 43, searches_cohort: 28089, searches_total: 2298192},
		{version: 9, date: '160426', impressions_home: 340935, impressions_side: 3885, clickbutton_home: 2679, clickbutton_side: 105, x_home: 2575, x_side: 116, clickhere_home: 0, clickhere_side: 0, blur_home: 1529, blur_side: 34, searches_cohort: 33343, searches_total: 2268848},
		{version: 9, date: '160427', impressions_home: 242987, impressions_side: 2731, clickbutton_home: 1911, clickbutton_side: 82, x_home: 1865, x_side: 94, clickhere_home: 0, clickhere_side: 0, blur_home: 1076, blur_side: 34, searches_cohort: 36961, searches_total: 2213965},
		// v10
		{version: 10, date: '160427', partial: true, impressions_home: 96436, impressions_side: 1085, clickbutton_home: 685, clickbutton_side: 22, x_home: 613, x_side: 31, clickhere_home: 0, clickhere_side: 0, blur_home: 411, blur_side: 10, searches_cohort: 1587, searches_total: 2213965},
		{version: 10, date: '160428', impressions_home: 336484, impressions_side: 3600, clickbutton_home: 2552, clickbutton_side: 102, x_home: 2437, x_side: 126, clickhere_home: 0, clickhere_side: 0, blur_home: 1480, blur_side: 34, searches_cohort: 11646, searches_total: 2189993},
		{version: 10, date: '160429', impressions_home: 320368, impressions_side: 3524, clickbutton_home: 2495, clickbutton_side: 88, x_home: 2347, x_side: 102, clickhere_home: 0, clickhere_side: 0, blur_home: 1446, blur_side: 31, searches_cohort: 19307, searches_total: 2048355},
		{version: 10, date: '160430', impressions_home: 264783, impressions_side: 3266, clickbutton_home: 2410, clickbutton_side: 94, x_home: 2018, x_side: 85, clickhere_home: 0, clickhere_side: 0, blur_home: 1453, blur_side: 45, searches_cohort: 20968, searches_total: 1681356},
		{version: 10, date: '160501', impressions_home: 275423, impressions_side: 3404, clickbutton_home: 2347, clickbutton_side: 95, x_home: 1988, x_side: 91, clickhere_home: 0, clickhere_side: 0, blur_home: 1354, blur_side: 42, searches_cohort: 26959, searches_total: 1786358},
		{version: 10, date: '160502', impressions_home: 345590, impressions_side: 3845, clickbutton_home: 2706, clickbutton_side: 83, x_home: 2630, x_side: 100, clickhere_home: 0, clickhere_side: 0, blur_home: 1566, blur_side: 35, searches_cohort: 37083, searches_total: 2231004},
		{version: 10, date: '160503', impressions_home: 345974, impressions_side: 3788, clickbutton_home: 2663, clickbutton_side: 79, x_home: 2768, x_side: 107, clickhere_home: 0, clickhere_side: 0, blur_home: 1518, blur_side: 30, searches_cohort: 44028, searches_total: 2248854},
		{version: 10, date: '160504', impressions_home: 229391, impressions_side: 2451, clickbutton_home: 1939, clickbutton_side: 68, x_home: 1913, x_side: 85, clickhere_home: 0, clickhere_side: 0, blur_home: 1095, blur_side: 28, searches_cohort: 45681, searches_total: 2204914},
		// v11
		{version: 11, date: '160504', partial: true, impressions_home: 112634, impressions_side: 1378, clickbutton_home: 931, clickbutton_side: 26, x_home: 975, x_side: 36, clickhere_home: 0, clickhere_side: 0, blur_home: 547, blur_side: 13, searches_cohort: 2103, searches_total: 2204914},
		{version: 11, date: '160505', impressions_home: 331658, impressions_side: 4055, clickbutton_home: 2977, clickbutton_side: 105, x_home: 3263, x_side: 115, clickhere_home: 0, clickhere_side: 0, blur_home: 1759, blur_side: 39, searches_cohort: 14943, searches_total: 2078324},
		{version: 11, date: '160506', impressions_home: 318300, impressions_side: 3528, clickbutton_home: 2547, clickbutton_side: 77, x_home: 2580, x_side: 105, clickhere_home: 0, clickhere_side: 0, blur_home: 1501, blur_side: 33, searches_cohort: 21535, searches_total: 1983104},
		{version: 11, date: '160507', impressions_home: 256277, impressions_side: 3100, clickbutton_home: 2264, clickbutton_side: 80, x_home: 2036, x_side: 98, clickhere_home: 0, clickhere_side: 0, blur_home: 1357, blur_side: 36, searches_cohort: 22797, searches_total: 1604936},
		{version: 11, date: '160508', impressions_home: 261081, impressions_side: 2991, clickbutton_home: 2174, clickbutton_side: 54, x_home: 2030, x_side: 105, clickhere_home: 0, clickhere_side: 0, blur_home: 1263, blur_side: 25, searches_cohort: 29179, searches_total: 1699368},
		{version: 11, date: '160509', impressions_home: 350655, impressions_side: 3794, clickbutton_home: 2727, clickbutton_side: 91, x_home: 2714, x_side: 105, clickhere_home: 0, clickhere_side: 0, blur_home: 1592, blur_side: 39, searches_cohort: 40383, searches_total: 2268863},
		{version: 11, date: '160510', impressions_home: 349406, impressions_side: 4012, clickbutton_home: 2904, clickbutton_side: 108, x_home: 2998, x_side: 122, clickhere_home: 0, clickhere_side: 0, blur_home: 1649, blur_side: 50, searches_cohort: 48264, searches_total: 2288954},
		{version: 11, date: '160511', impressions_home: 250812, impressions_side: 2881, clickbutton_home: 2081, clickbutton_side: 84, x_home: 2110, x_side: 84, clickhere_home: 0, clickhere_side: 0, blur_home: 1205, blur_side: 42, searches_cohort: 51469, searches_total: 2251636},
		// v12
		{version: 12, date: '160511', impressions_home: 94897, impressions_side: 1031, clickbutton_home: 725, clickbutton_side: 25, x_home: 696, x_side: 23, clickhere_home: 0, clickhere_side: 0, blur_home: 419, blur_side: 13, searches_cohort: 1682, searches_total: 2251636},
		{version: 12, date: '160512', impressions_home: 343783, impressions_side: 4252, clickbutton_home: 2686, clickbutton_side: 98, x_home: 2834, x_side: 289, clickhere_home: 0, clickhere_side: 0, blur_home: 1610, blur_side: 47, searches_cohort: 12664, searches_total: 2281012},
		{version: 12, date: '160513', impressions_home: 325501, impressions_side: 3598, clickbutton_home: 2597, clickbutton_side: 81, x_home: 2559, x_side: 91, clickhere_home: 0, clickhere_side: 0, blur_home: 1513, blur_side: 35, searches_cohort: 20468, searches_total: 2101971},
		{version: 12, date: '160514', impressions_home: 262892, impressions_side: 3124, clickbutton_home: 2284, clickbutton_side: 75, x_home: 1866, x_side: 70, clickhere_home: 0, clickhere_side: 0, blur_home: 1389, blur_side: 29, searches_cohort: 21253, searches_total: 1681206},
		{version: 12, date: '160515', impressions_home: 273368, impressions_side: 3247, clickbutton_home: 2442, clickbutton_side: 99, x_home: 2056, x_side: 102, clickhere_home: 0, clickhere_side: 0, blur_home: 1426, blur_side: 43, searches_cohort: 28295, searches_total: 1787182},
		{"clickhere_side":0,"searches_cohort":39289,"clickbutton_home":3188,"date":"160516","version":12,"blur_home":1833,"x_side":110,"searches_total":2279919,"clickbutton_side":106,"blur_side":43,"impressions_side":3946,"impressions_home":348300,"clickhere_home":0,"x_home":2794},
		{"clickhere_side":0,"searches_cohort":47322,"clickbutton_home":3670,"date":"160517","version":12,"blur_home":2182,"x_side":113,"searches_total":2322043,"clickbutton_side":132,"blur_side":66,"impressions_side":4093,"impressions_home":356931,"clickhere_home":0,"x_home":3191},
		{"clickhere_side":0,"searches_cohort":53427,"clickbutton_home":2656,"date":"160518","version":12,"blur_home":1449,"x_side":91,"searches_total":2294006,"clickbutton_side":123,"blur_side":57,"impressions_side":2854,"impressions_home":256059,"clickhere_home":0,"x_home":2273},
		// v13
		{"clickhere_side":9,"searches_cohort":2226,"clickbutton_home":1096,"date":"160518","version":13,"blur_home":738,"x_side":41,"searches_total":2294006,"clickbutton_side":30,"blur_side":19,"impressions_side":1236,"impressions_home":100136,"clickhere_home":274,"x_home":764},
		{"clickhere_side":41,"searches_cohort":16637,"clickbutton_home":3529,"date":"160519","version":13,"blur_home":2312,"x_side":128,"searches_total":2252558,"clickbutton_side":127,"blur_side":79,"impressions_side":3940,"impressions_home":345999,"clickhere_home":729,"x_home":2902},
		{"clickhere_side":24,"searches_cohort":24018,"clickbutton_home":2956,"date":"160520","version":13,"blur_home":1971,"x_side":108,"searches_total":2105556,"clickbutton_side":102,"blur_side":50,"impressions_side":3590,"impressions_home":328589,"clickhere_home":542,"x_home":2618},
		{"clickhere_side":25,"searches_cohort":24219,"clickbutton_home":2467,"date":"160521","version":13,"blur_home":1680,"x_side":111,"searches_total":1706392,"clickbutton_side":101,"blur_side":61,"impressions_side":3394,"impressions_home":265325,"clickhere_home":519,"x_home":2000},
		{"clickhere_side":34,"searches_cohort":32882,"clickbutton_home":3021,"date":"160522","version":13,"blur_home":2017,"x_side":113,"searches_total":1846709,"clickbutton_side":107,"blur_side":63,"impressions_side":3893,"impressions_home":282193,"clickhere_home":728,"x_home":2303},
		{"clickhere_side":20,"searches_cohort":45411,"date":"160523","blur_home":2269,"x_side":109,"clickbutton_side":110,"blur_side":62,"fire_on_page_load":1,"impressions_side":4249,"impressions_home":368965,"clickhere_home":789,"tab_regains_focus":1,"version":13,"clickbutton_home":3443,"tab_lost_focus":1,"searches_total":2383316,"scroll_200px":1,"x_home":3038},
		{"clickhere_side":22,"searches_cohort":51189,"date":"160524","blur_home":2014,"x_side":123,"clickbutton_side":115,"blur_side":62,"fire_on_page_load":0,"impressions_side":4248,"impressions_home":372609,"clickhere_home":582,"tab_regains_focus":0,"clickbutton_home":3288,"version":13,"tab_lost_focus":0,"searches_total":2333873,"scroll_200px":0,"x_home":3108},
		{"clickhere_side":13,"searches_cohort":52804,"date":"160525","blur_home":1253,"x_side":71,"clickbutton_side":62,"blur_side":31,"fire_on_page_load":0,"impressions_side":2512,"impressions_home":237374,"clickhere_home":390,"tab_regains_focus":0,"version":13,"clickbutton_home":1992,"tab_lost_focus":0,"searches_total":2268147,"scroll_200px":0,"x_home":2126},
		// v14
		{"clickhere_side":7,"searches_cohort":2869,"date":"160525","blur_home":680,"x_side":49,"clickbutton_side":32,"blur_side":19,"fire_on_page_load":2,"impressions_side":1552,"impressions_home":127945,"clickhere_home":151,"tab_regains_focus":1,"version":14,"clickbutton_home":1069,"tab_lost_focus":1,"searches_total":2268147,"scroll_200px":0,"x_home":946},
		{"clickhere_side":24,"searches_cohort":15611,"date":"160526","blur_home":1985,"x_side":145,"clickbutton_side":113,"blur_side":53,"fire_on_page_load":0,"impressions_side":4342,"impressions_home":356886,"clickhere_home":579,"tab_regains_focus":0,"clickbutton_home":3166,"version":14,"tab_lost_focus":0,"searches_total":2208395,"scroll_200px":0,"x_home":2897},
		{"clickhere_side":32,"searches_cohort":23364,"date":"160527","blur_home":2043,"x_side":121,"clickbutton_side":130,"blur_side":73,"fire_on_page_load":0,"impressions_side":4238,"impressions_home":342300,"clickhere_home":787,"tab_regains_focus":0,"clickbutton_home":3258,"version":14,"tab_lost_focus":0,"searches_total":2056985,"scroll_200px":0,"x_home":2979},
		{"clickhere_side":34,"searches_cohort":26335,"date":"160528","blur_home":1959,"x_side":92,"clickbutton_side":117,"blur_side":64,"fire_on_page_load":0,"impressions_side":3630,"impressions_home":281412,"clickhere_home":727,"tab_regains_focus":0,"clickbutton_home":3068,"version":14,"tab_lost_focus":0,"searches_total":1657348,"scroll_200px":0,"x_home":2418},
		{"clickhere_side":28,"searches_cohort":35265,"date":"160529","blur_home":1833,"x_side":100,"clickbutton_side":98,"blur_side":58,"fire_on_page_load":1,"impressions_side":3463,"impressions_home":291167,"clickhere_home":658,"tab_regains_focus":1,"clickbutton_home":2990,"version":14,"tab_lost_focus":1,"searches_total":1780377,"scroll_200px":1,"x_home":2470},
		{"clickhere_side":24,"searches_cohort":44677,"date":"160530","blur_home":2197,"x_side":112,"clickbutton_side":102,"blur_side":51,"fire_on_page_load":0,"impressions_side":4148,"impressions_home":342338,"clickhere_home":747,"tab_regains_focus":0,"clickbutton_home":3395,"version":14,"tab_lost_focus":0,"searches_total":2130449,"scroll_200px":0,"x_home":2963},
		{"clickhere_side":26,"searches_cohort":56110,"date":"160531","blur_home":2228,"x_side":128,"clickbutton_side":121,"blur_side":66,"fire_on_page_load":1,"impressions_side":4510,"impressions_home":373567,"clickhere_home":657,"tab_regains_focus":0,"clickbutton_home":3515,"version":14,"tab_lost_focus":0,"searches_total":2315643,"scroll_200px":0,"x_home":3062},
		{"clickhere_side":29,"searches_cohort":60019,"date":"160601","blur_home":1493,"x_side":83,"clickbutton_side":98,"blur_side":60,"fire_on_page_load":0,"impressions_side":2866,"impressions_home":260955,"clickhere_home":501,"tab_regains_focus":0,"clickbutton_home":2376,"version":14,"tab_lost_focus":0,"searches_total":2215876,"scroll_200px":0,"x_home":2297},
		// v15
		{"clickhere_side":0,"searches_cohort":1962,"date":"160601","blur_home":135,"tour_page_impression_facebook":1,"x_side":25,"clickbutton_side":31,"blur_side":0,"fire_on_page_load":701,"impressions_side":1148,"impressions_home":101680,"clickhere_home":26,"tour_page_impression_twitter":0,"share_button":6,"tab_regains_focus":399,"tour_page_impression_email":0,"facebook_share_button":3,"version":15,"clickbutton_home":832,"email_share_button":1,"tab_lost_focus":607,"twitter_share_button":2,"searches_total":2215876,"scroll_200px":450,"x_home":839},
		{"clickhere_side":4,"searches_cohort":16240,"date":"160602","blur_home":473,"tour_page_impression_facebook":1,"x_side":113,"clickbutton_side":111,"blur_side":12,"fire_on_page_load":2400,"impressions_side":3851,"impressions_home":344030,"clickhere_home":96,"tour_page_impression_twitter":0,"share_button":20,"tab_regains_focus":1435,"tour_page_impression_email":1,"facebook_share_button":9,"clickbutton_home":2896,"version":15,"email_share_button":9,"tab_lost_focus":2063,"twitter_share_button":2,"searches_total":2038972,"scroll_200px":1610,"x_home":2766},
		{"clickhere_side":1,"searches_cohort":25139,"date":"160603","blur_home":455,"tour_page_impression_facebook":0,"x_side":94,"clickbutton_side":92,"blur_side":4,"fire_on_page_load":2194,"impressions_side":3433,"impressions_home":328501,"clickhere_home":84,"tour_page_impression_twitter":0,"share_button":20,"tab_regains_focus":1307,"tour_page_impression_email":0,"facebook_share_button":10,"clickbutton_home":2617,"version":"15","email_share_button":7,"tab_lost_focus":1871,"twitter_share_button":3,"searches_total":1911565,"scroll_200px":1377,"x_home":2512},
		{"clickhere_side":1,"searches_cohort":25375,"date":"160604","blur_home":434,"tour_page_impression_facebook":0,"x_side":83,"clickbutton_side":73,"blur_side":12,"fire_on_page_load":1808,"impressions_side":3162,"impressions_home":276212,"clickhere_home":86,"tour_page_impression_twitter":0,"share_button":12,"tab_regains_focus":1054,"tour_page_impression_email":0,"facebook_share_button":5,"clickbutton_home":2247,"version":"15","email_share_button":7,"tab_lost_focus":1544,"twitter_share_button":0,"searches_total":1719307,"scroll_200px":1180,"x_home":2107},
		{"clickhere_side":2,"searches_cohort":33025,"date":"160605","blur_home":458,"tour_page_impression_facebook":1,"x_side":91,"clickbutton_side":82,"blur_side":10,"fire_on_page_load":2093,"impressions_side":3340,"impressions_home":288770,"clickhere_home":76,"tour_page_impression_twitter":0,"share_button":22,"tab_regains_focus":1231,"tour_page_impression_email":0,"facebook_share_button":11,"clickbutton_home":2507,"version":"15","email_share_button":6,"tab_lost_focus":1758,"twitter_share_button":5,"searches_total":1659265,"scroll_200px":1352,"x_home":2067},
		{"clickhere_side":1,"searches_cohort":50673,"date":"160606","blur_home":432,"tour_page_impression_facebook":2,"x_side":127,"clickbutton_side":90,"blur_side":10,"fire_on_page_load":2455,"impressions_side":3672,"impressions_home":350564,"clickhere_home":86,"tour_page_impression_twitter":0,"share_button":23,"tab_regains_focus":1422,"tour_page_impression_email":0,"facebook_share_button":8,"clickbutton_home":2813,"version":"15","email_share_button":8,"tab_lost_focus":2072,"twitter_share_button":7,"searches_total":2092922,"scroll_200px":1622,"x_home":2587},
		{"clickhere_side":3,"searches_cohort":57869,"date":"160607","blur_home":467,"tour_page_impression_facebook":1,"x_side":84,"clickbutton_side":91,"blur_side":9,"fire_on_page_load":2517,"impressions_side":3536,"impressions_home":338944,"clickhere_home":85,"tour_page_impression_twitter":0,"share_button":14,"tab_regains_focus":1476,"tour_page_impression_email":0,"facebook_share_button":4,"version":15,"clickbutton_home":2877,"email_share_button":7,"tab_lost_focus":2156,"twitter_share_button":3,"searches_total":2101364,"scroll_200px":1624,"x_home":2669},
		{"clickhere_side":6,"searches_cohort":65049,"date":"160608","blur_home":285,"tour_page_impression_facebook":2,"x_side":70,"clickbutton_side":59,"blur_side":7,"fire_on_page_load":1792,"impressions_side":2208,"impressions_home":212115,"clickhere_home":61,"tour_page_impression_twitter":0,"share_button":12,"tab_regains_focus":1108,"tour_page_impression_email":0,"facebook_share_button":5,"clickbutton_home":2069,"version":"15","email_share_button":6,"tab_lost_focus":1539,"twitter_share_button":1,"searches_total":2072246,"scroll_200px":1205,"x_home":1711},
		// v16
		{"clickhere_side":1,"searches_cohort":21167,"date":"160609","blur_home":467,"tour_page_impression_facebook":0,"x_side":103,"clickbutton_side":112,"blur_side":4,"fire_on_page_load":3180,"impressions_side":3646,"impressions_home":331215,"clickhere_home":105,"tour_page_impression_twitter":0,"share_button":28,"tab_regains_focus":1876,"tour_page_impression_email":0,"facebook_share_button":12,"version":16,"clickbutton_home":3511,"email_share_button":13,"tab_lost_focus":2671,"twitter_share_button":3,"searches_total":2021936,"scroll_200px":2110,"x_home":2675},
		{"clickhere_side":3,"searches_cohort":37773,"date":"160610","blur_home":451,"tour_page_impression_facebook":0,"x_side":108,"clickbutton_side":112,"blur_side":8,"fire_on_page_load":3454,"impressions_side":3745,"impressions_home":321325,"clickhere_home":81,"tour_page_impression_twitter":0,"share_button":30,"tab_regains_focus":2137,"tour_page_impression_email":0,"facebook_share_button":18,"clickbutton_home":3679,"version":"16","email_share_button":9,"tab_lost_focus":2910,"twitter_share_button":3,"searches_total":1918676,"scroll_200px":2229,"x_home":2586},
		{"clickhere_side":2,"searches_cohort":46574,"date":"160611","blur_home":493,"tour_page_impression_facebook":0,"x_side":95,"clickbutton_side":108,"blur_side":13,"fire_on_page_load":3378,"impressions_side":3508,"impressions_home":275236,"clickhere_home":64,"tour_page_impression_twitter":0,"share_button":35,"tab_regains_focus":2006,"tour_page_impression_email":0,"facebook_share_button":18,"clickbutton_home":3632,"version":"16","email_share_button":9,"tab_lost_focus":2803,"twitter_share_button":8,"searches_total":1599551,"scroll_200px":2250,"x_home":2262},
		{"clickhere_side":1,"searches_cohort":59637,"date":"160612","blur_home":450,"tour_page_impression_facebook":0,"x_side":77,"clickbutton_side":73,"blur_side":6,"fire_on_page_load":2656,"impressions_side":3398,"impressions_home":283409,"clickhere_home":57,"tour_page_impression_twitter":0,"share_button":28,"tab_regains_focus":1532,"tour_page_impression_email":0,"facebook_share_button":12,"clickbutton_home":2889,"version":"16","email_share_button":6,"tab_lost_focus":2162,"twitter_share_button":10,"searches_total":1706939,"scroll_200px":1671,"x_home":2261}
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
		{version: 8, date: '160420', impressions_home: 830813, impressions_side: 3209, clickbutton_home: 2468, clickbutton_side: 57, x_home: 3950, x_side: 95, clickhere_home: 0, clickhere_side: 0, blur_home: 1102, blur_side: 24, searches_cohort: 545, searches_total: 5671962},
		// v9
		{version: 9, date: '160420', partial: true, impressions_home: 262389, impressions_side: 1322, clickbutton_home: 786, clickbutton_side: 15, x_home: 1175, x_side: 40, clickhere_home: 0, clickhere_side: 0, blur_home: 374, blur_side: 2, searches_cohort: 71, searches_total: 5671970},
		{version: 9, date: '160421', impressions_home: 1075096, impressions_side: 4489, clickbutton_home: 3249, clickbutton_side: 81, x_home: 5057, x_side: 125, clickhere_home: 0, clickhere_side: 0, blur_home: 1473, blur_side: 21, searches_cohort: 233, searches_total: 5594290},
		{version: 9, date: '160422', impressions_home: 1049494, impressions_side: 4679, clickbutton_home: 3327, clickbutton_side: 92, x_home: 5132, x_side: 110, clickhere_home: 0, clickhere_side: 0, blur_home: 1581, blur_side: 25, searches_cohort: 320, searches_total: 5399662},
		{version: 9, date: '160423', impressions_home: 991673, impressions_side: 4620, clickbutton_home: 3455, clickbutton_side: 109, x_home: 4790, x_side: 124, clickhere_home: 0, clickhere_side: 0, blur_home: 1638, blur_side: 39, searches_cohort: 251, searches_total: 4882278},
		{version: 9, date: '160424', impressions_home: 1007901, impressions_side: 4792, clickbutton_home: 3684, clickbutton_side: 91, x_home: 4820, x_side: 131, clickhere_home: 0, clickhere_side: 0, blur_home: 1726, blur_side: 36, searches_cohort: 289, searches_total: 5294841},
		{version: 9, date: '160425', impressions_home: 1166174, impressions_side: 4660, clickbutton_home: 3575, clickbutton_side: 103, x_home: 5465, x_side: 136, clickhere_home: 0, clickhere_side: 0, blur_home: 1707, blur_side: 25, searches_cohort: 726, searches_total: 6109353},
		{version: 9, date: '160426', impressions_home: 1141624, impressions_side: 4802, clickbutton_home: 3546, clickbutton_side: 101, x_home: 5351, x_side: 137, clickhere_home: 0, clickhere_side: 0, blur_home: 1629, blur_side: 30, searches_cohort: 681, searches_total: 6025993},
		{version: 9, date: '160427', impressions_home: 831173, impressions_side: 3312, clickbutton_home: 2648, clickbutton_side: 69, x_home: 4056, x_side: 92, clickhere_home: 0, clickhere_side: 0, blur_home: 1239, blur_side: 24, searches_cohort: 798, searches_total: 5864294},
		// v10
		{version: 10, date: '160427', partial: true, impressions_home: 286767, impressions_side: 1309, clickbutton_home: 876, clickbutton_side: 21, x_home: 1290, x_side: 41, clickhere_home: 0, clickhere_side: 0, blur_home: 405, blur_side: 9, searches_cohort: 16, searches_total: 5864294},
		{version: 10, date: '160428', impressions_home: 1129630, impressions_side: 4580, clickbutton_home: 3367, clickbutton_side: 99, x_home: 5207, x_side: 147, clickhere_home: 0, clickhere_side: 0, blur_home: 1574, blur_side: 30, searches_cohort: 319, searches_total: 5752347},
		{version: 10, date: '160429', impressions_home: 1063703, impressions_side: 4582, clickbutton_home: 3234, clickbutton_side: 93, x_home: 5079, x_side: 135, clickhere_home: 0, clickhere_side: 0, blur_home: 1500, blur_side: 36, searches_cohort: 374, searches_total: 5376846},
		{version: 10, date: '160430', impressions_home: 928568, impressions_side: 4508, clickbutton_home: 3252, clickbutton_side: 110, x_home: 4656, x_side: 126, clickhere_home: 0, clickhere_side: 0, blur_home: 1562, blur_side: 30, searches_cohort: 432, searches_total: 4717559},
		{version: 10, date: '160501', impressions_home: 973437, impressions_side: 4623, clickbutton_home: 3176, clickbutton_side: 104, x_home: 4615, x_side: 138, clickhere_home: 0, clickhere_side: 0, blur_home: 1461, blur_side: 33, searches_cohort: 473, searches_total: 5044618},
		{version: 10, date: '160502', impressions_home: 1128830, impressions_side: 4670, clickbutton_home: 3405, clickbutton_side: 94, x_home: 5227, x_side: 110, clickhere_home: 0, clickhere_side: 0, blur_home: 1640, blur_side: 28, searches_cohort: 416, searches_total: 5857545},
		{version: 10, date: '160503', impressions_home: 1110556, impressions_side: 4628, clickbutton_home: 3530, clickbutton_side: 98, x_home: 5310, x_side: 133, clickhere_home: 0, clickhere_side: 0, blur_home: 1675, blur_side: 38, searches_cohort: 508, searches_total: 5817966},
		{version: 10, date: '160504', impressions_home: 740345, impressions_side: 2940, clickbutton_home: 2376, clickbutton_side: 59, x_home: 3699, x_side: 89, clickhere_home: 0, clickhere_side: 0, blur_home: 1141, blur_side: 24, searches_cohort: 598, searches_total: 5580823},
		// v11
		{version: 11, date: '160504', partial: true, impressions_home: 332465, impressions_side: 1535, clickbutton_home: 1037, clickbutton_side: 26, x_home: 1462, x_side: 49, clickhere_home: 0, clickhere_side: 0, blur_home: 521, blur_side: 6, searches_cohort: 47, searches_total: 5580823},
		{version: 11, date: '160505', impressions_home: 1017848, impressions_side: 4406, clickbutton_home: 3616, clickbutton_side: 76, x_home: 5188, x_side: 150, clickhere_home: 0, clickhere_side: 0, blur_home: 1771, blur_side: 22, searches_cohort: 289, searches_total: 5192475},
		{version: 11, date: '160506', impressions_home: 1013006, impressions_side: 4409, clickbutton_home: 3232, clickbutton_side: 77, x_home: 5014, x_side: 129, clickhere_home: 0, clickhere_side: 0, blur_home: 1489, blur_side: 28, searches_cohort: 226, searches_total: 5058915},
		{version: 11, date: '160507', impressions_home: 894317, impressions_side: 4169, clickbutton_home: 3110, clickbutton_side: 77, x_home: 4577, x_side: 127, clickhere_home: 0, clickhere_side: 0, blur_home: 1462, blur_side: 25, searches_cohort: 253, searches_total: 4435089},
		{version: 11, date: '160508', impressions_home: 945548, impressions_side: 4266, clickbutton_home: 3150, clickbutton_side: 81, x_home: 4699, x_side: 128, clickhere_home: 0, clickhere_side: 0, blur_home: 1467, blur_side: 34, searches_cohort: 497, searches_total: 4697116},
		{version: 11, date: '160509', impressions_home: 1158878, impressions_side: 4789, clickbutton_home: 3360, clickbutton_side: 97, x_home: 5292, x_side: 128, clickhere_home: 0, clickhere_side: 0, blur_home: 1558, blur_side: 35, searches_cohort: 415, searches_total: 5838442},
		{version: 11, date: '160510', impressions_home: 1136209, impressions_side: 4992, clickbutton_home: 3598, clickbutton_side: 121, x_home: 5499, x_side: 138, clickhere_home: 0, clickhere_side: 0, blur_home: 1718, blur_side: 48, searches_cohort: 618, searches_total: 5827931},
		{version: 11, date: '160511', impressions_home: 838160, impressions_side: 3391, clickbutton_home: 2752, clickbutton_side: 73, x_home: 4131, x_side: 88, clickhere_home: 0, clickhere_side: 0, blur_home: 1291, blur_side: 35, searches_cohort: 641, searches_total: 5734412},
		// v12
		{version: 12, date: '160511', impressions_home: 281195, impressions_side: 1323, clickbutton_home: 858, clickbutton_side: 29, x_home: 1227, x_side: 38, clickhere_home: 0, clickhere_side: 0, blur_home: 485, blur_side: 16, searches_cohort: 24, searches_total: 5734412},
		{version: 12, date: '160512', impressions_home: 1102623, impressions_side: 4786, clickbutton_home: 3323, clickbutton_side: 100, x_home: 5061, x_side: 153, clickhere_home: 0, clickhere_side: 0, blur_home: 1824, blur_side: 39, searches_cohort: 248, searches_total: 5608288},
		{version: 12, date: '160513', impressions_home: 1076872, impressions_side: 4519, clickbutton_home: 3165, clickbutton_side: 86, x_home: 5094, x_side: 147, clickhere_home: 0, clickhere_side: 0, blur_home: 1727, blur_side: 33, searches_cohort: 276, searches_total: 5359496},
		{version: 12, date: '160514', impressions_home: 942621, impressions_side: 4449, clickbutton_home: 3013, clickbutton_side: 102, x_home: 4418, x_side: 123, clickhere_home: 0, clickhere_side: 0, blur_home: 1626, blur_side: 48, searches_cohort: 354, searches_total: 4720135},
		{version: 12, date: '160515', impressions_home: 961895, impressions_side: 4607, clickbutton_home: 3295, clickbutton_side: 86, x_home: 4797, x_side: 126, clickhere_home: 0, clickhere_side: 0, blur_home: 1803, blur_side: 38, searches_cohort: 334, searches_total: 4957479},
		{"clickhere_side":0,"searches_cohort":464,"clickbutton_home":4028,"date":"160516","version":12,"blur_home":2097,"x_side":152,"searches_total":5847668,"clickbutton_side":117,"blur_side":44,"impressions_side":5372,"impressions_home":1127788,"clickhere_home":0,"x_home":5574},
		{"clickhere_side":0,"searches_cohort":529,"clickbutton_home":3770,"date":"160517","version":12,"blur_home":2033,"x_side":148,"searches_total":5895214,"clickbutton_side":107,"blur_side":45,"impressions_side":4815,"impressions_home":1134758,"clickhere_home":0,"x_home":5351},
		{"clickhere_side":0,"searches_cohort":470,"clickbutton_home":2874,"date":"160518","version":12,"blur_home":1612,"x_side":101,"searches_total":5757947,"clickbutton_side":63,"blur_side":25,"impressions_side":3355,"impressions_home":820044,"clickhere_home":0,"x_home":4018},
		// v13
		{"clickhere_side":1,"searches_cohort":22,"date":"160518","blur_home":54,"x_side":45,"clickbutton_side":32,"blur_side":0,"fire_on_page_load":876,"impressions_side":1398,"impressions_home":294559,"clickhere_home":55,"tab_regains_focus":279,"clickbutton_home":749,"version":13,"tab_lost_focus":858,"searches_total":5757947,"scroll_200px":571,"x_home":1384},
		{"clickhere_side":7,"searches_cohort":191,"date":"160519","blur_home":175,"x_side":133,"clickbutton_side":102,"blur_side":5,"fire_on_page_load":3461,"impressions_side":4502,"impressions_home":1096475,"clickhere_home":184,"tab_regains_focus":1136,"clickbutton_home":2856,"version":13,"tab_lost_focus":3386,"searches_total":5624306,"scroll_200px":2065,"x_home":5269},
		{"clickhere_side":8,"searches_cohort":534,"date":"160520","blur_home":198,"x_side":120,"clickbutton_side":88,"blur_side":8,"fire_on_page_load":3355,"impressions_side":4551,"impressions_home":1045474,"clickhere_home":200,"tab_regains_focus":1019,"clickbutton_home":2770,"version":13,"tab_lost_focus":3298,"searches_total":5283431,"scroll_200px":2016,"x_home":4973},
		{"clickhere_side":6,"searches_cohort":388,"date":"160521","blur_home":177,"x_side":144,"clickbutton_side":77,"blur_side":6,"fire_on_page_load":3141,"impressions_side":4602,"impressions_home":906656,"clickhere_home":170,"tab_regains_focus":956,"clickbutton_home":2608,"version":13,"tab_lost_focus":3064,"searches_total":4530514,"scroll_200px":1879,"x_home":4441},
		{"clickhere_side":12,"searches_cohort":400,"date":"160522","blur_home":184,"x_side":160,"clickbutton_side":91,"blur_side":11,"fire_on_page_load":3312,"impressions_side":4984,"impressions_home":968521,"clickhere_home":178,"tab_regains_focus":1058,"clickbutton_home":2756,"version":13,"tab_lost_focus":3256,"searches_total":5002265,"scroll_200px":2052,"x_home":4647},
		{"clickhere_side":7,"searches_cohort":485,"date":"160523","blur_home":183,"x_side":127,"clickbutton_side":86,"blur_side":8,"fire_on_page_load":3536,"impressions_side":5119,"impressions_home":1147710,"clickhere_home":157,"tab_regains_focus":1080,"clickbutton_home":2894,"version":13,"tab_lost_focus":3460,"searches_total":6035911,"scroll_200px":2154,"x_home":5351},
		{"clickhere_side":4,"searches_cohort":840,"date":"160524","blur_home":194,"x_side":120,"clickbutton_side":87,"blur_side":5,"fire_on_page_load":3417,"impressions_side":4828,"impressions_home":1112842,"clickhere_home":189,"tab_regains_focus":1085,"clickbutton_home":2757,"version":13,"tab_lost_focus":3368,"searches_total":5850580,"scroll_200px":2026,"x_home":5309},
		{"clickhere_side":6,"searches_cohort":842,"date":"160525","blur_home":114,"x_side":75,"clickbutton_side":50,"blur_side":5,"fire_on_page_load":2124,"impressions_side":3130,"impressions_home":726703,"clickhere_home":100,"tab_regains_focus":676,"clickbutton_home":1735,"version":13,"tab_lost_focus":2082,"searches_total":5765836,"scroll_200px":1271,"x_home":3533},
		// v14
		{"clickhere_side":2,"searches_cohort":21,"date":"160525","blur_home":85,"x_side":64,"clickbutton_side":25,"blur_side":2,"fire_on_page_load":1031,"impressions_side":1699,"impressions_home":352711,"clickhere_home":70,"tab_regains_focus":366,"clickbutton_home":899,"version":14,"tab_lost_focus":1024,"searches_total":5765836,"scroll_200px":616,"x_home":1627},
		{"clickhere_side":5,"searches_cohort":216,"date":"160526","blur_home":207,"x_side":159,"clickbutton_side":83,"blur_side":5,"fire_on_page_load":3177,"impressions_side":5068,"impressions_home":1056981,"clickhere_home":195,"tab_regains_focus":985,"clickbutton_home":2707,"version":14,"tab_lost_focus":3124,"searches_total":6119759,"scroll_200px":1913,"x_home":5285},
		{"clickhere_side":7,"searches_cohort":258,"date":"160527","blur_home":201,"x_side":145,"clickbutton_side":63,"blur_side":8,"fire_on_page_load":3125,"impressions_side":4832,"impressions_home":1025366,"clickhere_home":173,"tab_regains_focus":982,"clickbutton_home":2652,"version":14,"tab_lost_focus":3070,"searches_total":5853461,"scroll_200px":1842,"x_home":5031},
		{"clickhere_side":6,"searches_cohort":176,"date":"160528","blur_home":165,"x_side":135,"clickbutton_side":83,"blur_side":6,"fire_on_page_load":2941,"impressions_side":4709,"impressions_home":899474,"clickhere_home":152,"tab_regains_focus":946,"clickbutton_home":2482,"version":14,"tab_lost_focus":2888,"searches_total":5132565,"scroll_200px":1796,"x_home":4417},
		{"clickhere_side":7,"searches_cohort":225,"date":"160529","blur_home":192,"x_side":178,"clickbutton_side":95,"blur_side":5,"fire_on_page_load":3139,"impressions_side":4762,"impressions_home":987485,"clickhere_home":174,"tab_regains_focus":1005,"clickbutton_home":2678,"version":14,"tab_lost_focus":3069,"searches_total":5593162,"scroll_200px":1859,"x_home":4610},
		{"clickhere_side":6,"searches_cohort":462,"date":"160530","blur_home":170,"x_side":165,"clickbutton_side":89,"blur_side":6,"fire_on_page_load":3495,"impressions_side":5311,"impressions_home":1108070,"clickhere_home":149,"tab_regains_focus":1080,"clickbutton_home":2905,"version":14,"tab_lost_focus":3434,"searches_total":6295139,"scroll_200px":2052,"x_home":5358},
		{"clickhere_side":7,"searches_cohort":459,"date":"160531","blur_home":231,"x_side":141,"clickbutton_side":87,"blur_side":6,"fire_on_page_load":3483,"impressions_side":4926,"impressions_home":1137656,"clickhere_home":212,"tab_regains_focus":1113,"clickbutton_home":2996,"version":14,"tab_lost_focus":3427,"searches_total":5820931,"scroll_200px":2053,"x_home":5647},
		{"clickhere_side":7,"searches_cohort":496,"date":"160601","blur_home":156,"x_side":112,"clickbutton_side":65,"blur_side":7,"fire_on_page_load":2668,"impressions_side":3345,"impressions_home":824943,"clickhere_home":150,"tab_regains_focus":841,"clickbutton_home":2170,"version":14,"tab_lost_focus":2610,"searches_total":5685441,"scroll_200px":1551,"x_home":4081},
		// v15
		{"clickhere_side":4,"searches_cohort":64,"date":"160601","blur_home":38,"tour_page_impression_facebook":0,"x_side":35,"clickbutton_side":18,"blur_side":4,"fire_on_page_load":710,"impressions_side":1348,"impressions_home":269253,"clickhere_home":34,"tour_page_impression_twitter":0,"share_button":6,"tab_regains_focus":218,"tour_page_impression_email":0,"facebook_share_button":1,"clickbutton_home":670,"version":"15","email_share_button":3,"tab_lost_focus":692,"twitter_share_button":2,"searches_total":5685441,"scroll_200px":414,"x_home":1115},
		{"clickhere_side":6,"searches_cohort":181,"date":"160602","blur_home":155,"tour_page_impression_facebook":1,"x_side":171,"clickbutton_side":84,"blur_side":6,"fire_on_page_load":2734,"impressions_side":4871,"impressions_home":1024973,"clickhere_home":144,"tour_page_impression_twitter":0,"share_button":17,"tab_regains_focus":891,"tour_page_impression_email":0,"facebook_share_button":6,"clickbutton_home":2477,"version":"15","email_share_button":7,"tab_lost_focus":2664,"twitter_share_button":4,"searches_total":5614665,"scroll_200px":1521,"x_home":4458},
		{"clickhere_side":5,"searches_cohort":272,"date":"160603","blur_home":100,"tour_page_impression_facebook":0,"x_side":151,"clickbutton_side":115,"blur_side":4,"fire_on_page_load":2513,"impressions_side":4755,"impressions_home":986005,"clickhere_home":79,"tour_page_impression_twitter":0,"share_button":12,"tab_regains_focus":837,"tour_page_impression_email":0,"facebook_share_button":5,"clickbutton_home":2234,"version":"15","email_share_button":6,"tab_lost_focus":2457,"twitter_share_button":1,"searches_total":5337652,"scroll_200px":1416,"x_home":4209},
		{"clickhere_side":17,"searches_cohort":228,"date":"160604","blur_home":128,"tour_page_impression_facebook":0,"x_side":168,"clickbutton_side":109,"blur_side":13,"fire_on_page_load":2299,"impressions_side":5000,"impressions_home":857180,"clickhere_home":118,"tour_page_impression_twitter":0,"share_button":21,"tab_regains_focus":718,"tour_page_impression_email":1,"facebook_share_button":7,"clickbutton_home":2121,"version":"15","email_share_button":10,"tab_lost_focus":2238,"twitter_share_button":4,"searches_total":4685833,"scroll_200px":1283,"x_home":3636},
		{"clickhere_side":8,"searches_cohort":288,"date":"160605","blur_home":139,"tour_page_impression_facebook":1,"x_side":178,"clickbutton_side":99,"blur_side":7,"fire_on_page_load":2451,"impressions_side":4944,"impressions_home":913480,"clickhere_home":125,"tour_page_impression_twitter":0,"share_button":14,"tab_regains_focus":766,"tour_page_impression_email":0,"facebook_share_button":5,"clickbutton_home":2243,"version":"15","email_share_button":7,"tab_lost_focus":2389,"twitter_share_button":2,"searches_total":5077069,"scroll_200px":1425,"x_home":3882},
		{"clickhere_side":6,"searches_cohort":479,"date":"160606","blur_home":114,"tour_page_impression_facebook":2,"x_side":143,"clickbutton_side":105,"blur_side":6,"fire_on_page_load":2740,"impressions_side":5000,"impressions_home":1058727,"clickhere_home":96,"tour_page_impression_twitter":0,"share_button":23,"tab_regains_focus":813,"tour_page_impression_email":0,"facebook_share_button":10,"clickbutton_home":2441,"version":"15","email_share_button":10,"tab_lost_focus":2662,"twitter_share_button":3,"searches_total":5891175,"scroll_200px":1491,"x_home":4212},
		{"clickhere_side":5,"searches_cohort":612,"date":"160607","blur_home":130,"tour_page_impression_facebook":1,"x_side":142,"clickbutton_side":95,"blur_side":5,"fire_on_page_load":2741,"impressions_side":4815,"impressions_home":1035419,"clickhere_home":116,"tour_page_impression_twitter":0,"share_button":25,"tab_regains_focus":873,"tour_page_impression_email":0,"facebook_share_button":4,"clickbutton_home":2490,"version":"15","email_share_button":12,"tab_lost_focus":2691,"twitter_share_button":9,"searches_total":5766330,"scroll_200px":1550,"x_home":4307},
		{"clickhere_side":8,"searches_cohort":543,"date":"160608","blur_home":117,"tour_page_impression_facebook":8,"x_side":77,"clickbutton_side":71,"blur_side":7,"fire_on_page_load":1907,"impressions_side":2940,"impressions_home":669949,"clickhere_home":108,"tour_page_impression_twitter":1,"share_button":15,"tab_regains_focus":621,"tour_page_impression_email":0,"facebook_share_button":6,"clickbutton_home":1680,"version":"15","email_share_button":7,"tab_lost_focus":1837,"twitter_share_button":2,"searches_total":5655002,"scroll_200px":1063,"x_home":2961},
		// v16
		{"clickhere_side":7,"searches_cohort":248,"date":"160609","blur_home":162,"tour_page_impression_facebook":0,"x_side":135,"clickbutton_side":113,"blur_side":7,"fire_on_page_load":2916,"impressions_side":4722,"impressions_home":1007674,"clickhere_home":146,"tour_page_impression_twitter":0,"share_button":19,"tab_regains_focus":960,"tour_page_impression_email":0,"facebook_share_button":8,"clickbutton_home":2654,"version":"16","email_share_button":9,"tab_lost_focus":2839,"twitter_share_button":2,"searches_total":5545714,"scroll_200px":1687,"x_home":4333},
		{"clickhere_side":3,"searches_cohort":348,"date":"160610","blur_home":126,"tour_page_impression_facebook":0,"x_side":158,"clickbutton_side":120,"blur_side":4,"fire_on_page_load":3160,"impressions_side":4931,"impressions_home":961825,"clickhere_home":107,"tour_page_impression_twitter":0,"share_button":30,"tab_regains_focus":1063,"tour_page_impression_email":0,"facebook_share_button":13,"clickbutton_home":2846,"version":"16","email_share_button":14,"tab_lost_focus":3050,"twitter_share_button":3,"searches_total":5321840,"scroll_200px":1802,"x_home":4259},
		{"clickhere_side":9,"searches_cohort":418,"date":"160611","blur_home":147,"tour_page_impression_facebook":0,"x_side":165,"clickbutton_side":119,"blur_side":10,"fire_on_page_load":3340,"impressions_side":5117,"impressions_home":857956,"clickhere_home":126,"tour_page_impression_twitter":0,"share_button":21,"tab_regains_focus":1211,"tour_page_impression_email":0,"facebook_share_button":7,"clickbutton_home":3041,"version":"16","email_share_button":11,"tab_lost_focus":3240,"twitter_share_button":3,"searches_total":4811903,"scroll_200px":1997,"x_home":3864},
		{"clickhere_side":10,"searches_cohort":442,"date":"160612","blur_home":122,"tour_page_impression_facebook":0,"x_side":179,"clickbutton_side":136,"blur_side":9,"fire_on_page_load":3147,"impressions_side":5065,"impressions_home":914675,"clickhere_home":108,"tour_page_impression_twitter":0,"share_button":15,"tab_regains_focus":977,"tour_page_impression_email":0,"facebook_share_button":7,"clickbutton_home":2812,"version":"16","email_share_button":4,"tab_lost_focus":3061,"twitter_share_button":4,"searches_total":5181179,"scroll_200px":1777,"x_home":3963}
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
		{version: 8, date: '160420', impressions_home: 159722, impressions_side: 702, clickbutton_home: 592, clickbutton_side: 16, x_home: 1367, x_side: 26, clickhere_home: 0, clickhere_side: 0, blur_home: 195, blur_side: 6, searches_cohort: 87, searches_total: 1145784},
		// v9
		{version: 9, date: '160420', partial: true, impressions_home: 62625, impressions_side: 255, clickbutton_home: 193, clickbutton_side: 5, x_home: 469, x_side: 7, clickhere_home: 0, clickhere_side: 0, blur_home: 54, blur_side: 1, searches_cohort: 7, searches_total: 1145785},
		{version: 9, date: '160421', impressions_home: 220265, impressions_side: 888, clickbutton_home: 753, clickbutton_side: 20, x_home: 1734, x_side: 27, clickhere_home: 0, clickhere_side: 0, blur_home: 252, blur_side: 4, searches_cohort: 68, searches_total: 1135856},
		{version: 9, date: '160422', impressions_home: 212989, impressions_side: 890, clickbutton_home: 745, clickbutton_side: 14, x_home: 1627, x_side: 38, clickhere_home: 0, clickhere_side: 0, blur_home: 246, blur_side: 4, searches_cohort: 44, searches_total: 1089348},
		{version: 9, date: '160423', impressions_home: 194053, impressions_side: 960, clickbutton_home: 744, clickbutton_side: 24, x_home: 1562, x_side: 31, clickhere_home: 0, clickhere_side: 0, blur_home: 240, blur_side: 5, searches_cohort: 46, searches_total: 1033417},
		{version: 9, date: '160424', impressions_home: 210386, impressions_side: 1009, clickbutton_home: 786, clickbutton_side: 29, x_home: 1616, x_side: 36, clickhere_home: 0, clickhere_side: 0, blur_home: 237, blur_side: 9, searches_cohort: 72, searches_total: 1128044},
		{version: 9, date: '160425', impressions_home: 235802, impressions_side: 1062, clickbutton_home: 758, clickbutton_side: 24, x_home: 1757, x_side: 40, clickhere_home: 0, clickhere_side: 0, blur_home: 257, blur_side: 8, searches_cohort: 127, searches_total: 1236202},
		{version: 9, date: '160426', impressions_home: 230655, impressions_side: 955, clickbutton_home: 730, clickbutton_side: 28, x_home: 1629, x_side: 45, clickhere_home: 0, clickhere_side: 0, blur_home: 242, blur_side: 6, searches_cohort: 114, searches_total: 1207816},
		{version: 9, date: '160427', impressions_home: 156866, impressions_side: 664, clickbutton_home: 517, clickbutton_side: 14, x_home: 1112, x_side: 24, clickhere_home: 0, clickhere_side: 0, blur_home: 178, blur_side: 6, searches_cohort: 178, searches_total: 1184697},
		// v10
		{version: 10, date: '160427', partial: true, impressions_home: 68484, impressions_side: 262, clickbutton_home: 207, clickbutton_side: 3, x_home: 484, x_side: 11, clickhere_home: 0, clickhere_side: 0, blur_home: 69, blur_side: 1, searches_cohort: 2, searches_total: 1184697},
		{version: 10, date: '160428', impressions_home: 220335, impressions_side: 958, clickbutton_home: 689, clickbutton_side: 21, x_home: 1573, x_side: 38, clickhere_home: 0, clickhere_side: 0, blur_home: 256, blur_side: 6, searches_cohort: 75, searches_total: 1150951},
		{version: 10, date: '160429', impressions_home: 210474, impressions_side: 893, clickbutton_home: 603, clickbutton_side: 24, x_home: 1531, x_side: 23, clickhere_home: 0, clickhere_side: 0, blur_home: 212, blur_side: 5, searches_cohort: 132, searches_total: 1081512},
		{version: 10, date: '160430', impressions_home: 195378, impressions_side: 908, clickbutton_home: 711, clickbutton_side: 19, x_home: 1483, x_side: 34, clickhere_home: 0, clickhere_side: 0, blur_home: 228, blur_side: 4, searches_cohort: 91, searches_total: 1014054},
		{version: 10, date: '160501', impressions_home: 207200, impressions_side: 883, clickbutton_home: 700, clickbutton_side: 21, x_home: 1437, x_side: 44, clickhere_home: 0, clickhere_side: 0, blur_home: 247, blur_side: 4, searches_cohort: 141, searches_total: 1097554},
		{version: 10, date: '160502', impressions_home: 233802, impressions_side: 1083, clickbutton_home: 751, clickbutton_side: 23, x_home: 1655, x_side: 29, clickhere_home: 0, clickhere_side: 0, blur_home: 242, blur_side: 8, searches_cohort: 119, searches_total: 1204800},
		{version: 10, date: '160503', impressions_home: 226296, impressions_side: 990, clickbutton_home: 669, clickbutton_side: 26, x_home: 1581, x_side: 36, clickhere_home: 0, clickhere_side: 0, blur_home: 215, blur_side: 8, searches_cohort: 122, searches_total: 1181481},
		{version: 10, date: '160504', impressions_home: 140480, impressions_side: 578, clickbutton_home: 466, clickbutton_side: 9, x_home: 943, x_side: 16, clickhere_home: 0, clickhere_side: 0, blur_home: 150, blur_side: 2, searches_cohort: 165, searches_total: 1143665},
		// v11
		{version: 11, date: '160504', partial: true, impressions_home: 77800, impressions_side: 332, clickbutton_home: 207, clickbutton_side: 6, x_home: 576, x_side: 8, clickhere_home: 0, clickhere_side: 0, blur_home: 63, blur_side: 1, searches_cohort: 12, searches_total: 1143665},
		{version: 11, date: '160505', impressions_home: 207533, impressions_side: 878, clickbutton_home: 609, clickbutton_side: 24, x_home: 1542, x_side: 30, clickhere_home: 0, clickhere_side: 0, blur_home: 203, blur_side: 6, searches_cohort: 24, searches_total: 1093653},
		{version: 11, date: '160506', impressions_home: 200169, impressions_side: 874, clickbutton_home: 563, clickbutton_side: 23, x_home: 1305, x_side: 24, clickhere_home: 0, clickhere_side: 0, blur_home: 175, blur_side: 5, searches_cohort: 135, searches_total: 1025752},
		{version: 11, date: '160507', impressions_home: 180253, impressions_side: 776, clickbutton_home: 573, clickbutton_side: 15, x_home: 1364, x_side: 26, clickhere_home: 0, clickhere_side: 0, blur_home: 193, blur_side: 5, searches_cohort: 109, searches_total: 929952},
		{version: 11, date: '160508', impressions_home: 189070, impressions_side: 885, clickbutton_home: 577, clickbutton_side: 18, x_home: 1301, x_side: 32, clickhere_home: 0, clickhere_side: 0, blur_home: 213, blur_side: 7, searches_cohort: 113, searches_total: 992370},
		{version: 11, date: '160509', impressions_home: 232158, impressions_side: 873, clickbutton_home: 627, clickbutton_side: 18, x_home: 1476, x_side: 25, clickhere_home: 0, clickhere_side: 0, blur_home: 214, blur_side: 4, searches_cohort: 166, searches_total: 1313646},
		{version: 11, date: '160510', impressions_home: 226460, impressions_side: 1009, clickbutton_home: 722, clickbutton_side: 20, x_home: 1510, x_side: 39, clickhere_home: 0, clickhere_side: 0, blur_home: 218, blur_side: 8, searches_cohort: 147, searches_total: 1485242},
		{version: 11, date: '160511', impressions_home: 154852, impressions_side: 655, clickbutton_home: 487, clickbutton_side: 20, x_home: 978, x_side: 18, clickhere_home: 0, clickhere_side: 0, blur_home: 155, blur_side: 4, searches_cohort: 206, searches_total: 1351014},
		// v12
		{version: 12, date: '160511', impressions_home: 65510, impressions_side: 297, clickbutton_home: 189, clickbutton_side: 8, x_home: 371, x_side: 14, clickhere_home: 0, clickhere_side: 0, blur_home: 61, blur_side: 1, searches_cohort: 17, searches_total: 1351014},
		{version: 12, date: '160512', impressions_home: 214465, impressions_side: 958, clickbutton_home: 638, clickbutton_side: 27, x_home: 1388, x_side: 39, clickhere_home: 0, clickhere_side: 0, blur_home: 204, blur_side: 9, searches_cohort: 32, searches_total: 1112648},
		{version: 12, date: '160513', impressions_home: 206808, impressions_side: 957, clickbutton_home: 579, clickbutton_side: 14, x_home: 1346, x_side: 36, clickhere_home: 0, clickhere_side: 0, blur_home: 194, blur_side: 2, searches_cohort: 95, searches_total: 1059174},
		{version: 12, date: '160514', impressions_home: 189045, impressions_side: 929, clickbutton_home: 660, clickbutton_side: 21, x_home: 1299, x_side: 25, clickhere_home: 0, clickhere_side: 0, blur_home: 219, blur_side: 10, searches_cohort: 70, searches_total: 987176},
		{version: 12, date: '160515', impressions_home: 198211, impressions_side: 923, clickbutton_home: 679, clickbutton_side: 15, x_home: 1312, x_side: 32, clickhere_home: 0, clickhere_side: 0, blur_home: 215, blur_side: 5, searches_cohort: 101, searches_total: 1068444},
		{"clickhere_side":0,"searches_cohort":148,"clickbutton_home":809,"date":"160516","version":12,"blur_home":295,"x_side":31,"searches_total":1215498,"clickbutton_side":27,"blur_side":6,"impressions_side":1109,"impressions_home":230372,"clickhere_home":0,"x_home":1602},
		{"clickhere_side":0,"searches_cohort":177,"clickbutton_home":735,"date":"160517","version":12,"blur_home":253,"x_side":29,"searches_total":1164862,"clickbutton_side":30,"blur_side":11,"impressions_side":909,"impressions_home":225235,"clickhere_home":0,"x_home":1513},
		{"clickhere_side":0,"searches_cohort":217,"clickbutton_home":502,"date":"160518","version":12,"blur_home":166,"x_side":28,"searches_total":1145486,"clickbutton_side":12,"blur_side":4,"impressions_side":634,"impressions_home":152793,"clickhere_home":0,"x_home":1022},
		// v13
		{"clickhere_side":0,"searches_cohort":22,"clickbutton_home":510,"date":"160518","version":13,"blur_home":154,"x_side":8,"searches_total":1145486,"clickbutton_side":6,"blur_side":2,"impressions_side":303,"impressions_home":67143,"clickhere_home":0,"x_home":1600},
		{"clickhere_side":0,"searches_cohort":28,"clickbutton_home":1290,"date":"160519","version":13,"blur_home":373,"x_side":32,"searches_total":1117112,"clickbutton_side":20,"blur_side":5,"impressions_side":907,"impressions_home":207727,"clickhere_home":0,"x_home":3506},
		{"clickhere_side":0,"searches_cohort":81,"clickbutton_home":935,"date":"160520","version":13,"blur_home":257,"x_side":31,"searches_total":1041817,"clickbutton_side":12,"blur_side":4,"impressions_side":846,"impressions_home":193615,"clickhere_home":0,"x_home":2745},
		{"clickhere_side":0,"searches_cohort":131,"clickbutton_home":885,"date":"160521","version":13,"blur_home":280,"x_side":29,"searches_total":957970,"clickbutton_side":21,"blur_side":8,"impressions_side":864,"impressions_home":171984,"clickhere_home":1,"x_home":2427},
		{"clickhere_side":0,"searches_cohort":115,"clickbutton_home":983,"date":"160522","version":13,"blur_home":326,"x_side":41,"searches_total":1059164,"clickbutton_side":15,"blur_side":5,"impressions_side":894,"impressions_home":186128,"clickhere_home":0,"x_home":2444},
		{"clickhere_side":0,"searches_cohort":150,"date":"160523","blur_home":298,"x_side":34,"clickbutton_side":31,"blur_side":6,"fire_on_page_load":0,"impressions_side":942,"impressions_home":214629,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":923,"version":13,"tab_lost_focus":0,"searches_total":1200761,"scroll_200px":0,"x_home":2737},
		{"clickhere_side":0,"searches_cohort":237,"date":"160524","blur_home":260,"x_side":26,"clickbutton_side":24,"blur_side":8,"fire_on_page_load":0,"impressions_side":861,"impressions_home":205127,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":847,"version":13,"tab_lost_focus":0,"searches_total":1156902,"scroll_200px":0,"x_home":2524},
		{"clickhere_side":0,"searches_cohort":182,"date":"160525","blur_home":153,"x_side":19,"clickbutton_side":14,"blur_side":6,"fire_on_page_load":0,"impressions_side":544,"impressions_home":125846,"clickhere_home":1,"tab_regains_focus":0,"clickbutton_home":499,"version":13,"tab_lost_focus":0,"searches_total":1115000,"scroll_200px":0,"x_home":1351},
		// v14
		{"clickhere_side":0,"searches_cohort":4,"date":"160525","blur_home":116,"x_side":12,"clickbutton_side":9,"blur_side":1,"fire_on_page_load":0,"impressions_side":347,"impressions_home":73143,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":319,"version":14,"tab_lost_focus":0,"searches_total":1115000,"scroll_200px":0,"x_home":927},
		{"clickhere_side":0,"searches_cohort":35,"date":"160526","blur_home":277,"x_side":37,"clickbutton_side":28,"blur_side":7,"fire_on_page_load":2,"impressions_side":922,"impressions_home":193996,"clickhere_home":0,"tab_regains_focus":6,"clickbutton_home":748,"version":14,"tab_lost_focus":6,"searches_total":1086379,"scroll_200px":0,"x_home":2189},
		{"clickhere_side":0,"searches_cohort":68,"date":"160527","blur_home":228,"x_side":32,"clickbutton_side":20,"blur_side":8,"fire_on_page_load":0,"impressions_side":881,"impressions_home":185281,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":721,"version":14,"tab_lost_focus":0,"searches_total":1018213,"scroll_200px":0,"x_home":2006},
		{"clickhere_side":0,"searches_cohort":98,"date":"160528","blur_home":242,"x_side":34,"clickbutton_side":20,"blur_side":11,"fire_on_page_load":0,"impressions_side":844,"impressions_home":164288,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":708,"version":14,"tab_lost_focus":0,"searches_total":916617,"scroll_200px":0,"x_home":1870},
		{"clickhere_side":0,"searches_cohort":178,"date":"160529","blur_home":236,"x_side":30,"clickbutton_side":16,"blur_side":6,"fire_on_page_load":0,"impressions_side":849,"impressions_home":176124,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":709,"version":14,"tab_lost_focus":0,"searches_total":1011211,"scroll_200px":0,"x_home":1934},
		{"clickhere_side":0,"searches_cohort":94,"date":"160530","blur_home":237,"x_side":40,"clickbutton_side":30,"blur_side":10,"fire_on_page_load":0,"impressions_side":918,"impressions_home":202013,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":772,"version":14,"tab_lost_focus":0,"searches_total":1138852,"scroll_200px":0,"x_home":2203},
		{"clickhere_side":0,"searches_cohort":202,"date":"160531","blur_home":246,"x_side":29,"clickbutton_side":22,"blur_side":4,"fire_on_page_load":0,"impressions_side":911,"impressions_home":208984,"clickhere_home":0,"tab_regains_focus":0,"clickbutton_home":802,"version":14,"tab_lost_focus":0,"searches_total":1146993,"scroll_200px":0,"x_home":2266},
		{"clickhere_side":0,"searches_cohort":170,"date":"160601","blur_home":171,"x_side":18,"clickbutton_side":22,"blur_side":8,"fire_on_page_load":1,"impressions_side":592,"impressions_home":141037,"clickhere_home":1,"tab_regains_focus":0,"clickbutton_home":541,"version":14,"tab_lost_focus":0,"searches_total":1099878,"scroll_200px":1,"x_home":1397},
		// v15
		{"clickhere_side":0,"searches_cohort":7,"date":"160601","blur_home":98,"tour_page_impression_facebook":0,"x_side":12,"clickbutton_side":9,"blur_side":1,"fire_on_page_load":0,"impressions_side":262,"impressions_home":59892,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":257,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1099878,"scroll_200px":0,"x_home":685},
		{"clickhere_side":0,"searches_cohort":37,"date":"160602","blur_home":225,"tour_page_impression_facebook":1,"x_side":23,"clickbutton_side":18,"blur_side":6,"fire_on_page_load":1,"impressions_side":799,"impressions_home":195875,"clickhere_home":0,"tour_page_impression_twitter":1,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":667,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1089853,"scroll_200px":0,"x_home":2020},
		{"clickhere_side":0,"searches_cohort":75,"date":"160603","blur_home":232,"tour_page_impression_facebook":0,"x_side":23,"clickbutton_side":28,"blur_side":7,"fire_on_page_load":0,"impressions_side":792,"impressions_home":186419,"clickhere_home":1,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":685,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1021626,"scroll_200px":0,"x_home":1815},
		{"clickhere_side":0,"searches_cohort":76,"date":"160604","blur_home":207,"tour_page_impression_facebook":0,"x_side":28,"clickbutton_side":21,"blur_side":8,"fire_on_page_load":0,"impressions_side":801,"impressions_home":168166,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":620,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":941892,"scroll_200px":0,"x_home":1677},
		{"clickhere_side":0,"searches_cohort":176,"date":"160605","blur_home":230,"tour_page_impression_facebook":0,"x_side":21,"clickbutton_side":27,"blur_side":11,"fire_on_page_load":0,"impressions_side":853,"impressions_home":183488,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":711,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1039542,"scroll_200px":0,"x_home":1884},
		{"clickhere_side":0,"searches_cohort":89,"date":"160606","blur_home":259,"tour_page_impression_facebook":0,"x_side":28,"clickbutton_side":22,"blur_side":6,"fire_on_page_load":0,"impressions_side":784,"impressions_home":205784,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":745,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1134546,"scroll_200px":0,"x_home":2022},
		{"clickhere_side":0,"searches_cohort":190,"date":"160607","blur_home":215,"tour_page_impression_facebook":0,"x_side":22,"clickbutton_side":13,"blur_side":9,"fire_on_page_load":0,"impressions_side":833,"impressions_home":199136,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":684,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1117177,"scroll_200px":0,"x_home":1886},
		{"clickhere_side":0,"searches_cohort":205,"date":"160608","blur_home":163,"tour_page_impression_facebook":0,"x_side":19,"clickbutton_side":15,"blur_side":5,"fire_on_page_load":0,"impressions_side":518,"impressions_home":119517,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":492,"version":"15","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1096836,"scroll_200px":0,"x_home":1156},
		// v16
		{"clickhere_side":0,"searches_cohort":79,"date":"160609","blur_home":266,"tour_page_impression_facebook":0,"x_side":36,"clickbutton_side":24,"blur_side":5,"fire_on_page_load":0,"impressions_side":895,"impressions_home":191042,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":805,"version":"16","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":1062169,"scroll_200px":0,"x_home":1955},
		{"clickhere_side":0,"searches_cohort":104,"date":"160610","blur_home":290,"tour_page_impression_facebook":0,"x_side":37,"clickbutton_side":22,"blur_side":9,"fire_on_page_load":4,"impressions_side":849,"impressions_home":182088,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":1,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":852,"version":"16","email_share_button":0,"tab_lost_focus":3,"twitter_share_button":0,"searches_total":997273,"scroll_200px":2,"x_home":1791},
		{"clickhere_side":0,"searches_cohort":61,"date":"160611","blur_home":309,"tour_page_impression_facebook":0,"x_side":35,"clickbutton_side":27,"blur_side":10,"fire_on_page_load":0,"impressions_side":848,"impressions_home":172160,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":0,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":916,"version":"16","email_share_button":0,"tab_lost_focus":0,"twitter_share_button":0,"searches_total":958772,"scroll_200px":0,"x_home":1881},
		{"clickhere_side":0,"searches_cohort":107,"date":"160612","blur_home":271,"tour_page_impression_facebook":0,"x_side":27,"clickbutton_side":33,"blur_side":11,"fire_on_page_load":2,"impressions_side":894,"impressions_home":186434,"clickhere_home":0,"tour_page_impression_twitter":0,"share_button":0,"tab_regains_focus":1,"tour_page_impression_email":0,"facebook_share_button":0,"clickbutton_home":841,"version":"16","email_share_button":0,"tab_lost_focus":2,"twitter_share_button":0,"searches_total":1047964,"scroll_200px":1,"x_home":1925}
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

			// Find the maximum value for "click ratio"
			var clickratio = 0;
			if (entry.impressions_home) clickratio = (entry.clickbutton_home + entry.clickbutton_side) / (entry.impressions_home + entry.impressions_side);

			// Find blur ratio
			var blurratio = (blur + blur_home + blur_side) / (entry.impressions_home + entry.impressions_side);

			// Find the maximum value for "% of searches" thru cohort
			if (entry.searches_total && entry.searches_total > 0) {
				var search = entry.searches_cohort / entry.searches_total;
			}

			// Find averages for each version
			if (entry.version != version) {
				// new version -- find avg of previous version
				if (version) {
					$scope.setAvg('firststep', version, avg_n['firststep'], avg_d);
					$scope.setAvg('clickratio', version, avg_n['clickratio'], avg_d);
					$scope.setAvg('blurratio', version, avg_n['blurratio'], avg_d);
					$scope.setAvg('searches', version, avg_n['searches'], avg_d);
				}
				// update version
				version++;

				// reset all other counters
				avg_n = {
					firststep: 0,
					clickratio: 0,
					blurratio: 0,
					searches: 0
				};
				avg_d = 0;
			}
			
			// is this current version "toggled"? if yes, go thru all final calculations
			if ($scope.toggles['v' + version]) {
				
				// max value for "first step"
				var result = 0;
				// do calc based on whether there's install page data
				if (entry.fire_on_page_load && entry.fire_on_page_load > 100) result = entry.tab_regains_focus / entry.fire_on_page_load;
				else result = (blur + blur_home + blur_side)/(entry.clickbutton_home + entry.clickbutton_side + serp);
				
				if (result > maxfirststep) maxfirststep = result;

				// max value for "click ratio"
				if (clickratio > maxclickratio) maxclickratio = clickratio;

				// max value for "% of searches"
				if (search > maxsearches) maxsearches = search;	

				// keep adding to numerator and denominator
				avg_n['firststep'] += result;
				avg_n['clickratio'] += clickratio;
				avg_n['blurratio'] += blurratio;
				avg_n['searches'] += search;
				avg_d++;
			}
			
		}); // end _.each()
		
		// Need to find the final average
		$scope.setAvg('firststep', version, avg_n['firststep'], avg_d);
		$scope.setAvg('clickratio', version, avg_n['clickratio'], avg_d);
		$scope.setAvg('blurratio', version, avg_n['blurratio'], avg_d);
		$scope.setAvg('searches', version, avg_n['searches'], avg_d);

		// "Max" stats
		$scope.stats.maxfirststep = maxfirststep;
		$scope.stats.maxclickratio = maxclickratio;
		$scope.stats.maxsearches = maxsearches;
	}

	$scope.title = 'chrome';
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
