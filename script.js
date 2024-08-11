function getAndDisplayWordData() {
    // Collect word from input box
    let userInput = document.getElementById('word-search-input').value.trim();
  
    // Check if the userInput is empty
    if (!userInput) {
      alert("Please enter a word to search for!");
      return;
    }
  
    // Send a request using axios library to look up word via dictionary API
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
      .then(response => {
        let wordData = response.data[0];
        let word = wordData.word;
        let pronunciation = wordData.phonetic || "No pronunciation available";
        let definition = wordData.meanings[0].definitions[0].definition;
  
        // Hide the "no word found" message, if it was previously displayed
        document.getElementById('no-word-found').style.display = 'none';
  
        // Update the page with the word data
        document.getElementById('word').innerText = word;
        document.getElementById('pronunciation').innerText = pronunciation;
        document.getElementById('definition').innerText = definition;
      })
      .catch(error => {
        // Display "no word found" message if there is an error
        document.getElementById('no-word-found').style.display = 'block';
  
        // Clear the previous word data
        document.getElementById('word').innerText = '';
        document.getElementById('pronunciation').innerText = '';
        document.getElementById('definition').innerText = '';
      });
  }
  