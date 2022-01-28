/*
 
This is what is in the html
<span class="home-page-details">
    Some text <span id="home-page-js">What comes in the typing effect</span><span id="home-page-typing"></span>
</span>

*/


// Home page typing effect
let home_page_skills = ["Web Development", "Graphic Designing", "Competitive Programming"];

let current_skill_index = 0;
let current_skill = home_page_skills[current_skill_index];
let current_skill_text = "";
let i = 0;
let deleting = false;
(function typeWriter_home_page() {
    if (current_skill_index === home_page_skills.length) {
        current_skill_index = 0;
    }
    current_skill = home_page_skills[current_skill_index];
    current_skill_text = current_skill_text + current_skill[i];
    document.getElementById("home-page-js").innerHTML = current_skill_text;
    i++;
    if (i === current_skill.length) {
        deleting = true;
        document.getElementById("home-page-typing").className = "home-page-typing-blink";
        setTimeout(home_deleting, 2000);
        current_skill_index++;
        i = 0;
    }
    if (deleting === false) {
        setTimeout(typeWriter_home_page, 300);
    }

    //deleting the elements form end
    function home_deleting() {
        var x = current_skill_text.slice(0, current_skill_text.length - 1);
        current_skill_text = x;
        document.getElementById("home-page-js").innerHTML = current_skill_text;
        if (current_skill_text !== "") {
            setTimeout(home_deleting, 100);
        }
        else {
            deleting = false;
            document.getElementById("home-page-typing").className = "";
            setTimeout(typeWriter_home_page, 900);
        }
    }
}());