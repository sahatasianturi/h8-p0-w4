function checkAB(num) {
    tampungA=0
    tampungB=0
        for(j=0; j<num.length; j++){
            if(num[j]=='a'){
                tampungA = j
            }
            // console.log(tampungA)
            if(num[j] =='b'){
                tampungB= j
            }
            // console.log(tampungB)
        }
        // console.log(tampungA, ' ', tampungB)
        
            if (tampungA>tampungB){
                jarak = tampungA-tampungB
            }
            else {
                jarak = tampungB-tampungA
            }
            if (jarak==4){
                return true
            }
            else{
                return false
            }
    }
    
            
        
        
    
  


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false