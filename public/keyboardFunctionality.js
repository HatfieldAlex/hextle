//applying letter inputer to every key on the virtual keypad
for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    document.getElementById(letter).addEventListener('click', function() {
        inputLetter(letter)
    })
}

//Adding event listener to the Del button
document.getElementById("Del").addEventListener("click", deleteLetter);

//Adding event listener to the Enter button
document.getElementById("Enter").addEventListener("click", enterWord);


//applies the input ability to all letters on the hardware keyboard
for (let i = 97; i <= 122; i++) {
    let letter = String.fromCharCode(i);
    document.addEventListener('keydown', function(event) {
        if (event.key === letter || event.key === letter.toUpperCase() )
        inputLetter(letter)
    })
}

//enable backspaceenterLetter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        deleteLetter()
    }
})

//enable entering on keyboard
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        enterWord()
    }
})

