let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel_slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel_container').style.transform = `translateX(${offset}%)`;
}

// AUTO SLIDE EVERY 5 SECONDS
setInterval(() => {
    moveSlide(1);
}, 5000);



fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/products")
    .then(response => response.json())
    .then(data => {
        let alement = document.querySelector("#alements");
        let template = document.querySelector(".product-box");

        let filteredItems = data.filter(item => 
            ["housewares", "electronics", "accessory", "clothes"].includes(item.type)
        );

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