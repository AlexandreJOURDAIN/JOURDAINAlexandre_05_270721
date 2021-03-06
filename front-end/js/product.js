const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("id");

let product = [];

//-------------------------------fetch----------------------------------------
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
						   <label for="lentilleselect"></label>
	<select name="lentilleselect" id="lentilleselect">
	<option value=""> Veuillez choisir votre option </option>
	</select> 
	<div class="position-button">
    
	
	</a>
	<a href="panier.html">
	<button onclick="testConfirmDialog()"  id="click_achat">
	<p>ajoutez au panier </p>
	</button>
    </a>
</div>
						</article>
																`;

		for (let option of article.lenses) {
			document.querySelector("#lentilleselect").innerHTML += `
		<option value=${option}>${option}</option>
	 `;
		}


		//---------------------------------------fetch---------------------------------------
		document.getElementById("click_achat").addEventListener("click", (event) => {
			event.preventDefault();
			addtocart();
		});
		
		
	})

	.catch(function (error) {});
