'use strict';
app.factory("SampleDataFactory", [function(){
	var temperatures = [
		{ name: "line1", group: "Fan1", points: [ instantiatePoints(100) ]},
		{ name: "line2", group: "Fan1", points: [ instantiatePoints(100) ]},
		{ name: "line3", group: "Fan1", points: [ instantiatePoints(100) ]},
		{ name: "line4", group: "Fan2", points: [ instantiatePoints(100) ]},
		{ name: "line5", group: "Fan2", points: [ instantiatePoints(100) ]},
		{ name: "line6", group: "Fan2", points: [ instantiatePoints(100) ]},
		{ name: "line7", group: "Fan3", points: [ instantiatePoints(100) ]},
		{ name: "line8", group: "Fan3", points: [ instantiatePoints(100) ]},
		{ name: "line9", group: "Fan3", points: [ instantiatePoints(100) ]},
		{ name: "line10", group: "Fan3", points: [ instantiatePoints(100) ]}];

	function instantiatePoints (numPoints){
		//range from 70-80 with intermittent spikes, math.rand 2% change
		//make calls to append points
		var array = [];
		for(var a=0; a<numPoints; a++){
			if(a === 0){
				array[0] = Math.floor(65 + Math.random() * 15);
			}
			else{
				var rand = Math.floor(Math.random()*10);
				array[a] = rand % 2 == 1? array[a-1] + rand : array[a-1] - rand;
			}
		};
		return array;
	}
	console.log('temp ',temperatures);
	return temperatures;
}]);
