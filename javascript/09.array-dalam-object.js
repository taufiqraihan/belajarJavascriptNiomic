function panggilObjects(){
	var mobil = {
		type: 'Sedan',
		harga: 2000000000,
		warna: 'Putih',
		tahun: [2001,2002,2003,2004]
	}
	console.log(mobil);
	console.log(mobil.warna);
	console.log(mobil.tahun[1]);
}

panggilObjects()