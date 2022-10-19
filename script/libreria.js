// funzione timer
function startCountdown(){
    
    // evita che si possa applicare la funzione mentre è già avviata
    let seContoAllaRovesciaIniziato = false;  
    
    // se è falso
    if( seContoAllaRovesciaIniziato == false ){
        
        // prendo il valore che inserisce l'utente
        let tempohtml = parseInt(document.getElementById("tempo").value);
        
        // se il valore inserito è >= 1
        if( tempohtml >=1 ){
            
            // inizia il conto alla rovescia
            seContoAllaRovesciaIniziato = true;
            // converto i secondi in millisecondi
            let milliSecondi = tempohtml*1000;
        
            numeriDaMemorizzare();
            
            setTimeout(function(){
                seContoAllaRovesciaIniziato = false;
                
            }, milliSecondi);
            
            let countDown = tempohtml;
            document.getElementById("timer").innerHTML = countDown ;

            let fIntervallo = setInterval(function(){
                
                countDown--;
                document.getElementById("timer").innerHTML = countDown ;
                if( countDown == 0 ){
                    
                    document.getElementById('numeri').innerHTML ="";
                    document.getElementById("timer").innerHTML = "";
                
                    clearInterval(fIntervallo);
                }
                
            }, 1000);
        }
    }
}

// numero random tra 2 valori
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


