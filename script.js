// script.js
document.getElementById("calculate").addEventListener("click", function() {
    // Function to sanitize input (mainly to trim whitespace)
    function sanitizeInput(input) {
        return input.trim();
    }

    var weight = parseFloat(sanitizeInput(document.getElementById("weight").value));
    var reps = parseInt(sanitizeInput(document.getElementById("reps").value));

    // Input Validation
    if (isNaN(weight) || isNaN(reps)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    if (weight <= 0 || reps <= 0) {
        document.getElementById("result").textContent = "Weight and reps must be greater than zero.";
        return;
    }

    // Epley Formula (example)
    var oneRepMax = weight * (1 + (reps / 30));

    document.getElementById("result").textContent = "Estimated 1 Rep Max: " + oneRepMax.toFixed(2);
});
