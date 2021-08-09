function addFavorites(articleId){
    let listFavorites = getFavorites();
    listFavorites.push({id: articleId, date: new Date()});
    saveFavorites(listFavorites);
}

function removeFavorites(articleId){
    let listFavorites = getFavorites();
    listFavorites = listFavorites.filter(favorites => favorites.id != articleId);
    saveFavorites(listFavorites);
}

function getFavorites(){
    let listFavorites = localStorage.getItem("listFavorites");
    if(listFavorites == null){
        return [];
    }else{
        return JSON.parse(listFavorites);
    }
}

function getFavoritesId(){
    return getFavorites().map(favorite => favorite.id);
}

function saveFavorites(listFavorites){
    localStorage.setItem("listFavorites",JSON.stringify(listFavorites));
}