app.controller("HomeCtrl", function($scope){
	$scope.title = "Interior Air Temperature";

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