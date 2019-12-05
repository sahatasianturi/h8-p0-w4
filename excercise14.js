function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var awal=0
  var akhir =0
  var obj=[]
  
  for(i=0; i<arrPenumpang.length; i++){
      for(j=0; j<rute.length; j++){
          if(arrPenumpang[i][1]==rute[j]){
              awal = j
          }
          if ( arrPenumpang[i][2]==rute[j]){
              akhir = j
          } 
      }  var hasil = (akhir - awal)*2000

     obj.push({

  
      penumpang: arrPenumpang[i][0],
      naikDari:arrPenumpang[i][1],
      tujuan :arrPenumpang[i][2],
      harga:hasil
     
    })
  } return obj
}
  

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]