//Bilangan Ganjil
/*
Setelah menyelesaikan dan memahami tentang cara mencari Bilangan Ganjil, 
Silahkan Teman-Teman Untuk Mencoba Mencari Bilangan Kelipatan 5, Dari 1 - 50
*/

/*
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
*/

function panggilKelipatan5(){
	var kelipantan5 = [];
	for(var i=1 ;i <51;i++){
		if(i%5 === 0 ){
			kelipantan5.push(i);
		}
	}
			return kelipantan5;
}
console.log(panggilKelipatan5());