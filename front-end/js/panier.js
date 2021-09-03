

console.log(localStorage.getItem("panier"));

let stockage = localStorage.getItem("panier")

//---------- sauvegarde données formulaire -----------------------//

document.getElementById("confirmcommand").addEventListener("click", (event) => {
    event.preventDefault();
    result();
});

function result (){
    let name= document.getElementById("fname").value;
    let surname= document.getElementById("lname").value;
    let emailadress= document.getElementById("eadress").value;
    

    sessionStorage.setItem('Nom',name);
    sessionStorage.setItem('Prenom',surname);
    sessionStorage.setItem('adressemail',emailadress);
}

