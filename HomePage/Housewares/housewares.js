fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/products")
    .then(response => response.json())
    .then(data => {
        let umar = document.querySelector(".container")
        


        let housew = data.filter(item => item.type === "housewares");


console.log(housew);

        housew.map(item => {


            umar.innerHTML += `
            <div class="box">
            
              <a href="#"> <div class="img">   <img src="${item.img}" alt="${item.title}" class="product-image" ></div>  </a>     
                    <h2 class="product-name">${item.name}</h2>
                    <p class="product-desc">${item.desc}</p>
                    <p class="product-price">$${item.price}</p>
            </div>
            `;

           
        });
    })
    .catch(error => console.error('Error fetching data:', error));

    