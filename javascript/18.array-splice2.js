function panggilSplice(){
	var kota = ['jakarta' , 'medan' , 'malang' , 'palembang'];
	console.log(kota);
	
	kota.splice(2,1);
	return kota;
}
console.log(panggilSplice())