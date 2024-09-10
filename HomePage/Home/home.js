fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/products")
    .then(response => response.json())
    .then(data => {
        let alement = document.querySelector("#alements");
        let template = document.querySelector(".product-box");

        // Filter items based on type
        let filteredItems = data.filter(item => 
            ["housewares", "electronics", "accessory", "clothes"].includes(item.type)
        );


        filteredItems.reverse();


        filteredItems.forEach(item => {
            let clone = template.cloneNode(true);
            clone.style.display = "block";

            clone.querySelector(".product-image").src = item.img;
            clone.querySelector(".product-image").alt = item.name;
            clone.querySelector(".product-name").textContent = item.name;
            clone.querySelector(".product-price").textContent = `$${item.price}`;

            alement.appendChild(clone);
        });
    })
    .catch(error => console.error('Error fetching data:', error));