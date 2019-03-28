// 3 metode penulisan function

// 1.ini metode penulisan lama
function jalanSatu(){
	console.log('jalan satu');
}

//2. ini metode penulisan lama
//penulisan function disarankan dengan const agar data yang didalamnya tidak dapat dirubah
const jalanDua = function(){
	console.log('jalan dua');
}

//3. ini metode penulisan baru
const jalanTiga = ()=>{
	console.log('jalan tiga');
}

jalanSatu();
jalanDua();
jalanTiga();