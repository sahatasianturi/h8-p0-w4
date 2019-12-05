function urutkanAbjad(str) {
    var hasil=''
  var abdjad='abcdefghijklmnopqrstuvwxyz'
  for(i=0; i<abdjad.length; i++){
      for(j=0; j<str.length; j++){
          if(abdjad[i]==str[j]){
              hasil+=abdjad[i]
          }
      
  }
//   console.log(hasil)
}return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

