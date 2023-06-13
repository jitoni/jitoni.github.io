function switchToPolish() {
    var langElement = document.querySelectorAll(".lang");
    langElement.forEach(function(lang) {
        lang.innerHTML = lang.getAttribute("data-polish");
    });
}

function switchToEnglish() {
    var langElement = document.querySelectorAll(".lang");
    langElement.forEach(function(lang) {
        lang.innerHTML = lang.getAttribute('data-english');
    });
}


var polishButton = document.getElementById("plBtn");
polishButton.addEventListener('click', switchToPolish);

var englishButton = document.getElementById("enBtn");
englishButton.addEventListener('click', switchToEnglish);
