import throttle from '../scripts/throttle.js'

const parallaxItems = document.querySelectorAll('.parallax');

parallaxItems.forEach(el => {
    // checkLocation(el);
    window.addEventListener('scroll', checkLocation);
});

var checkLocation = throttle(function(el) {
    console.log(el.offsetHeight)
}, 500);
  