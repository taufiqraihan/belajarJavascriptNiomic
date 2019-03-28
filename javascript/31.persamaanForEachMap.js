//FOR vs forEach vs MAP
/*
Hallo teman-teman, kita telah belajar bagaimana menuliskan perintah FOR - FOREACH dan MAP. 
Sekarang kita akan belajar melihat  KESAMAAN  dari ketiga perintah tersebut. :
Ketiga perintah tersebut memiliki kesamaan yang digunakan untuk melakukan perulangan dari sebuah data Array.
Pertama silahkan teman-teman membuat sebuah file dengan nama perulangan.js kemudian buatlah sebuah function dengan nama panggilPerulangan() 
kemudian tuliskan code dibawah ini yang menggunakan perintah FOR. 
*/

/* perulangan dengan for
function panggilPerulangan(){
	var datakota =['Jakarta','Balikpapapan','Medan'];
	for (var i = 0; i < datakota.length; i++){
		console.log(datakota[i]);
		console.log(i);
		console.log(datakota);
	}
}
panggilPerulangan();
*/

/*
Setelah menuliskan code diatas silahkan teman-teman menjalankannya dengan cara membuka sebuah terminal, 
kemudian kita jalankan dengan menuliskan perintah node perulangan.js Kemudian kita bisa melihat hasilnya.
Sebelum kita membahas tentang hasil yang tampil di terminal, dari code yang sudah kita tulis di atas tersebut.
Sekarang teman-teman silahkan merubah code diatas menjadi seperti dibawah ini, yang menggunakan perintah forEach
*/

/*perulangan dengan foreach
function penggilPerulangan1(){
	var datakota = ['Jakarta','Balikpapapan','Medan'];
	datakota.forEach((item,index,array)=>{
		console.log(item);
		console.log(index);
		console.log(array);
	});
}
penggilPerulangan1();
*/

//perulangan dengan map
function panggilPerulangan2() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 dataKota.map((item, index, array) => {
   console.log(item);
   console.log(index);
   console.log(array);
 });
}

panggilPerulangan2();

/*
Hasil : Setelah kita mencoba merubah code yang kita tulis menggukan cara penulisan 
dari 3 perintah perulangan diatas yaitu  FOR - FOREACH dan MAP. Maka kita dapat melihat hasilnya yang sama

Ketiga perintah tersebut sama sama melakukan perulangan sebanyak dari panjang array tersebut, dan kemudian kita bisa mendapatkan hasil berupa:
Item dari setiap array. Jakarta - Balikpapan - Medan
index dari setiap array.  0 - 1 - 2     
data array itu sendiri [ 'Jakarta', 'Balikpapan', 'Medan' ] yang dicetak berulang 3x.
*/