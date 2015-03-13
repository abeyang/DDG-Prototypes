app.controller('PopulationController', function($scope, ui) {
	ui.init('Population of Kazakhstan', 'Nations', false);
	$scope.ui = ui;

	$scope.nations = [
		{
			name: 'Belarus',
			flag: 'by',
			population: '8.23',
			year: 2013,
			expand: 0
		},
		{
			name: 'Kazakhstan',
			flag: 'kz',
			population: '17.04',
			year: 2013,
			expand: 1
		},
		{
			name: 'Moldova',
			flag: 'md',
			population: '3.56',
			year: 2013,
			expand: 0
		},
		{
			name: 'Russia',
			flag: 'ru',
			population: '143.5',
			year: 2013,
			expand: 0
		},
		{
			name: 'Ukraine',
			flag: 'ua',
			population: '45.45',
			year: 2013,
			expand: 0
		}
	];

});
