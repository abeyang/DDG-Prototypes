app.controller('DetailController', function($scope, ui) {
	ui.init('Movies with Robert Downy Jr', 'Movies', false);
	$scope.ui = ui;

	$scope.movies = [
		{
			uid: 'chef',
			name: 'Chef',
			year: '2014',
			director: 'Jon Favreau'
		},
		{
			uid: 'ironman',
			name: 'Iron Man 3',
			year: '2013',
			director: 'Shane Black'
		},
		{
			uid: 'holmes',
			name: 'Sherlock Holmes',
			year: '2009',
			director: 'Guy Ritchie'
		},
		{
			uid: 'wonderboys',
			name: 'Wonder Boys',
			year: '2000',
			director: 'Curtis Hanson'
		},
		{
			uid: 'dreams',
			name: 'In Dreams',
			year: '1999',
			director: 'Neil Jordan'
		},
		{
			uid: 'creation',
			name: 'Creation',
			year: '2010',
			director: 'Jon Amiel'
		},
		{
			uid: 'minorityreport',
			name: 'Minority Report',
			year: '2002',
			director: 'Steven Spielberg'
		},
		{
			uid: 'lastsamurai',
			name: 'Last Samurai',
			year: '2003',
			director: 'Edward Zwick'
		}
	];

	$scope.selectedid = 0;

	$scope.updateSelected = function(id) {
		$scope.selectedid = id;
	}

});