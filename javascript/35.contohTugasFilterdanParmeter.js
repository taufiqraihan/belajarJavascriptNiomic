//Contoh Tugas Filter dan Parameters

//Hallo teman-teman, silahkan untuk membuat satu buah file dengan nama filterParameters.js dan kemudian tuliskan code dibawah ini : 
var arr = [
  {negara: 'Indonesia', benua: 'Asia'},
  {negara: 'Jerman', benua: 'Eropa'},
  {negara: 'Spanyol', benua: 'Eropa'},
  {negara: 'Korea', benua: 'Asia'},
  {negara: 'Portugal', benua: 'Eropa'},
  {negara: 'Amerika Serikat', benua: 'Amerika'},
];

function benuaEropa(arr) {
 var bEropa = arr.filter(function(item) {
   return item.benua === 'Eropa';
 });
 return bEropa;
}



function benuaAsia(arr) {
 var bAsia = arr.filter(function(item) {
   return item.benua === 'Asia';
 });
 return bAsia;
}

console.log(benuaAsia(arr));
console.log("--------------------------------------------");
console.log(benuaEropa(arr));