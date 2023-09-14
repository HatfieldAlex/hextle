//submits the user input to the evaluator
function concatenateFocusedRowInputValues() {
    let inputElement = ""
    for (let j=0; j<6; j++) {
        inputElement += document.querySelector(`input[name="input${coordinateTracker[0]}${j}"]`).value;
    }
    inputElement = inputElement.toUpperCase()
    //console.log("user input is: " + inputElement)
    return inputElement
}


//inputs letter into box
function inputLetter(letter) {
    letter = letter.toUpperCase()
    if (coordinatesToCell(coordinateTracker).value.length < coordinatesToCell(coordinateTracker).maxLength) {
        coordinatesToCell(coordinateTracker).value = letter
        cellFocusRight()
    } 
    else {
        if (coordinateTracker[1] !== 5) {
            cellFocusRight()
            coordinatesToCell(coordinateTracker).value = letter
        }
    } 
}

//deletes a letter
function deleteLetter() {
    coordinatesToCell(coordinateTracker).value = ""
    cellFocusLeft()

}
//enters a letter
//new idea
function enterWord() {
    //console.log("wordOfTheDay is: ", wordOfTheDay)
    let inputElement = concatenateFocusedRowInputValues();
    checkIfInDictionary(inputElement).then(data => {
        if (data) {
            inputEvaluationVisualAnimation(inputElement);
            coordinateTracker[0] = coordinateTracker[0] + 1;
            coordinateTracker[1] = 0;
        } else {
            alert('not a word')
        }

    }
        
    )
}


