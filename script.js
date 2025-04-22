document.getElementById("calculate").addEventListener("click", function() {
    function sanitizeInput(input) {
        return DOMPurify.sanitize(input);
    }

    var weightInput = sanitizeInput(document.getElementById("weight").value);
    var repsInput = sanitizeInput(document.getElementById("reps").value);

    var weight = parseFloat(weightInput);
    var reps = parseInt(repsInput);

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
