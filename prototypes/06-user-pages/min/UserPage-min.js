app.controller("UserPageController",function($scope,ui){ui.init("","",!1),$scope.ui=ui,$scope.users=[{username:"GuiltyDolphin"},{username:"AnthonyNeace"},{username:"riqpe"}],$scope.username=$scope.users[0].username,$scope.showUserInfo=function(){$scope.user=eval($scope.username),$scope.ias=_.filter(ias,function(e){return _.some(e.developer,function(e){return e.name==$scope.username})}),$scope.ias_maintained=_.filter(ias,function(e){var n=!1;return e.maintainer&&e.maintainer.github==$scope.username&&(n=!0),n})},$scope.showUserInfo()});