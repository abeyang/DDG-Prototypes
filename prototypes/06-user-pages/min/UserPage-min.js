app.controller("UserPageController",function($scope,fn){$scope.fn=fn,$scope.users=[{username:"GuiltyDolphin",hasInfo:!0,avatar:"guiltydolphin.png"},{username:"AnthonyNeace",hasInfo:!0,avatar:"anthonyneace.jpg"},{username:"riqpe",hasInfo:!0,avatar:"riqpe.png"},{username:"pjhampton",hasInfo:!0,avatar:"pjhampton.jpg"},{username:"mintsoft",hasInfo:!0,avatar:"mintsoft.png"}],$scope.count={},$scope.topics=[],$scope.showUser=function(){$scope.user=eval($scope.username),$scope.ias=_.filter(ias,function(e){return _.some(e.developer,function(e){return e.name==$scope.username})||e.maintainer&&e.maintainer.github==$scope.username}),$scope.ias_developed=_.filter(ias,function(e){return _.some(e.developer,function(e){return e.name==$scope.username})}),$scope.ias_maintained=_.filter(ias,function(e){return e.maintainer&&e.maintainer.github==$scope.username}),$scope.issues_open=_.map(_.filter($scope.user.issues,function(e){return"open"==e.state}),function(e){var s=e.body.match(/\(https:\/\/duck\.co\/ia\/view\/.*?\)/);return s?_.extend(e,{ia_page:s[0]}):e}),$scope.prs=_.filter($scope.user.issues,function(e){return null!=e.pull_request}),$scope.prs_open=_.filter($scope.prs,function(e){return"open"==e.state});var topics={};_.each($scope.ias,function(e){e.topic&&_.each(e.topic,function(e){topics[e]?++topics[e]:topics[e]=1})}),_.each(topics,function(e,s){var n={topic:"",amount:0};n.topic=s,n.amount=e,$scope.topics.push(n)}),$scope.count.all_ias=_.size($scope.ias),$scope.count.open_issues=_.size($scope.issues_open),$scope.count.closed_issues=_.size($scope.user.issues)-$scope.count.open_issues,$scope.count.open_prs=_.size($scope.prs_open),$scope.count.closed_prs=_.size($scope.prs)-$scope.count.open_prs},$scope.username=$scope.users[0].username,$scope.showUser(),$scope.show_issues=""}),app.factory("fn",function(){return{findByAttr:function(e,s,n){return _.find(e,function(e){return e[s]==n})},getAvatar:function(e,s,n){var o="";if(s){o='<div class="avatar '+n+'" title="'+s+'"';var t=this.findByAttr(e,"username",s);o+=t&&t.avatar?'><img src="avatars/'+t.avatar+'" /></div>':"><span>"+s.charAt(0)+"</span></div>"}return o},getDevs:function(e){var s="";return _.each(e.developer,function(e){s+="<span>"+e.name+" </span>"}),s},getDevsAvatars:function(e,s){var n="";return _.each(e.developer,function(e){n+=this.getAvatar(s,e.name,"")},this),n},getTopics:function(e){var s="";return _.each(e.topic,function(e){s+="<span>"+e+" </span>"}),s},getLabels:function(e){var s="";return _.each(e.labels,function(e){s+="<span>"+e.name+"; </span>"}),s}}});