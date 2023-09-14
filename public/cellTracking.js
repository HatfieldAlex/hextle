//initiates the initial cell to focus on
coordinateTracker = [0,0]

//turns cells to coordinates
function cellToCoordinates(cell) {
  // Extract the name attribute from the cell
  const name = cell.getAttribute('name');
  // Strip the "input" prefix to isolate the coordinates string
  const coordinatesString = name.substring(5); // "input" is 5 characters long
  // Split the string into individual coordinates and convert them to numbers
  const coordinates = coordinatesString.split('').map(Number);
  return coordinates;
}


//function that isolates a certain cell - enables it, and disables all other input cells
function cellFocus(cell) { // note x indicates the row, and y indicates the column
  cell.focus()
  for (let i=0; i <= 6; i++) {
    for (let j=0; j<=5; j++) {
      if (i==cellToCoordinates(cell)[0] && j==cellToCoordinates(cell)[1]) {
        continue
      }
      let nonFocusedCell = document.querySelector(`input[name="input${i}${j}"]`)
      nonFocusedCell.disabled = true
    }
  }
} 



//turns coordinates to cells
function coordinatesToCell(coordinates) {
  return document.querySelector(`input[name="input${coordinates[0]}${coordinates[1]}"]`)
}



//initiates for the initial cell to be the focus
window.onload = function() {
  cellFocus(coordinatesToCell(coordinateTracker));
};


//moves the cell to the right - note must still be on the same row 
function moveCoordinatesRight([x,y]) {
  if (y+1<=5) {
    return [x,y+1]
  } else {
    return [x,y]
  }
}

//moves the cell to the left - note must still be on the same row 
function moveCoordinatesLeft([x,y]) {
  if (y-1>=0) {
    return [x,y-1]
  } else {
    return [x,y]
  }
}

function cellFocusRight() {
  coordinateTracker = moveCoordinatesRight(coordinateTracker)
  cellFocus(coordinatesToCell(coordinateTracker))
}

function cellFocusLeft() {
  coordinateTracker = moveCoordinatesLeft(coordinateTracker)
  cellFocus(coordinatesToCell(coordinateTracker))
}


