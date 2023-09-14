function colorTile(row, column, color) {
    let inputElement = document.querySelector(`input[name="input${row}${column}"]`)
    inputElement.style.backgroundColor = color  
}

function colorButtonCorrespondingToInput(row, column, color) {
    let inputElement = document.querySelector(`input[name="input${row}${column}"]`)
    if (color === 'green') {
        findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor = 'green'
    } else if (
        color === 'orange' && findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor !== 'green'
    ) {
        findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor = 'orange'
    } else if (
        color === 'grey' && 
        findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor !== 'orange' &&
        findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor !== 'green'
    ) {
        findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor = 'grey'
        }
    else {
        return
    }
}



function cleverIncorrectInputEvaluator(row) {
    console.log("wordOfTheDay in cleverIncorrectInputEvaluator: " + wordOfTheDay)

//function setup
     //index which we will use to track which indices of the cells in the same row have yet to be assigned colors. These will correspond to indices of the the wordOftheDay Array
     let indexTracker = [0,1,2,3,4,5];
     //testing
     //console.log("at the start, indexTracker is: " + indexTracker)
     //the user input
     let userInput = concatenateFocusedRowInputValues();
     console.log("userInput in cleverIncorrectInputEvaluator: " + userInput)

//green handling 
    //handling the letters of the user input that are in the word, and in the right place
    elementsToRemoveFromIndexTrackerPostGreenHandling = []
    for (let num of indexTracker) {
        
        if (userInput[num] ===  wordOfTheDay[num]) {

            //colouring the tiles green
            colorTile(row, num, 'green');
            colorButtonCorrespondingToInput(row, num, 'green');

            //updating elementsToRemoveFromIndexTrackerPostGreenHandling
            elementsToRemoveFromIndexTrackerPostGreenHandling.push(num)
            //testing
            console.log("elementsToRemoveFromIndexTrackerPostGreenHandling is: " + elementsToRemoveFromIndexTrackerPostGreenHandling)
            console.log("------------------end of loop circuit")
        }
    } 
    //testing
    //console.log("end of loop handling green tiles")
    //console.log("----------------------------")

//updating indexTracker post green handling
    //testing
    console.log("elementsToRemoveFromIndexTrackerPostGreenHandling is: " + elementsToRemoveFromIndexTrackerPostGreenHandling)
    //updating tracker
    indexTracker = indexTracker.filter(x => !elementsToRemoveFromIndexTrackerPostGreenHandling.includes(x))
    //testing
    console.log("after handling green tiles indexTracker is: " + indexTracker)
    console.log("----------------------------")

//orange handling    
    console.log("start of orange handling")
    //setting up a copy of the indexTracker, to map the letters correspodming to the indicies within the wotd
    let wotdIndexTracker = indexTracker
    console.log("wotdIndexTracker: " + wotdIndexTracker)
    console.log("---------------------")
    //as above, setting up an empty list, to fill up with words that can be taken out of the 
    let elementsToRemoveFromIndexTrackerPostOrangeHandling = []

    for (num of indexTracker) {
        console.log("number of indexTracker: " + num)
        for (let k = 0; k < wotdIndexTracker.length; k++) {

            console.log("------index of wotdIndexTracker: " + wotdIndexTracker)

            if (userInput[num] === wordOfTheDay[wotdIndexTracker[k]]) {

                //coloring tiles orange
                colorTile(row, num, 'orange');
                colorButtonCorrespondingToInput(row, num, 'orange')


    
                //updating wotdTracker to remove the element that matched an element of the reduced userInput
                wotdIndexTracker = wotdIndexTracker.slice(0, k).concat(wotdIndexTracker.slice(k + 1));
                console.log("index of wotdIndexTracker: " + wotdIndexTracker)

                //updating elementsToRemoveFromIndexTrackerPostOrangeHandling
                elementsToRemoveFromIndexTrackerPostOrangeHandling.push(num)
            }
        }

    }

//grey handling
    for (let l=0;l<6;l++) {
        let inputElement = document.querySelector(`input[name="input${row}${l}"]`)
        if (inputElement.style.backgroundColor !== 'green' && inputElement.style.backgroundColor !== 'orange') {
            inputElement.style.backgroundColor = 'grey'


        }

        if (findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor !== 'green' && findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor !== 'orange') {
            findButtonByLetter(inputElement.value.toLowerCase()).style.backgroundColor = 'grey'

        }

    }

   
}
