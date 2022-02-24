const sendingButtom = document.getElementById("sending"); 
// Buttom Sending  Event
sendingButtom.addEventListener("click", function(){ 
   
    // Data to be collected
    const infoUser = document.getElementById("name-user").value; 
    document.getElementById("passenger-name").innerHTML=infoUser;
    console.log(infoUser);
    const kmTrip =parseInt(document.getElementById("km-trip").value);  
    
    // Condition controll
    if (isNaN (kmTrip)){
        alert("Inserire correttamente i chilometri");
    };
    console.log(kmTrip);
    const age = document.getElementById("age").value;
    console.log(age); 
    
    // Ticket cost calculation 
    let costTrip = kmTrip * 0.27;
    console.log(costTrip + " €" + " Origin Price")
   
    // Carriage and CP assignment
    let carriage = Math.floor(Math.random() * 20) + 1; 
    document.getElementById("carriage").innerHTML= carriage; 
    let cp = Math.floor(Math.random() * 10000) + 1; 
    document.getElementById("cp").innerHTML= cp; 
    
    // Conditions for discount on the ticket
    if ( age === "underage"){
        costTrip -=costTrip * 0.17;
        document.getElementById("ticket-price").innerHTML= costTrip.toFixed(2) + "€"; 
        document.getElementById("offert").innerHTML= "17% di sconto per minorenni"; 
        console.log(costTrip + "€" + "Sale for underage"); 
    }else if (age === "over"){
        costTrip -= costTrip * 0.33; 
        console.log(costTrip + "€" + " Sale for Over 65"); 
        document.getElementById("ticket-price").innerHTML= costTrip.toFixed(2) + "€"; 
        document.getElementById("offert").innerHTML= "33% di sconto per Over 65"; 
    } else{
        costTrip; 
        document.getElementById("ticket-price").innerHTML= costTrip.toFixed(2) + "€"; 
        document.getElementById("offert").innerHTML= "Standard";  
        console.log(costTrip + "€")
    }

     // Screen printing ticket   
     document.getElementById('ticket').classList.remove('d-none');
     document.getElementById('ticket').classList.add('d-block');

}); 

// Cancell All buttom
const cancelButtom = document.getElementById("cancel");
cancelButtom.addEventListener("click", function(){
    document.getElementById("name-user").value= ""; 
    document.getElementById("km-trip").value= ""; 
    document.getElementById('ticket').classList.remove('d-block'); 
    document.getElementById('ticket').classList.add('d-none');
})