app.controller("atbController",function(e,s){e.fn=s,e.magicratio=.72,e.info={chrome:[{version:1,type:"cta",desc:"Baseline: has 'click here' button in modal"},{version:2,type:"cta",desc:"removed the 'click here' on Chrome (but screenshot — pointing out the hamburger menu — was deleted by accident)"},{version:3,type:"cta",desc:"copy/paste the chrome:// settings url"},{version:4,type:"cta",desc:"revert back; added screenshot back"},{version:5,type:"cta",desc:"added ATB to SERP after users perform a search"}]},e.toggles={v1:!1,v2:!1,v3:!1,v4:!0,v5:!0,xclick:!0,impressions:!1,serp:!0},e.updateColspan=function(){e.colspan=1,e.toggles.xclick&&(e.colspan+=2),e.toggles.impressions&&(e.colspan+=2)},e.updateColspan(),e.chrome=[{version:1,date:"160223",partial:!0,clickbutton_home:1488,clickbutton_side:63,clickhere:800,blur:-1,searches_cohort:2757,searches_total:1104186.5},{version:1,date:"160224",clickbutton_home:3130,clickbutton_side:108,clickhere:1625,blur:-1,searches_cohort:11676,searches_total:2181199},{version:1,date:"160225",clickbutton_home:3420,clickbutton_side:112,clickhere:1759,blur:-1,searches_cohort:17992,searches_total:2090013},{version:1,date:"160226",clickbutton_home:2913,clickbutton_side:93,clickhere:1498,blur:-1,searches_cohort:21543,searches_total:2002262},{version:1,date:"160227",clickbutton_home:2910,clickbutton_side:101,clickhere:1483,blur:2083,searches_cohort:22689,searches_total:1684199},{version:1,date:"160228",clickbutton_home:2886,clickbutton_side:112,clickhere:1420,blur:2023,searches_cohort:27972,searches_total:1811167},{version:1,date:"160229",clickbutton_home:2987,clickbutton_side:102,clickhere:1549,blur:2092,searches_cohort:34143,searches_total:2237941},{version:1,date:"160301",partial:!0,clickbutton_home:2279,clickbutton_side:76,clickhere:1196,blur:1636,searches_cohort:38598,searches_total:2190151},{version:2,date:"160301",partial:!0,clickbutton_home:784,clickbutton_side:37,clickhere:0,blur:404,searches_cohort:1117,searches_total:2190151},{version:2,date:"160302",clickbutton_home:3109,clickbutton_side:111,clickhere:0,blur:1539,searches_cohort:9072,searches_total:2237941},{version:2,date:"160303",clickbutton_home:3070,clickbutton_side:143,clickhere:0,blur:1553,searches_cohort:15020,searches_total:2153460},{version:2,date:"160304",clickbutton_home:2868,clickbutton_side:101,clickhere:0,blur:1446,searches_cohort:18020,searches_total:2016418},{version:2,date:"160305",clickbutton_home:2807,clickbutton_side:100,clickhere:0,blur:1461,searches_cohort:18019,searches_total:1710715},{version:2,date:"160306",clickbutton_home:3137,clickbutton_side:111,clickhere:0,blur:1637,searches_cohort:24719,searches_total:1820450},{version:2,date:"160307",clickbutton_home:3246,clickbutton_side:126,clickhere:0,blur:1576,searches_cohort:32937,searches_total:2220956},{version:2,date:"160308",clickbutton_home:3376,clickbutton_side:168,clickhere:0,blur:1729,searches_cohort:35062,searches_total:2181247},{version:2,date:"160309",partial:!0,clickbutton_home:2697,clickbutton_side:120,clickhere:0,blur:1354,searches_cohort:40735,searches_total:2174589},{version:3,date:"160309",partial:!0,clickbutton_home:588,clickbutton_side:24,clickhere:461,blur:353,searches_cohort:815,searches_total:2174589},{version:3,date:"160310",clickbutton_home:3385,clickbutton_side:158,clickhere:2076,blur:1797,searches_cohort:9964,searches_total:2142686},{version:3,date:"160311",clickbutton_home:2952,clickbutton_side:131,clickhere:1672,blur:1568,searches_cohort:12422,searches_total:2153460},{version:3,date:"160312",clickbutton_home:2919,clickbutton_side:128,clickhere:1511,blur:1584,searches_cohort:8034,searches_total:1663353},{version:3,date:"160313",clickbutton_home:3048,clickbutton_side:134,clickhere:1615,blur:1698,searches_cohort:8565,searches_total:1739116},{version:3,date:"160314",clickbutton_home:3162,clickbutton_side:140,clickhere:1994,blur:1700,searches_cohort:11616,searches_total:2198432},{version:3,date:"160315",clickbutton_home:3325,clickbutton_side:136,clickhere:2136,blur:1798,searches_cohort:14050,searches_total:2163321},{version:3,date:"160316",partial:!0,clickbutton_home:2907,clickbutton_side:111,clickhere:1977,blur:1558,searches_cohort:22394,searches_total:2174589},{version:4,date:"160316",partial:!0,impressions_home:107526,impressions_side:1405,clickbutton_home:899,clickbutton_side:26,x_home:700,x_side:36,clickhere:461,blur:353,searches_cohort:815,searches_total:2174589},{version:4,date:"160317",impressions_home:356449,impressions_side:4497,clickbutton_home:2902,clickbutton_side:136,x_home:2562,x_side:117,clickhere:0,blur:1540,searches_cohort:8344,searches_total:2067126},{version:4,date:"160318",impressions_home:346531,impressions_side:4179,clickbutton_home:2565,clickbutton_side:112,x_home:2397,x_side:124,clickhere:0,blur:1337,searches_cohort:13246,searches_total:1960891},{version:4,date:"160319",impressions_home:293645,impressions_side:4104,clickbutton_home:2601,clickbutton_side:116,x_home:1969,x_side:113,clickhere:0,blur:1407,searches_cohort:14802,searches_total:1649008},{version:4,date:"160320",impressions_home:304992,impressions_side:4271,clickbutton_home:2607,clickbutton_side:106,x_home:1940,x_side:107,clickhere:0,blur:1382,searches_cohort:20210,searches_total:1778827},{version:4,date:"160321",impressions_home:371491,impressions_side:4358,clickbutton_home:2741,clickbutton_side:94,x_home:2467,x_side:116,clickhere:0,blur:1424,searches_cohort:27230,searches_total:2171017},{version:4,date:"160322",impressions_home:362222,impressions_side:4388,clickbutton_home:2640,clickbutton_side:98,x_home:2364,x_side:107,clickhere:0,blur:1357,searches_cohort:30881,searches_total:2115995},{version:4,date:"160323",partial:!0,impressions_home:271786,impressions_side:3281,clickbutton_home:2044,clickbutton_side:100,x_home:1842,x_side:90,clickhere:0,blur:1076,searches_cohort:32444,searches_total:2085366},{version:5,date:"160323",partial:!0,impressions_home:86123,impressions_side:547,impressions_serp:80031,clickbutton_home:605,clickbutton_side:18,clickbutton_serp:314,x_home:490,x_side:10,x_serp:638,clickhere:0,blur:406,searches_cohort:908,searches_total:2085366},{version:5,date:"160324",impressions_home:339952,impressions_side:2077,impressions_serp:322980,clickbutton_home:2522,clickbutton_side:76,clickbutton_serp:1240,x_home:2190,x_side:52,x_serp:2751,clickhere:0,blur:1672,searches_cohort:7094,searches_total:1987034},{version:5,date:"160325",impressions_home:311401,impressions_side:2037,impressions_serp:290346,clickbutton_home:2553,clickbutton_side:87,clickbutton_serp:904,x_home:2020,x_side:65,x_serp:2139,clickhere:0,blur:1637,searches_cohort:12144,searches_total:1819639},{version:5,date:"160326",impressions_home:272091,impressions_side:1815,impressions_serp:249982,clickbutton_home:2248,clickbutton_side:72,clickbutton_serp:776,x_home:1709,x_side:49,x_serp:1712,clickhere:0,blur:1456,searches_cohort:14399,searches_total:1557983},{version:5,date:"160327",impressions_home:271209,impressions_side:1994,impressions_serp:252045,clickbutton_home:2386,clickbutton_side:77,clickbutton_serp:741,x_home:1843,x_side:46,x_serp:1622,clickhere:0,blur:1473,searches_cohort:18733,searches_total:1589232}],e.firefox=[{version:5,date:"160323",partial:!0,impressions_home:257044,impressions_side:482,impressions_serp:0,clickbutton_home:823,clickbutton_side:15,clickbutton_serp:0,x_home:1113,x_side:20,x_serp:1,clickhere:54,blur:386,searches_cohort:16,searches_total:4917571},{version:5,date:"160323",partial:!0,impressions_home:257044,impressions_side:482,impressions_serp:0,clickbutton_home:823,clickbutton_side:15,clickbutton_serp:0,x_home:1113,x_side:20,x_serp:1,clickhere:54,blur:386,searches_cohort:16,searches_total:4917571},{version:5,date:"160325",impressions_home:1053444,impressions_side:1997,impressions_serp:71,clickbutton_home:3999,clickbutton_side:75,clickbutton_serp:0,x_home:5330,x_side:51,x_serp:4,clickhere:231,blur:1793,searches_cohort:303,searches_total:4521448},{version:5,date:"160326",impressions_home:927662,impressions_side:1915,impressions_serp:137,clickbutton_home:3567,clickbutton_side:84,clickbutton_serp:2,x_home:4683,x_side:69,x_serp:1,clickhere:190,blur:1582,searches_cohort:287,searches_total:3888845},{version:5,date:"160327",impressions_home:924259,impressions_side:1796,impressions_serp:38,clickbutton_home:3689,clickbutton_side:68,clickbutton_serp:0,x_home:4683,x_side:57,x_serp:0,clickhere:219,blur:1675,searches_cohort:259,searches_total:3924367}],e.safari=[{version:5,date:"160323",partial:!0,impressions_home:66189,impressions_side:147,impressions_serp:0,clickbutton_home:155,clickbutton_side:4,clickbutton_serp:0,x_home:240,x_side:6,x_serp:0,clickhere:0,blur:63,searches_cohort:4,searches_total:1135445},{version:5,date:"160324",impressions_home:237586,impressions_side:492,impressions_serp:29,clickbutton_home:543,clickbutton_side:14,clickbutton_serp:0,x_home:818,x_side:22,x_serp:2,clickhere:0,blur:218,searches_cohort:47,searches_total:1081560},{version:5,date:"160325",impressions_home:229782,impressions_side:535,impressions_serp:18,clickbutton_home:495,clickbutton_side:12,clickbutton_serp:0,x_home:848,x_side:5,x_serp:0,clickhere:0,blur:221,searches_cohort:144,searches_total:1071316},{version:5,date:"160326",impressions_home:204429,impressions_side:525,impressions_serp:11,clickbutton_home:436,clickbutton_side:15,clickbutton_serp:0,x_home:757,x_side:18,x_serp:0,clickhere:0,blur:171,searches_cohort:116,searches_total:954729},{version:5,date:"160327",impressions_home:204367,impressions_side:504,impressions_serp:19,clickbutton_home:505,clickbutton_side:15,clickbutton_serp:0,x_home:745,x_side:14,x_serp:0,clickhere:0,blur:217,searches_cohort:93,searches_total:965758}]}),app.factory("fn",function(){return{prettyDate:function(e){return e.substr(2,2)+"/"+e.substr(4,2)},percent:function(e,s,o){return 0>e?'<span class="gray">n/a</span>':s?(null==o&&(o=2),(e/s*100).toFixed(o)+"%"):""},ratio:function(e,s){if(null==s)return"";var o=(e/s).toFixed(2),c=o>=1?"good":"bad";return'<span class="'+c+'">'+o+"</span>"}}});