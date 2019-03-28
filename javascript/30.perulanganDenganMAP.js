//Perulangan Menggunakan Perintah MAP
/*
Hallo teman-teman sekarang kita akan belajar mengenal perintah MAP di Javascript. 
Perintah / Fungsi / Method MAP ini berfungsi mirip seperti ForEach. 
Perintah MAP juga digunakan untuk melakukan perulangan berdasarkan jumlah data array yang menjadi acuan dalam perulangan tersebut.
Di pembelajaran ini kita belum akan membahas tentang perbedaan antara MAP - forEach dan juga FOR.  
Sekarang kita akan berkenalan terlebih dahulu untuk cara penulisan perintah MAP.
Sekarang kita akan menuliskan sebuah function dengan nama panggilPerintahMap 
dan kemudian di dalamnya kita akan membuat sebuah variable yang akan kita gunakan sebagai acuan dalam penggunaan perintah MAP
*/

//Penulisan 1
/*
function panggilPerintahMap() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 dataKota.map((item, index, array) => {
   console.log(item);
   console.log(index);
   console.log(array);
 });
}
panggilPerintahMap();
*/

//Penulisan 2
function panggilPerintahMap() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 dataKota.map(function(item, index, array){
   console.log(item);
   console.log(index);
   console.log(array);
 });
}

panggilPerintahMap();