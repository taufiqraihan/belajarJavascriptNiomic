//Perulangan dengan forEach
function panggilforEach(){
	var data = ['a','s','d','f','g','h','i'];
	data.forEach(function(item, index, array){
		console.log(item);
		console.log(index);
		console.log(array);
	})
}
panggilforEach();