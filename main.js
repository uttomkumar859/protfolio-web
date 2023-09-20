var navBar = document.querySelector('.navbar-item');
var toggleBtn = document.getElementById('toggleBtn');

toggleBtn.onclick = function(){
    navBar.classList.toggle("active");
}


// banner auto type text 
document.addEventListener("DOMContentLoaded", function(event) {
    var textElement = document.querySelector('.typing-text');
    var textToType = ["Deginer", "Freelancer", "Web developer"]; // An array of texts to type
    var currentIndex = 0; // Current index of the text to type

    function typeText() {
        var currentText = textToType[currentIndex];
        var text = currentText.slice(0, i);
        textElement.innerHTML = text;

        if (i < currentText.length) {
        i++;
        setTimeout(typeText, 100); // Adjust typing speed here (milliseconds)
        } else {
        setTimeout(eraseText, 1000); // Adjust delay before erasing (milliseconds)
        }
    }

    function eraseText() {
        var currentText = textToType[currentIndex];
        var text = currentText.slice(0, i);
        textElement.innerHTML = text;

        if (i > 0) {
        i--;
        setTimeout(eraseText, 50); // Adjust erasing speed here (milliseconds)
        } else {
        currentIndex++;
        if (currentIndex >= textToType.length) {
            currentIndex = 0;
        }
        setTimeout(typeText, 500); // Adjust delay before typing the next text (milliseconds)
        }
    }
    
    var i = 0;
    typeText();
});
// banner auto type text 