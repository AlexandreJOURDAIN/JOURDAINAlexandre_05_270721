let camera_section = document.getElementsByClassName("all_camera");
console.log(camera_section);

fetch("http://localhost:3000/api/cameras")
	.then(function (reponse) {
		if (reponse.ok) {
			return reponse.json();
		}
	})
	.then((jsonListArticle) => {
		for (let jsonArticle of jsonListArticle) {
			let article = new Article(jsonArticle);
			document.querySelector(".all_camera").innerHTML += `
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
		}
	})
	.then(function (cameras) {
		console.log(cameras);
		cameras.forEach((camera) => {
			console.log(camera.name);
		});
	})
	.catch(function (error) {});
