// 

fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/products")
            .then(response => response.json())
            .then(data => {
                let alement = document.querySelector("#alements");
                let template = document.querySelector(".product-box");

                let electronics = data.filter(item => item.type === "electronics");

                electronics.reverse();

                electronics.forEach(item => {
                    let clone = template.cloneNode(true);
                    clone.style.display = "block";

                    clone.querySelector(".product-image").src = item.img;
                    clone.querySelector(".product-image").alt = item.name;
                        clone.querySelector(".product-name").textContent = item.name;
                    // clone.querySelector(".product-desc").textContent = item.desc;
                    clone.querySelector(".product-price1").textContent = `$${item.price}`;

                    alement.appendChild(clone);
                });
            })
            .catch(error => console.error('Error fetching data:', error));



// function stars() {
//     console.log("dakljdls");
    
//     var star = document.getElementById("text")
//     star.style.backgroundColor = "red"
    
// }
        