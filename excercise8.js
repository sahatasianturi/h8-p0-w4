function tukarBesarKecil(kalimat) {
  var ubahKalimat =''
  for(i=0; i<kalimat.length; i++){
      var ubahHuruf= kalimat[i] 
  if (ubahHuruf == ubahHuruf.toLowerCase()){
      ubahHuruf = ubahHuruf.toUpperCase()
  }
   else{
       ubahHuruf = ubahHuruf.toLowerCase()
   }ubahKalimat += ubahHuruf
   } 
  return ubahKalimat
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"