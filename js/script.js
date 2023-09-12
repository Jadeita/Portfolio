// FOR CHANGE LANGUAGE
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");


const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// ------- MENU EN PANTALLA PEQUEÑA------

let menu = document.querySelector('#menu-icon');
let navlist = document.getElementById('navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');

};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};


// FOR CHANGE LANGUAGE

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

};
flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});



