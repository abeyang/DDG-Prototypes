app.controller("UserPageController",function($scope,fn){$scope.fn=fn,$scope.users=[{username:"GuiltyDolphin",hasInfo:!0,avatar:"guiltydolphin.png"},{username:"AnthonyNeace",hasInfo:!0,avatar:"anthonyneace.jpg"},{username:"riqpe",hasInfo:!0,avatar:"riqpe.png"},{username:"pjhampton",hasInfo:!0,avatar:"pjhampton.jpg"},{username:"mintsoft",hasInfo:!0,avatar:"mintsoft.png"},{username:"jagtalon",hasInfo:!0,avatar:"jagtalon.jpeg"},{username:"moollaza",hasInfo:!0,avatar:"moollaza.jpeg"},{username:"mattr555",hasInfo:!0,avatar:"mattr555.jpeg"},{username:"MrChrisW",hasInfo:!0,avatar:"MrChrisW.jpeg"}],$scope.iaSort=function(e){var s=0;switch(e.dev_milestone){case"live":s=50;break;case"complete":s=200;break;case"testing":s=400;break;case"development":s=600;break;case"planning":s=800;break;default:s=1e4}return s=s-Number(e.open_prs)-Number(e.open_issues)};var initial=!1;$scope.filtertopic="",$scope.othertype="",$scope.setFilterTopic=function(e){$scope.filtertopic=$scope.filtertopic==e?"":e,$scope.othertype=""},$scope.setOtherType=function(e){$scope.othertype=$scope.othertype==e?"":e,$scope.filtertopic=""},$scope.showUser=function(){$scope.count={},$scope.topics=[],!initial&&window.location.hash&&($scope.username=window.location.hash.replace(/#\//,"")),initial=!0,window.location.hash="#/"+$scope.username,$scope.user=eval($scope.username),$scope.ias=_.filter(ias,function(e){return _.some(e.developer,function(e){return e.name==$scope.username})||e.maintainer&&e.maintainer.github==$scope.username&&!("ghosted"==e.dev_milestone||"deprecated"==e.dev_milestone)}),$scope.ias_developed=_.filter(ias,function(e){return _.some(e.developer,function(e){return e.name==$scope.username})}),$scope.ias_developed_reduced=_.filter($scope.ias_developed,function(e){return"complete"===e.dev_milestone||"live"===e.dev_milestone}),$scope.ias_maintained=_.filter(ias,function(e){return e.maintainer&&e.maintainer.github==$scope.username&&!("ghosted"==e.dev_milestone||"deprecated"==e.dev_milestone)}),$scope.ias_developed_only=_.filter(ias,function(e){return _.some(e.developer,function(e){return e.name==$scope.username})&&!(e.maintainer&&e.maintainer.github==$scope.username)&&!("ghosted"==e.dev_milestone||"deprecated"==e.dev_milestone)}),$scope.issues_open=_.filter($scope.user.issues,function(e){return"open"===e.state&&e.body.match(/https:\/\/duck\.co\/ia\/view\/(.*?)/)}),$scope.prs=_.filter($scope.user.issues,function(e){return null!=e.pull_request}),$scope.prs_open=_.filter($scope.prs,function(e){return"open"==e.state}),$scope.prs_open_reviewed=_.filter($scope.prs,function(e){return"open"==e.state&&e.assignee&&e.assignee.login==$scope.username});var getIA=function(e){var s=e.body.match(/https:\/\/duck\.co\/ia\/view\/([_a-zA-Z]+)/);return s?_.extend(e,{ia_page:s[1].replace(/_/g," ").replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}):e};$scope.prs_open_reviewed_2=_.map(_.filter($scope.prs,function(e){return/https:\/\/duck\.co\/ia\/view\//.test(e.body)&&"open"==e.state&&e.assignee&&e.assignee.login==$scope.username}),getIA),$scope.prs_open_developed=_.filter($scope.prs,function(e){return"open"==e.state&&e.user&&e.user.login==$scope.username}),$scope.prs_open_developed_2=_.map(_.filter($scope.prs,function(e){return/https:\/\/duck\.co\/ia\/view\//.test(e.body)&&"open"==e.state&&e.user&&e.user.login==$scope.username}),getIA);var topics={};_.each($scope.ias,function(e){e.topic&&_.each(e.topic,function(e){topics[e]?++topics[e]:topics[e]=1})}),_.each(topics,function(e,s){var o={topic:"",amount:0};o.topic=s,o.amount=e,$scope.topics.push(o)}),$scope.setFilterTopic(""),$scope.count.all_ias=_.size($scope.ias),$scope.count.maintained_ias=_.size($scope.ias_maintained),$scope.count.developed_ias=_.size($scope.ias_developed),$scope.count.developed_only_ias=_.size($scope.ias_developed_only),$scope.count.open_issues=_.size($scope.issues_open),$scope.count.closed_issues=_.size($scope.user.issues)-$scope.count.open_issues,$scope.count.open_prs=_.size($scope.prs_open),$scope.count.reviewed_prs=_.size($scope.prs_open_reviewed),$scope.count.developed_prs=_.size($scope.prs_open_developed),$scope.count.closed_prs=_.size($scope.prs)-$scope.count.open_prs,$scope.count.prs_ias=_.size(_.filter($scope.ias,function(e){return e.open_prs>0||e.open_issues>0})),$scope.count.progress_ias=_.size(_.filter($scope.ias,function(e){return"live"!=e.dev_milestone}));var maxtopic=_.max($scope.topics,function(e){return e.amount});$scope.count.max_topics=maxtopic.amount,$scope.show_ias=$scope.count.maintained_ias?$scope.ias_maintained:$scope.ias_developed_only},$scope.username=$scope.users[0].username,$scope.showUser(),$scope.show_issues=""}),app.filter("filterIA",function(){return function(e,s,o,n){return""==s&&""==o?e:""!=s?_.filter(e,function(e){return _.contains(e.topic,s)}):"prs"==o?_.filter(e,function(e){return e.open_prs>0||e.open_issues>0}):"maintained"==o?_.filter(e,function(e){return e.maintainer&&e.maintainer.github==n}):"developed"==o?_.filter(e,function(e){return _.some(e.developer,function(e){return e.name==n})}):"progress"==o?_.filter(e,function(e){return"live"!=e.dev_milestone}):void 0}}),app.factory("fn",function(){return{findByAttr:function(e,s,o){return _.find(e,function(e){return e[s]==o})},getAvatar:function(e,s,o){var n="";if(s){n='<div class="avatar '+o+'" title="'+s+'"';var t=this.findByAttr(e,"username",s);n+=t&&t.avatar?'><img src="avatars/'+t.avatar+'" /></div>':"><span>"+s.charAt(0)+"</span></div>"}return n},getDevs:function(e){var s="";return _.each(e.developer,function(e){s+="<span>"+e.name+" </span>"}),s},getDevsAvatars:function(e,s,o){var n="";return _.each(e.developer,function(e){o!=e.name&&(n+=this.getAvatar(s,e.name,""))},this),n},getTopics:function(e){var s="";return _.each(e.topic,function(e){s+="<span>"+e+" </span>"}),s},getLabels:function(e){var s="";return _.each(e.labels,function(e){s+="<span>"+e.name+"; </span>"}),s},getFromNow:function(e){return moment(e).fromNow()},getFromNowShort:function(e){var s=moment(e).fromNow(!0),o=s.split(" ");return s="a"==o[0]?1:o[0],s+o[1][0]},getFromNowShortDays:function(e){var s=new Date,o=new Date(e),n=s.getTime()-o.getTime();return Math.round(n/864e5)+"d"}}});