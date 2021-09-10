window.onload = function(){
    /*recuperation des valeurs saisies par l'utilisateur*/
    let getName = document.getElementById('nom').value=sessionStorage.getItem('Nom');
    let getSurname = document.getElementById('prenom').value=sessionStorage.getItem('Prenom');
    let getEmailAdress = document.getElementById('adresseMail').value=sessionStorage.getItem('adressemail');
    let getAdresse = document.getElementById('adressePostal').value=sessionStorage.getItem('adresse');
    let geteCodepostal = document.getElementById('codePostal').value=sessionStorage.getItem('codepostal');
    let getVille = document.getElementById('ville').value=sessionStorage.getItem('ville');
}

let getCongrats = document.getElementById('congratulation').innerHTML = "Nous vous remercions pour votre commande numéreau :" + sessionStorage.getItem('Prenom') + sessionStorage.getItem('Nom') + "habitant à l'adresse suivante" + sessionStorage.getItem('codepostal') + "Vous trouverez dans votre boite mail : " + sessionStorage.getItem('adressemail') + "un resumé de votre commande"