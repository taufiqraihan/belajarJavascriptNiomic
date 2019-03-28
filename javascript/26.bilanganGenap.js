//Bilangan Genap

/*
function panggilGenap(){
	var genap = [];
	for(var i=1 ;i <11;i++){
		if(i%2 === 0 ){
			genap.push(i);
		}
	}
			return genap;
}
console.log(panggilGenap());
*/

/*
Setelah menyelesaikan dan memahami tentang cara mencari Bilangan Genap, 
Silahkan Teman-Teman Untuk Mencoba Mencari Bilangan GANJIL, 
Dari 1 - 30, yang nantinya akan menghasilkan seperti ini : 
[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29 ]
*/

function panggilGanjil(){
	var ganjil = [];
	for(var i=1 ;i <31;i++){
		if(i%2 === 1 ){
			ganjil.push(i);
		}
	}
			return ganjil;
}
console.log(panggilGanjil());
