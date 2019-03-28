function panggilSplice(){
	var kota = ['jakarta' , 'medan' , 'malang' , 'palembang'];
	console.log(kota);
	
	kota.splice(2,0,'bogor');
	return kota;
}
console.log(panggilSplice())