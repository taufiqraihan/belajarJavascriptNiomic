//Regular Expression ( RegExp )
/*
Regular Expression atau sering disebut Regexp adalah method atau fungsi yang sering digunakan untuk mencari dan atau mengganti pada sebuah data string.

Sekarang kita akan mencoba membuat sebuah function panggilRegexp() yang didalamnya kita akan menuliskan code RegExp didalamnya.
Kita akan mencoba melakukan pencarian data pada sebuah variable string, di dalam Regexp untuk melakukan pencarian adalah menggunakan perintah search()
*/

function panggilRegExp(){
	let str = 'abcdefghijklmnopqrstuvwxyz';
	
	return str.search(/a/);
}
console.log(panggilRegExp())

/*
Pada contoh diatas, kita sudah melakukan pencarian sebuah huruf “a” pada sebuah variable str yang isinya adalah data string, 
maka ketika function yang sudah kita buat dijalankan akan menghasilnya : 0, artinya huruf “a” yang kita cari ada pada variable str tersebut dan berada pada index ke 0.
Teman-teman silahkan untuk melakukan percobaan pencarian dengan mengganti huruf “a” di dalam perintah tersebut, Untuk melihat hasil yang berbeda dari setiap pencarian.
*/