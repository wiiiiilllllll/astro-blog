const markerX = document.querySelector(".markerX");
const markerY = document.querySelector(".markerY");

window.addEventListener("mousemove", function (ev) {
  markerX.style.setProperty("--x", ev.clientX + "px");
  markerX.textContent = ev.clientX;
});

window.addEventListener("mousemove", function (ev) {
  markerY.style.setProperty("--y", ev.clientY + "px");
  markerY.textContent = ev.clientY;
});
