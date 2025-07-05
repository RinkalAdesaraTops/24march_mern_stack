let arr = [
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    "http://ix-marketing.imgix.net/key-features_asset-managment.png?auto=format,compress&w=1446",
    "https://ix-marketing.imgix.net/key-features_copyright.png?auto=format,compress&w=1446",
    "https://ix-marketing.imgix.net/global.jpg?auto=format,compress&w=1446"
]

let tr = ''
arr.map((i,index)=>{
    tr += `<div class="slide">
      <img
        src="${i}
        alt="Photo${index+1}" />
    </div>`
})
tr += ` <button class="btn-slide prev"><i class="fas fa-3x fa-chevron-circle-left"></i></button>
    <button class="btn-slide next"><i class="fas fa-3x fa-chevron-circle-right"></i></button>`
document.getElementById('slideData').innerHTML = tr

function Slider() {
    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;

    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };

    const changeSlide = function (slideIndex) {
        carouselSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === Number(slideIndex));
        });
    };

    // Initialize
    changeSlide(currentSlide);
    activeDot(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++;
        if (currentSlide > carouselSlides.length - 1) {
            currentSlide = 0;
        }
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = carouselSlides.length - 1;
        }
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            currentSlide = Number(slide);
            changeSlide(currentSlide);
            activeDot(currentSlide);
        }
    });
}
Slider();

