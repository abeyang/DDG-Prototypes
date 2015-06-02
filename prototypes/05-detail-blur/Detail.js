app.controller('DetailController', function($scope, ui) {
	ui.init('Movies with Robert Downy Jr', 'Movies', false);
	$scope.ui = ui;

	$scope.movies = [
		{
			uid: 'chef',
			name: 'Chef',
			director: 'Jon Favreau'
		},
		{
			uid: 'ironman',
			name: 'Iron Man 3',
			director: 'Shane Black'
		},
		{
			uid: 'holmes',
			name: 'Sherlock Holmes',
			director: 'Guy Ritchie'
		},
		{
			uid: 'wonderboys',
			name: 'Wonder Boys',
			director: 'Curtis Hanson'
		},
		{
			uid: 'dreams',
			name: 'In Dreams',
			director: 'Neil Jordan'
		},
		{
			uid: 'minorityreport',
			name: 'Minority Report',
			director: 'Steven Spielberg'
		},
		{
			uid: 'lastsamurai',
			name: 'Last Samurai',
			director: 'Edward Zwick'
		}
	];

	$scope.selectedid = 0;

	$scope.updateSelected = function(id) {
		$scope.selectedid = id;
	}

});