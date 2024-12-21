//your JS code here. If required.
// Get references to the necessary DOM elements  
const textInput = document.getElementById("text");  
const delayInput = document.getElementById("delay");  
const outputDiv = document.getElementById("output");  
const submitButton = document.getElementById("btn");  

// Function to introduce a delay using a promise  
function delay(ms) {  
    return new Promise(resolve => setTimeout(resolve, ms));  
}  

// Async function to handle the button click  
async function displayMessageAfterDelay() {  
    // Retrieve user input values  
    const message = textInput.value;  
    const delayTime = parseInt(delayInput.value, 10); // Convert to integer  

    // Check if delayTime is a valid number  
    if (isNaN(delayTime) || delayTime < 0) {  
        outputDiv.textContent = "Please enter a valid delay time in milliseconds.";  
        return;  
    }  

    // Introduce the delay  
    await delay(delayTime);  
    
    // Display the message in the output div  
    outputDiv.textContent = message;  
}  

// Add event listener to the submit button  
submitButton.addEventListener("click", displayMessageAfterDelay);