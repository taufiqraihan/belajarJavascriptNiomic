function panggilUnshift(){
	var data = ['bandung','palembang','jakarta','lampung'];
	console.log(data);
	
	data.unshift('surabaya' , 'bali');
	return data;
}
console.log(panggilUnshift());