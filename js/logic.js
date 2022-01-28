//adding background colour to the nav bar after some scroll
function checkScroll() {
    if (window.scrollY > 300) {
        const navBar = document.getElementsByClassName('nav-bar')[0]
        navBar.classList.add("nav-bar-scroll");
    } else {
        const navBar = document.getElementsByClassName('nav-bar')[0]
        navBar.classList.remove("nav-bar-scroll");
    }
}
document.addEventListener("scroll", function () {
    checkScroll();
});


// adding border bottom to the nav bar field
var divContainer = document.getElementById('my-nav-bar-list')
var btns = divContainer.getElementsByClassName('nav-bar-hover')

for (var j = 0; j < btns.length; j++) {
    btns[j].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}


// $("#submit-message").on('click',function() {
//     console.log("submitted");
//     document.getElementById("details-page-form").reset();
//     document.getElementById("succes-alert").style.display="block";
// });