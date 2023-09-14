async function checkIfInDictionary(input) {
  try {
    //const baseUrl = 'http://localhost:5500' //comment out/in for if in production/testing envrionments
    const baseUrl = 'https://hextle-public-a93eb277074f.herokuapp.com' //comment out/in for if in production/testing envrionments

    const response = await fetch(`${baseUrl}/word-exists?input=${input}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (response.ok) {
      const jsonResponse = await response.json()
      return jsonResponse.valid
    }

  } catch(error) {
    console.log(error)
  }

}


























/*
function checkIfInDictionary(word) {

    fetch("/check-word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("word true or false (api call):" + data.exists)
      return data.exists}) //trouble could lie here
    }
  


checkIfInDictionary("dragon")
*/




/*THE BELOW WORKS (sort of) - or at least serves as a good benchmark
//This function uses API to check if an input is in the dictionary or not. If not in dictionary, returns false, if it is, returns true 
//import { LOCAL_API_KEY } from './config.js'; //importing API_KEY from file ignored by git
let LOCAL_API_KEY;
try {
  const config = require('./config.js');
  LOCAL_API_KEY = config.LOCAL_CONFIG_API_KEY;
} catch (error) {
  console.warn('Could not load config.js:', error);
  // Set to null or some default value if necessary
  LOCAL_API_KEY = null;
}


//assigning key that will work for both local environemnt, and on Heroku
API_KEY_DUAL = process.env.API_KEY || LOCAL_API_KEY

//actual function
async function checkIfInDictionary(word) {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/dictionary?word=' + word, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': API_KEY_DUAL 
            }
        });

        if (!response.ok) {
            throw new Error('Response not okay');
        }

        const result = await response.json();
        return result.valid
        //console.log(result.valid)
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}
*/