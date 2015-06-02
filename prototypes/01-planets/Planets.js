app.controller('PlanetsController', function($scope, ui) {
	ui.init('planets', 'Celestial Bodies', false);
	$scope.ui = ui;

	$scope.planets = [
		{
			name: 'sun',
			type: 'Star',
			expand: 0
		},
		{
			name: 'mercury',
			type: 'Planet',
			expand: 0
		},
		{
			name: 'venus',
			type: 'Planet',
			expand: 0
		},
		{
			name: 'earth',
			type: 'Planet',
			expand: 0
		},
		{
			name: 'moon',
			type: 'Satellite',
			expand: 0
		},
		{
			name: 'mars',
			type: 'Planet',
			expand: 0
		},
	];

	$scope.info = [
		{name: 'Surface Area', info: '177.7 million sq miles'},
		{name: 'Radius', info: '3,760 miles'},
		{name: 'Length of Day', info: '116d 18h 0m'},
		{name: 'Mass', info: '4.867E24 kg'},
		{name: 'Distance from Sun', info: '67,240,000 miles'},
		{name: 'Orbital Period', info: '225 days'}
	];

});