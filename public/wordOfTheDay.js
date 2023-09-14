let wordOfTheDay = ''

async function generateRandomSixLetterWord() {
    //const baseUrl = 'http://localhost:5500' //comment out/in for if in production/testing envrionments
    const baseUrl = 'https://hextle-public-a93eb277074f.herokuapp.com' //comment out/in for if in production/testing envrionments


  try {    
      const response = await fetch(`${baseUrl}/random-word`, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json" 
      }
  })
  console.log("response after fetch:" + response)

  if (response.ok) {
    
    const jsonResponse = await response.json();
    console.log("response after json formatting: ", jsonResponse)
    return jsonResponse;  // Assuming the server sends JSON

    

  }

  } catch (error) {
      console.log(error)
  }}



window.addEventListener('load', async function() {
  const response = await generateRandomSixLetterWord();
  console.log("response in eventlistener: ", response)
  const randomWord = response.word
  console.log("randomWord in eventlistener: ", randomWord)
  wordOfTheDay = randomWord.toUpperCase()
  console.log("wordOfTheDay in eventlistener: ", wordOfTheDay)
  

})

