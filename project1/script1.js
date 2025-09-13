const getJokeBtn = document.getElementById("get-joke-btn");
const nextJokeBtn = document.getElementById("next-joke-btn");
const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");

async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const jokeData = await response.json();
    return jokeData;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
}

// Function to display the joke in the DOM
async function displayJoke() {
  setupEl.textContent = "Loading joke...";
  punchlineEl.textContent = "";

  const joke = await getJoke();

  if (joke) {
    setupEl.textContent = joke.setup;
    punchlineEl.textContent = joke.punchline;
    nextJokeBtn.disabled = false;
  } else {
    setupEl.textContent = "Couldn't fetch a joke, try again!";
    punchlineEl.textContent = "";
    nextJokeBtn.disabled = true;
  }
}

// Event listeners
getJokeBtn.addEventListener("click", displayJoke);
nextJokeBtn.addEventListener("click", displayJoke);
