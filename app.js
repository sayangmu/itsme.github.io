const carouselSLide = document.querySelector('.carousel-slide');
const [...carouselImage] = document.querySelectorAll('.carousel-slide img');

// BUTTON
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSLide.style.transform = `translateX(${-size*counter}px)`


// Button Listener
prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSLide.style.transition = "transform .4s ease-in-out";
    counter--;
    carouselSLide.style.transform = `translateX(${-size*counter}px)`;
    
});

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImage.length - 1) return;
    carouselSLide.style.transition = "transform .4s ease-in-out";
    counter++;
    carouselSLide.style.transform = `translateX(${-size*counter}px)`;
    
});

carouselSLide.addEventListener('transitionend', ()=>{
    if(carouselImage[counter].id === 'lastClone'){
        carouselSLide.style.transition = "none";
        counter = carouselImage.length - 2; 
        carouselSLide.style.transform = `translateX(${-size*counter}px)`;
    }
})

carouselSLide.addEventListener('transitionend', ()=>{
    if(carouselImage[counter].id === 'firstClone'){
        carouselSLide.style.transition = "none";
        counter = carouselImage.length - counter; 
        carouselSLide.style.transform = `translateX(${-size*counter}px)`;
    }
})