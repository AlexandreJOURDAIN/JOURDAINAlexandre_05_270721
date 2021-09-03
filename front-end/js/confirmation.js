window.onload = function(){
    /*recuperation des valeurs saisies par l'utilisateur*/
    let getName = document.getElementById('fname').value=sessionStorage.getItem('Nom');
    let getSurname = document.getElementById('lname').value=sessionStorage.getItem('Prenom');
    let getemailAdress = document.getElementById('eadress').value=sessionStorage.getItem('adressemail');
    
}

let getCongrats = document.getElementById('congratulation').innerHTML = "Nous vous remercions pour votre commande numéreau :" + sessionStorage.getItem('Prenom') + sessionStorage.getItem('Nom') + "Vous trouverez dans votre boite mail" + sessionStorage.getItem('adressemail') + "un resumé de votre commande"