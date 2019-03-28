//Bilangan Kelipatan
/*
Sebelum mempelajari materi ini, 
pastikan teman-teman sudah Mencoba Mencari Bilangan Kelipatan 5, Dari 1 - 50
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