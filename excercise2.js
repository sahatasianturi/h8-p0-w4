function fpb(angka1, angka2) {
 var fpb=0
 var x=0
 var y=0
 if(angka1<angka2){
     x=angka1
     y=angka2
 }
 else {
     x=angka2
     y=angka1
 }
 for (var i=x; i>0; i--){
     if(x%i==0 && y%i==0){
         fpb=i
         break
     }
    }
    return fpb
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1