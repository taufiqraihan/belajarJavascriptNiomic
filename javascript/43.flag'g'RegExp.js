//Flag "g" - RegExp (Regular Expression) 
/*
Regular Expression atau sering disebut Regexp adalah memiliki sebuah flags atau lebih mudah dalam kita memahaminya kita sebut sebagai “TANDA”, dimana flags tersebut nantinya akan memberikan effect / hasil yang berbeda pada setiap pencarian antara yang menggunakan flags dan yang tidak.
Sekarang kita akan mencoba membuat sebuah function panggilRegexp() yang didalamnya kita akan menuliskan code RegExp didalamnya.
Kita akan mencoba melakukan PENCOCOKAN data pada sebuah variable string, di dalam Regexp untuk melakukan PENCOCOKAN adalah menggunakan perintah match()
Di dalamnya kita akan memasukkan flag “g”, dimana flag “g” ini sendiri berfungsi sifatnya GLOBAL yaitu untuk melakukan pencarian data yang sama di semua data STRING yang dijadikan acuan kita untuk mencocokan data tersebut
*/

function panggilRegExp(){
	let str = 'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz';
	
	console.log(str.match(/c/g));
}
panggilRegExp();
/*
Ketika kita menjalankan function yang kita buat di atas, maka akan menghasilkan seperti dibawah ini : 
[ 'c', 'c' ]
*/




// Sekarang kita bisa membandingkannya dengan menghilangkan flag “g” didalamnya, seperti dibawah ini 

/*
function panggilRegexp() {
 let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";

 console.log(str.match(/c/))
}

panggilRegexp()
*/

/*

Maka ketika function tersebut dijalankan hanya akan berhenti ketika keyword yang dicari sudah ketemu. 
[ 'c',
 index: 2,

 input: 'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz' ]
*/