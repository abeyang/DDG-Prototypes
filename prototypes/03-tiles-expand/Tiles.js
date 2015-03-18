app.controller('TilesController', function($scope, ui) {
	ui.init('weather', 'Weather', false);
	$scope.ui = ui;

	$scope.ui.expandmode = 0;

	$scope.tiles = [
		{
			wide: true,
			expand: false
		},
		{
			wide: false,
			expand: false
		},
		{
			wide: false,
			expand: false
		},
		{
			wide: false,
			expand: false
		},
		{
			wide: false,
			expand: false
		},
		{
			wide: false,
			expand: false
		},
		{
			wide: false,
			expand: false
		},
		{
			wide: false,
			expand: false
		}
	];

});
