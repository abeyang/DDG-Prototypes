app.controller('CheatsheetController', function($scope, ui) {
	ui.init('cheatsheet', 'Cheatsheet', false);
	$scope.ui = ui;

	$scope.emacs = [
		{
			name: 'Quickies',
			commands: [
				{
					key: "<code>C-x</code> <code>C-f</code>",
					desc: "Find file"	
				},
				{
					key: "<code>C-x</code> <code>C-s</code>",
					desc: "Save file"	
				},
				{
					key: "<code>C-x</code> <code>C-c</code>",
					desc: "Exit Emacs"	
				}
			]
		},
		{
			name: 'Cursor Movement',
			commands: [
				{
					key: "<code>C-x</code> <code>C-f</code>",
					desc: "Find file"	
				},
				{
					key: "<code>C-x</code> <code>C-s</code>",
					desc: "Save file"	
				},
				{
					key: "<code>C-x</code> <code>C-c</code>",
					desc: "Exit Emacs"	
				}
			]
		},
		{
			name: 'Deletion',
			commands: [
				{
					key: "<code>C-x</code> <code>C-f</code>",
					desc: "Find file"	
				},
				{
					key: "<code>C-x</code> <code>C-s</code>",
					desc: "Save file"	
				},
				{
					key: "<code>C-x</code> <code>C-c</code>",
					desc: "Exit Emacs"	
				}
			]
		}
	];

	$scope.cheats = $scope.emacs;

});