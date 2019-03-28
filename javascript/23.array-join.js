//Perintah Join
//Mengenal perintah JOIN Untuk Merubah Data Array Menjadi String
function panggilJoin(){
	var kota = ['bandung','palembang','jakarta','lampung'];
	console.log(kota);
	
	var result = kota.join(',');
	return result ;
}
console.log(panggilJoin());