var array1 = ['open', 'enclosed', 'outer', '\xa0', '\xa0', 'living', 'projective', '\xa0', 'lack of', '\xa0', '\xa0', 'deep', '\xa0', '\xa0', 'euclidean', '\xa0', '\xa0', 'blank', '\xa0', 'parking', '\xa0', '\xa0', '\xa0', '\xa0', 'lost in', 'staring into', 'watch this', '\xa0', '\xa0', '\xa0', 'catcher', '\xa0', 'buncher', 'three-dimensional', 'hair', '\xa0', 'null', '\xa0'];
var array2 = [' ', ' ', ' ', 'suit', 'age', ' ', ' ', 'capsule', ' ', 'band', 'heater', ' ', 'odyssey', 'salesman', ' ', 'cadet', 'station', ' ', 'out', ' ', 'invaders', 'walk', 'time continuum', 'bar', ' ', ' ', ' ', 'curve', 'lattice', 'opera', ' ', 'sickness', ' ', ' ', ' ', 'race', ' '];
var counter1 = 0;
var counter2 = 0
function changeNews() {
    div.fadeIn(3000).delay(3000).fadeOut(3000, function() {
        changeNews();
    }).text(array1[counter1++]);
}

$(document).ready(function(){
	//when mouse enters "space" div, cue interaction
	$("#original").mouseover(function(){
		//prints test to web console so you can see if it's working
		console.log('heyy', array1[counter1]);
		//the left column starts calling elements of array1 one by one
		$(".left").text(array1[counter1]);
		counter1 += 1;
		//the right column starts callling elements of array2 one by one
		$(".right").text(array2[counter2]);
		counter2 += 1;
		//if array1 completes, start over (there are 37 elements in array 1
		if(counter1 == 38){
			counter1 = 0;
		};
		//if array1 completes, start over (there are 37 elements in array 1

		if(counter2 == 38){
			counter2 = 0;
		};


	});
	
	});
