
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
                    <div class="position_img_article">
                        <img class="img_article" src="${article.imageUrl}" alt="">
                    </div>
                    <div class="position-text-article">
                        <div class="position_camera">
                            <i class=" icon_cam fas fa-camera-retro"></i>
                        </div>
                        <div class="text-article">
                            <p> modele${article.name}</p>
							<p>${article.price } € </p>
                        </div>
                    </div>	
                </a>
            </article>
																`;


                        // for (let option of article.lenses) {
                        // document.querySelector (".lentille-select").innerHtml+=
                        // <option value="lentille">${option}</option>
                        // }                                      
		}
	)
	.then(function (cameras) {
		console.log(cameras);
		cameras.forEach((camera) => {
			console.log(camera.name);
		});
	})
	.catch(function (error) {});
    
