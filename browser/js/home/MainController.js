app.controller("HomeCtrl", function($scope){
	$scope.title = "Interior Air Temperature";

	$scope.d3Data = [
        { name: "line1", group: "Fan1", points: [ {time: 0, val: 72}, {time: 1, val: 74}, {time: 2, val: 76}, {time: 3, val: 76}]},
		{ name: "line2", group: "Fan1", points: [ {time: 0, val: 74}, {time: 1, val: 74}, {time: 2, val: 74}, {time: 3, val: 75} ]},
		{ name: "line3", group: "Fan1", points: [ {time: 0, val: 80}, {time: 1, val: 77}, {time: 2, val: 76}, {time: 3, val: 76}]}
      ];

      $scope.data = [
                 {hour: 1,sales: 54},
                 {hour: 2,sales: 66},
                 {hour: 3,sales: 77},
                 {hour: 4,sales: 70},
                 {hour: 5,sales: 60},
                 {hour: 6,sales: 63},
                 {hour: 7,sales: 55},
                 {hour: 8,sales: 47},
                 {hour: 9,sales: 55},
                 {hour: 10,sales: 30},
                 {hour: 11,sales: 54},
                 {hour: 12,sales: 66},
                 {hour: 13,sales: 77},
                 {hour: 14,sales: 70},
                 {hour: 15,sales: 60},
                 {hour: 16,sales: 63},
                 {hour: 17,sales: 55},
                 {hour: 18,sales: 47},
                 {hour: 19,sales: 55},
                 {hour: 20,sales: 30},
                 {hour: 21,sales: 54},
                 {hour: 22,sales: 66},
                 {hour: 23,sales: 77},
                 {hour: 24,sales: 70},
      ];

    $scope.pointCloud= [
	    { zone: "zone1", group: "Fan1", time: 0, val: 72},
	    { zone: "zone1", group: "Fan1", time: 1, val: 73},
	    { zone: "zone1", group: "Fan1", time: 2, val: 74},
	    { zone: "zone1", group: "Fan1", time: 3, val: 74},
	    { zone: "zone1", group: "Fan1", time: 4, val: 74},
	    { zone: "zone1", group: "Fan1", time: 5, val: 76},
	    { zone: "zone1", group: "Fan1", time: 6, val: 76},
	    { zone: "zone1", group: "Fan1", time: 7, val: 76},
	    { zone: "zone1", group: "Fan1", time: 8, val: 76},
	    { zone: "zone1", group: "Fan1", time: 9, val: 76},
	    { zone: "zone2", group: "Fan1", time: 0, val: 76},
	    { zone: "zone2", group: "Fan1", time: 1, val: 76},
	    { zone: "zone2", group: "Fan1", time: 2, val: 78},
	    { zone: "zone2", group: "Fan1", time: 3, val: 78},
	    { zone: "zone2", group: "Fan1", time: 4, val: 78},
	    { zone: "zone2", group: "Fan1", time: 5, val: 79},
	    { zone: "zone2", group: "Fan1", time: 6, val: 79},
	    { zone: "zone2", group: "Fan1", time: 7, val: 79},
	    { zone: "zone2", group: "Fan1", time: 8, val: 77},
	    { zone: "zone2", group: "Fan1", time: 9, val: 77},
	    { zone: "zone3", group: "Fan2", time: 0, val: 77},
	    { zone: "zone3", group: "Fan2", time: 1, val: 77},
	    { zone: "zone3", group: "Fan2", time: 2, val: 76},
	    { zone: "zone3", group: "Fan2", time: 3, val: 76},
	    { zone: "zone3", group: "Fan2", time: 4, val: 75},
	    { zone: "zone3", group: "Fan2", time: 5, val: 73},
	    { zone: "zone3", group: "Fan2", time: 6, val: 73},
	    { zone: "zone3", group: "Fan2", time: 7, val: 72},
	    { zone: "zone3", group: "Fan2", time: 8, val: 72},
	    { zone: "zone3", group: "Fan2", time: 9, val: 72}
	];

})