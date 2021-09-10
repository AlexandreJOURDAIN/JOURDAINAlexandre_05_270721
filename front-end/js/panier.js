const panier = JSON.parse(localStorage.getItem("panier"));

console.log(panier);
let totalCost = 0;

for (let article of panier) {
	totalCost = totalCost + article.price;
	console.log(totalCost);

	document.querySelector("#confirm_panier").innerHTML += `
    <table class="table">
    <thead>
    <tr>
    <td>Nom du produit :${article.name}</td> 
    </tr>
    <tr>
    <td id="price">Prix du produit: ${article.price}$</td>
    </tr>
    <td>Votre choix de lentille: ${article.lense}</td>
    
    </thead>
    </table>
    
    `;
}
document.querySelector("#total_price").innerHTML += `
<p>Sous total : <span class="subtotal">${totalCost}</span>€</p>`;

let stockage = localStorage.getItem("panier");
//------------ recupération données panier ------------------//

let getpanier = (document.getElementById("price").value = sessionStorage.getItem("panier"));

//---------- sauvegarde données formulaire -----------------------//

function result() {
	let name = document.getElementById("nom").value;
	let surname = document.getElementById("prenom").value;
	let emailAdress = document.getElementById("adresseMail").value;
    let location = document.getElementById("adressePostal").value;
    let codePostale = document.getElementById("codePostal").value;
    let ville = document.getElementById("ville").value;
   
    

	sessionStorage.setItem('Nom',name);
	sessionStorage.setItem('Prenom',surname);
	sessionStorage.setItem('adressemail',emailAdress);
    sessionStorage.setItem('adresse',location);
    sessionStorage.setItem('codepostal',codePostale);
    sessionStorage.setItem('ville',ville);
    console.log(sessionStorage.getItem('Nom'))
};
