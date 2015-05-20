app.controller("HomeCtrl", function($scope){
	$scope.title = "Interior Air Temperature";

	$scope.d3Data = [
        { name: "line1", group: "Fan1", points: [ {time: 0, val: 72}, {time: 1, val: 74}, {time: 2, val: 76}, {time: 3, val: 76}]},
		{ name: "line2", group: "Fan1", points: [ {time: 0, val: 74}, {time: 1, val: 74}, {time: 2, val: 74}, {time: 3, val: 75} ]},
		{ name: "line3", group: "Fan1", points: [ {time: 0, val: 80}, {time: 1, val: 77}, {time: 2, val: 76}, {time: 3, val: 76}]}
      ];
})