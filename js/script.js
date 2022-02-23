const sendingButtom = document.getElementById("sending"); 
const cancelButtom = document.getElementById("cancel"); 

sendingButtom.addEventListener("click", function(){
    const infoUser = document.getElementById("name-user").value; 
    console.log(infoUser);
    const kmTrip =document.getElementById("km-trip").value;
    console.log(kmTrip); 
    const age = document.getElementById("age").value;
    console.log(age); 
    let costTrip= (kmTrip * 0.27).toFixed(2);
    console.log(costTrip + "€");
})