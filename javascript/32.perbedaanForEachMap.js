//FOR vs forEach vs MAP
/*
Hallo teman-teman, kita telah belajar bagaimana menuliskan perintah FOR - FOREACH dan MAP.  
Sekarang kita akan belajar melihat  PERBEDAAN  dari ketiga perintah tersebut. :

1.	FOR : Perintah FOR DAPAT :

a.  Dapat digunakan untuk melakukan perulangan  berdasarkan panjang dari sebuah array. 
		*/
		
		/*
		function panggilPerulangan() {
		 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
		 for (var i = 0; i < dataKota.length; i++) {
		   console.log(item);
		   console.log(index);
		   console.log(array);
		 }
		}
		panggilPerulangan();
		*/
	
		
//b.	Dapat digunakan untuk melakukan perulangan berdasarkan jumlah yang sudah ditentukan 

		/*
		function panggilPerulangan() {
		 for (var i = 0; i < 10; i++) {
		   console.log('putaran ke: ', i);
		 }
		}

		panggilPerulangan();
		*/
		
	//FOR : Perintah TIDAK DAPAT : menghasilkan array baru dengan cara seperti ini : 
		
		/*
		function panggilPerulangan() {
		 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
		 var dataBaru = for (var i = 0; i < dataKota.length; i++) {
		   return dataKota[i]
		 }
		 console.log(dataBaru);
		}

		panggilPerulangan();
		*/

	/*
	Sehingga yang bisa dilakukan adalah memasukkan data baru tersebut menggunakan 
	tambahan perintah PUSH ke dalam variable bertipe array yang sudah dideklarasikan dulu di atasnya. 
	CONTOH :
	*/
	
	/*
	function panggilPerulangan() {
	 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
	 var dataBaru = [];
	 for (var i = 0; i < dataKota.length; i++) {
	   dataBaru.push('Kota: ' + dataKota[i]);
	 }
	 console.log(dataBaru);
	}

	panggilPerulangan();
	*/


	/*
	2. forEach : Perintah forEach DAPAT :
	
	a. Dapat kita gunakan untuk melakukan perulangan berdasarkan panjang dari sebuah array. 
	*/
	
	/*
		function panggilPerulangan() {
		 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
		 dataKota.forEach((item, index, array) => {
		   console.log(item);
		   console.log(index);
		   console.log(array);
		 });
		}

		panggilPerulangan();
	*/	
	
	
	/*
	Perintah forEach TIDAK DAPAT 
		a.Tidak Dapat melakukan perulangan berdasarkan jumlah yang sudah ditentukan, seperti yang bisa dilakukan pada perintah FOR
		b.Tidak Dapat menghasilkan array baru dengan cara seperti ini :
		function panggilPerulangan() {
		 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
		 var dataBaru = dataKota.forEach((item, index, array) => {
		   return 'Kota : ' + item;
		 });
		 console.log(dataBaru);
		}

		panggilPerulangan();
	*/
	
	//Sehingga yang bisa dilakukan adalah memasukkan data baru tersebut menggunakan tambahan perintah PUSH ke dalam variable bertipe array yang sudah dideklarasikan dulu di atasnya. CONTOH :
	/*
	function panggilPerulangan() {
	 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
	 var dataBaru = [];
	 dataKota.forEach((item, index, array) => {
	   return dataBaru.push('Kota : ' + item);
	 });
	 console.log(dataBaru);
	}

	panggilPerulangan();
	*/

