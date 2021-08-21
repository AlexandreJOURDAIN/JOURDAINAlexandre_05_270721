const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("id");

fetch("http://localhost:3000/api/cameras/" + productId)
	.then(function (reponse) {
		if (reponse.ok) {
			return reponse.json();
		}
	})
	.then((jsonArticle) => {
		let article = new Article(jsonArticle);
		document.querySelector(".camera_fav").innerHTML += `
				<article>
                <a href="products.html?id=${article._id}">
				<H1>Modele ${article.name}</H1>
                    <div class="position_img_article">
                        <img class="img_article" src="${article.imageUrl}" alt="">
                    </div>
                    <div class="position-text-article">
                        <div class="position_camera">
                            <i class=" icon_cam fas fa-camera-retro"></i>
                        </div>
                          <div class="text-article">
                            <p> modele${article.name}</p>
							<p>${article.price} € </p>
                          </div>
						   </a>
						   <div class="position_form">
            <div class="position_label">
                <label for="lentille-select"></label>
                <select name="" id="">
                    <option value="">Selectionner votre lentille</option>
                </select>
            </div>   
        </div>
							
						</article>
																`;

		// for (let option of article.lenses) {
		// document.querySelector (".lentille-select").innerHtml+=
		// <option value="lentille">${option}</option>
		// }
	}
	// for (let option of article.lenses) {
		// document.querySelector (".lentille-select").innerHtml+=
		// <option value="lentille">${option}</option>
		// }
	
	)
	
	.then(function (cameras) {
		console.log(cameras);
		cameras.forEach((camera) => {
			console.log(camera.name);
		});
	})
	.catch(function (error) {});
