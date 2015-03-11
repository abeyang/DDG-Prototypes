/*	
Created by Abe Yang 5/14/2014

	Legend:
	+ mid = MOC id
	+ tid = tag id
*/

// =========================================================================================================
//
// ANGULAR MAGIC
//
// =========================================================================================================

'use strict';

// var app = angular.module('app', ['ngSanitize', 'textAngular', 'flow']);
var app = angular.module('app', []);

// CONTROLLERS

app.controller('PlanetsController', function($scope) {

	$scope.planets = [
		{
			name: 'sun',
			type: 'Star',
			expand: 0,
			area: '',
			radius: '',
			daylength: '',
			mass: '',
			distance: '',
			period: ''
		},
		{
			name: 'mercury',
			type: 'Planet',
			expand: 0,
			area: '',
			radius: '',
			daylength: '',
			mass: '',
			distance: '',
			period: ''
		},
		{
			name: 'venus',
			type: 'Planet',
			expand: 1
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

	$scope.info = {
		area: '177.7 million sq miles',
		radius: '3,760 miles',
		daylength: '116d 18h 0m',
		mass: '4.867E24 kg',
		distance: '67,240,000 miles',
		period: '225 days'
	};

});

// FACTORIES

/*
app.factory('ui', function() {
	return {
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.',
        findById: function(resource, id) {
        	return _.find(resource.list(), function(obj) {
                return obj.id == id;
            });
        },
        findAttrById: function(resource, attr, id) {
        	var obj = this.findById(resource, id);
        	return obj[attr];
        },
        imageLink: function(id) {
        	return 'assets/images/cover_' + id + '.jpg';
        },
        avatarLink: function(id) {
        	return 'assets/images/face_' + id + '.jpg';	
        },
        getDate: function(datetimestr) {
        	return moment(datetimestr).format('ll');
        },
        getTime: function(datetimestr) {
        	return moment(datetimestr).format('h:mm a');
        },
        getDateTime: function(datetimestr) {
        	// return moment(datetimestr).calendar();
        	return this.getDate(datetimestr) + ', ' + this.getTime(datetimestr);
        },
        getMyName: function() {
        	return name;
        },
        toggle: function(item) {
        	// toggles between true and false
        	return (item) ? false : true;
        }
	}
});
*/