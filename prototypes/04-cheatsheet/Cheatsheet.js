app.controller('CheatsheetController', function($scope, ui) {
	ui.init('cheatsheet', 'Cheatsheet', false);
	ui.color = 'whitegray';
	ui.inlineblock = 'inlineblock';
	ui.equalsizecols = false;
	ui.tile = '';
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
					key: "<code>C-f</code> / <code>C-b</code>",
					desc: "Move forward/backward by character"
				},
				{
					key: "<code>M-f</code> / <code>M-b</code>",
					desc: "Move forward/backward by word"
				},
				{
					key: "<code>C-n</code> / <code>C-p</code>",
					desc: "Move forward/backward by line"
				},
				{
					key: "<code>M-e</code> / <code>M-a</code>",
					desc: "Move forward/backward by sentence"
				},
				{
					key: "<code>C-M-f</code> / <code>C-M-b</code>",
					desc: "Move forward/backward by expression"
				},
				{
					key: "<code>M-}</code> / <code>M-{</code>",
					desc: "Move forward/backward by paragraph"
				},
				{
					key: "<code>C-a</code> / <code>C-e</code>",
					desc: "Move to beginning/end of line"
				},
				{
					key: "<code>M-<</code> / <code>M-></code>",
					desc: "Move to beginning/end of buffer"
				},
			]
		},
		{
			name: 'Deletion',
			commands: [
				{
					key: "<code>C-d</code> / <code>DEL</code>",
					desc: "Delete forward/backward by character"
				},
				{
					key: "<code>M-D</code> / <code>M-DEL</code>",
					desc: "Delete forward/backward by word"
				},
				{
					key: "<code>C-K</code> / <code>C-SPC</code> <code>C-a</code> <code>C-w</code>",
					desc: "Delete forward/backward by line"
				},
				{
					key: "<code>M-k</code> / <code>C-x</code> <code>DEL</code>",
					desc: "Delete forward/backward by sentence"
				},
				{
					key: "<code>C-M-k</code> / <code>C-M-DEL</code>",
					desc: "Delete forward/backward by expression"
				}
			]
		},
		{
			name: 'Scrolling and Windows',
			commands: [
				{
					key: "<code>C-v</code>", 
					desc: "Page Down"
				},
				{
					key: "<code>M-v</code>", 
					desc: "Page Up"
				},
				{
					key: "<code>C-M-v</code>", 
					desc: "Page Down other window"
				},
				{
					key: "<code>C-x</code> <code>1</code>", 
					desc: "Make current window only window"
				},
				{
					key: "<code>C-x</code> <code>2</code>", 
					desc: "Split window vertically"
				},
				{
					key: "<code>C-x</code> <code>3</code>", 
					desc: "Split window horizontally"
				},
				{
					key: "<code>C-x</code> <code>^</code>", 
					desc: "Grow window vertically"
				},
				{
					key: "<code>C-x</code> <code>o</code>", 
					desc: "Switch to next window"
				},
				{
					key: "<code>C-x</code> <code>0</code>", 
					desc: "Close current window"
				}
			]
		},
		{
			name: 'Files and Buffers',
			commands: [
				{
					key: "<code>C-x</code> <code>C-f</code>", 
					desc: "Find file (or create if not existing)"
				},
				{
					key: "<code>C-x</code> <code>C-s</code>", 
					desc: "Save file"
				},
				{
					key: "<code>C-x</code> <code>C-w</code>", 
					desc: "Write file"
				},
				{
					key: "<code>C-x</code> <code>s</code>", 
					desc: "Save modified buffers"
				},
				{
					key: "<code>C-x</code> <code>b</code>", 
					desc: "Select buffer"
				},
				{
					key: "<code>C-x</code> <code>C-b</code>", 
					desc: "List buffers"
				},
				{
					key: "<code>C-x</code> <code>k</code>", 
					desc: "Kill buffer"
				}
			]
		},
		{
			name: 'Cutting and Pasting',
			commands: [
				{
					key: "<code>C-SPC</code>",
					desc: "Set mark"
				},
				{
					key: "<code>C-w</code>",
					desc: "Cut (after setting mark and moving to end point)"
				},
				{
					key: "<code>M-w</code>",
					desc: "Copy (after setting mark and moving to end point)"
				},
				{
					key: "<code>C-y</code>",
					desc: "Yank (paste) most recently killed (cut or copied)"
				},
				{
					key: "<code>M-y</code>",
					desc: "Yank next most recently killed"
				}
			]
		},
		{
			name: 'Searching and Replacing',
			commands: [
				{
					key: "<code>C-s</code>",
					desc: "Incremental search forward"
				},
				{
					key: "<code>C-r</code>",
					desc: "Incremental search backward"
				},
				{
					key: "<code>C-M-s</code>",
					desc: "Regexp search forward"
				},
				{
					key: "<code>C-M-r</code>",
					desc: "Regexp search backward"
				},
				{
					key: "<code>M-x</code> <code>replace-string</code> <code>RET</code>",
					desc: "String replace from here to end of buffer"
				},
				{
					key: "<code>M-x</code> <code>query-replace</code> <code>RET</code>",
					desc: "String replace from here to end of buffer, querying for each occurrence"
				},
				{
					key: "<code>M-x</code> <code>grep</code> <code>RET</code>",
					desc: "Prompts for a grep command, shows hits in a buffer"
				},
				{
					key: "<code>C-x</code> <code>`</code>",
					desc: "Visit next grep hit"
				}
			]
		},
		{
			name: 'Help',
			commands: [
				{
					key: "<code>C-h</code> <code>k</code>",
					desc: "Show command documentation"
				},
				{
					key: "<code>C-h</code> <code>a</code>",
					desc: "Command apropos"
				},
				{
					key: "<code>C-h</code> <code>c</code>",
					desc: "Show command name on message line"
				},
				{
					key: "<code>C-h</code> <code>f</code>",
					desc: "Describe function"
				},
				{
					key: "<code>C-h</code> <code>i</code>",
					desc: "Info browser"
				}
			]
		}
	];

	$scope.cheats = $scope.emacs;
	$scope.full = $scope.cheats.length;
	$scope.half = Math.floor($scope.full / 2);

});