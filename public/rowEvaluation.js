// Get all input boxes in the order they appear in index.html
var inputs = document.querySelectorAll('.grid-element');


//function to alert user if a submission was either not a word or blank
function notifySubmissionError(input, tracker) {
    alert("Not a word[whooo]")
    for (let j = 1; j <= 6; j++) {
        document.querySelector(`input[name="input${tracker}${j}"]`).value = "";
    }
    inputs[(tracker-1)*6].focus();
    return false
}
    
// Function to map virtual keyboard letters to their corresponding HTML elements
function findButtonByLetter(letter) {
    let buttons = document.querySelectorAll('.keyboard-button'); //selects all buttons from keyboard, by selecting via the class
    for (let i = 0; i < buttons.length; i++) { //loops through all the buttons via lexiographical (whatever its called?) indexing
        if (buttons[i].textContent === letter) {
            return buttons[i];  // Return the button matching the letter
        }
    }
    return null; // Return null if no matching button found
}


// Get all input boxes in the order they appear in index.html
var inputs = document.querySelectorAll('.grid-element');





//function for checking if user suggestion was accurate, and color and row changing accordingly 
 function incorrectInputEvaluator(row) {

    for (let j=0; j<6; j++) {
        let inputElement = document.querySelector(`input[name="input${row}${j}"]`)

        if (inputElement.value === wordOfTheDay[j]) {
            inputElement.style.backgroundColor = 'green';
            findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor = 'green';
        }
        else if (wordOfTheDay.includes(inputElement.value))
        {
            inputElement.style.backgroundColor = 'orange';
            if (findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor !== 'green') {
                findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor = 'orange';
            }
        }
        else {
            inputElement.style.backgroundColor = 'grey';
            findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor = 'grey';
        } 
        inputElement.disabled = true;
    }

}

//function fo congratulating the user if they guess the correct word
function congratulateUser(row, shouldContinue = true) {
    if (!shouldContinue) {
        return;
    }
    setTimeout(function() {
        alert("Congrats!");
        //coordinatesToCell(coordinateTracker).disabled = true
    }, 680);
    congratulateUser(row, false); // Pass false to stop recursion
}


//second attempt at inputValidation
async function inputValidation(word) {
    console.log("user input is: " + word);
    
    let isInDictionary = false;
    
    checkIfInDictionary(word)
    .then((result) => {
        isInDictionary = result;
        
        console.log("in dictionary? false - no, true - yes:" + isInDictionary);
        
        if (word.length !== 6) {
            return false;
        }
        else if (!isInDictionary) {
            return false;
        }
        else {
            return true;
        }
    })
    .catch((error) => {
        console.error("Error occurred:", error);
        return false;
    });
}





function inputEvaluationVisualAnimation(input) {
    //incorrectInputEvaluator(coordinateTracker[0])
    cleverIncorrectInputEvaluator(coordinateTracker[0])
    if (input === wordOfTheDay) {
        congratulateUser()
    }
}



