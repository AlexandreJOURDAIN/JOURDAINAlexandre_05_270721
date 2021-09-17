function addtocart() {
    //vérifier si le panier et le panier local storage existe
    //si il existe comparé l'article name et l'option 
    const objectSelected = document.querySelector("#lentilleselect")[lentilleselect.selectedIndex].value;
    const objectToAdds = { name: article.name, quantity:1, price: article.price, image: article.imageUrl, lentille:objectSelected};
    product.push(objectToAdds);
    localStorage.setItem("panier", JSON.stringify(product));
}

