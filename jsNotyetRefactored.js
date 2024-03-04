/* Variable to store the selected color */
let selectedColor = "#CCE8CC"; // Default color

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
    // Function to generate a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to handle mouse click event
    function handleClick(event) {
        // Get random radius between 10 and 200 pixels
        var radius = getRandomNumber(10, 200);
        
        // Create a div element for the circle
        var circle = document.createElement("div");
        circle.classList.add("circle"); // Add circle class
        
        // Set the circle's position to where the mouse was clicked
        circle.style.left = (event.clientX - radius / 2) + "px";
        circle.style.top = (event.clientY - radius / 2) + "px";
        
        // Set the circle's dimensions and style
        circle.style.width = radius + "px";
        circle.style.height = radius + "px";
        circle.style.backgroundColor = selectedColor;
        
        // Append the circle to the body
        document.body.appendChild(circle);

        // Animate the circle
        animateCircle(circle, radius);
    }

    /* Function to animate the circle */
    function animateCircle(circle, initialRadius) {
        var currentRadius = initialRadius;
        var shrinkInterval = setInterval(function() {
            currentRadius -= 1; // Reduce the radius by 1 pixel
            circle.style.width = currentRadius + "px";
            circle.style.height = currentRadius + "px";
            circle.style.left = parseFloat(circle.style.left) + 0.5 + "px"; // Move the circle slightly to the right
            circle.style.top = parseFloat(circle.style.top) + 0.5 + "px"; // Move the circle slightly down

            if (currentRadius <= 0) {
                clearInterval(shrinkInterval); // Stop shrinking when radius reaches 0
                circle.parentNode.removeChild(circle); // Remove the circle from the DOM
            }
        }, 10); // Adjust the interval to control the speed of shrinking
    }

    /* Add click event listener to the document */
    document.addEventListener("click", handleClick);
});
