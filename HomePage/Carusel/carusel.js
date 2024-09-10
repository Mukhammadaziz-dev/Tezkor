// let currentSlide = 0;

// function moveSlide(direction) {
//     const slides = document.querySelectorAll('.carousel_slide');
//     const totalSlides = slides.length;

//     currentSlide += direction;

//     if (currentSlide < 0) {
//         currentSlide = totalSlides - 1;
//     } else if (currentSlide >= totalSlides) {
//         currentSlide = 0;
//     }

//     const offset = -currentSlide * 100;
//     document.querySelector('.carousel_container').style.transform = `translateX(${offset}%)`;
// }

// // AUTO SLIDE EVERY 5 SECONDS
// setInterval(() => {
//     moveSlide(1);
// }, 5000);



let currentIndex = 0;

async function loadCarouselData() {
    try {
        const response = await fetch('https://66ab5539636a4840d7ca3261.mockapi.io/dcd/corusel');
        const data = await response.json();
        const carouselContainer = document.getElementById('carouselContainer');
        
        data.forEach(item => {
            const slide = document.createElement('div');
            slide.classList.add('carousel_slide');
            slide.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            carouselContainer.appendChild(slide);
        });
    } catch (error) {
        console.error('Error fetching carousel data:', error);
    }
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel_slide');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const carouselContainer = document.getElementById('carouselContainer');
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// // AUTO SLIDE EVERY 5 SECONDS
function autoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, 5000);
}


window.onload = () => {
    loadCarouselData();
    autoSlide();
};