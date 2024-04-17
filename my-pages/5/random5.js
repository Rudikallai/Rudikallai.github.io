function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("generateButton").addEventListener("click", function() {
    var minNumber = 1;
    var maxNumber = 90;
    var generatedNumbers = [];
  
    var container = document.getElementById("randomNumberContainer");
    container.innerHTML = ""; // Clear previous numbers
  
    // Generate 5 different random numbers
    for (var i = 0; i < 5; i++) {
      var randomNumber;
      do {
        randomNumber = generateRandomNumber(minNumber, maxNumber);
      } while (generatedNumbers.includes(randomNumber)); // Check if the number already exists
      generatedNumbers.push(randomNumber);
  
      var randomNumberElement = document.createElement("span");
      randomNumberElement.textContent = randomNumber;
      randomNumberElement.classList.add("randomNumber");
      container.appendChild(randomNumberElement);
    }
  });