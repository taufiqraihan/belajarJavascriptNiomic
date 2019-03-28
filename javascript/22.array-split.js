//Perintah Split
//Mengenal perintah SPLIT Untuk Merubah Data String Menjadi Array
function panggilSplit(){
	var kalimat = 'kita sedang belajar js';
	console.log(kalimat);
	
	var result = kalimat.split(' ');
	return result;
}
console.log(panggilSplit());