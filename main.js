const parallax = document.getElementById("home-section");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";   
})