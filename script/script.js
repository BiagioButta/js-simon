"use strict";

let starthtml = document.getElementById('start');


starthtml.addEventListener('click', startCountdown);



let numeriDaMemorizzare = function(){
    
    let numeri = [];

    let numerihtml = document.getElementById('numeri');
    for(let i = 0; i < 5; i++){
        numerihtml.innerHTML = "";
        let numeriRandom = getRndInteger(1,100);
        
        if(!numeri.includes(numeriRandom)){
            numeri.push(numeriRandom)
        }else{
            numeri.push(numeriRandom + 1)
        }
        numerihtml.innerHTML = numeri 
    }
    let copiaArraiNumeri = numeri.map((x) => x);
    console.log(copiaArraiNumeri)
    console.log(numeri)
}

