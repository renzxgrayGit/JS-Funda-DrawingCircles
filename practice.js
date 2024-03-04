let selectedColor = "green";

/* Function to select color */
function selectColor(color) {
    selectedColor = color;
    console.log(selectedColor);
    // Keeping the border from all color choices
    let colorChoices = document.getElementsByClassName("colorChoices");
    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].style.border = "1px solid black";
    }
    // Highlight selected color
    document.getElementById(color).style.border = "3px solid black";
}

/* Function to reset the screen */
function reset() {
    // Remove all circles from the screen
    let circles = document.getElementsByClassName("circle");
    while (circles.length > 0) {
        circles[0].parentNode.removeChild(circles[0]);
    }
    // Set selected color back to default (green)
    selectColor('#CCE8CC');
}

document.addEventListener("DOMContentLoaded", function() {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function handleClick(event) {
        let radius = getRandomNumber(10, 200);
        
        let circle = document.createElement("div");
        circle.classList.add("circle");

        circle.style.left = (event.clientX - radius / 2) + "px"; 
        circle.style.top = (event.clientY - radius / 2) + "px"; 

        circle.style.width = radius + "px";
        circle.style.height = radius + "px";
        circle.style.backgroundColor = selectedColor;

        document.body.appendChild(circle);

        animateCircle(circle, radius);
    }   

    function animateCircle(circle, initialRadius) {
        let currentRadius = initialRadius;
        let shrinkInterval = setInterval(function() {
            currentRadius -= 1;
            circle.style.width = currentRadius + "px";
            circle.style.height = currentRadius + "px";
            circle.style.left = parseFloat(circle.style.left) + 0.5 + "px";
            circle.style.top = parseFloat(circle.style.top) + 0.5 + "px";

            if(currentRadius <= 0) {
                clearInterval(shrinkInterval);
                circle.parentNode.removeChild(circle);
            }
        }, 10);
    }

    document.addEventListener("click", handleClick);
});