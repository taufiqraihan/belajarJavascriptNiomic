//Perintah Concat
//Mengenal perintah CONCAT Untuk Menggabungkan Beberapa ARRAY
function panggilConcat(){
	var kota = ['bandung','palembang','jakarta','lampung'];
	var kabupaten = ['sumedang','serang','jepara','kediri'];
	
	var hasil = kota.concat(kabupaten);
	return hasil
}
console.log(panggilConcat());