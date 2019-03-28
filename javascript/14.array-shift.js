function panggilShift(){
  var kota = ['jakarta' , 'bandung' , 'surabaya' , 'makasar'];
  console.log(kota);
  console.log('=========');
  
 // kota = kota.shift();
 
 var kota2 = kota.shift();
 console.log(kota2);
  
  return kota;
}

console.log(panggilShift());