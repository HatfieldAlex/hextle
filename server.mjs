import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

const PORT = process.env.PORT //|| 5500; //comment out/in for if in production/testing envrionments

//import { LOCAL_CONFIG_API_KEY } from './config.mjs'; //comment out/in for if in production/testing envrionments



//route handler for checking if word is valid 
app.post('/word-exists', async (req, res) => {

  const apiKey = process.env.API_KEY //|| LOCAL_CONFIG_API_KEY //uncomment for production environment 
  console.log(apiKey)

  //taking the input from the request
  const word = req.query.input
  //making API call
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, {
      method: 'GET',
      headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
      }
  })


  if (response.ok) {
    const jsonResponse = await response.json();
    res.send(jsonResponse)
  }
  } catch(error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
}
})



import {generate} from "random-words"; // using the random-word package

//route handler for finding new word 
app.get('/random-word', (req,res) => {
  let response = generate({ minLength: 6, maxLength: 6 }) 
  res.json({ word: response });

})

  //ensure server is running
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


