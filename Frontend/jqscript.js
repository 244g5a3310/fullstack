function getJoke() {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}
function displayJoke(jokeData) {
  const jokeDiv = document.getElementById("jokeContainer");
  jokeDiv.innerHTML = `
    <div style="border: 1px solid #ccc; padding: 15px; margin-top: 20px; background-color: #f9f9f9;">
      <p><strong>Setup:</strong> ${jokeData.setup}</p>
      <p><strong>Punchline:</strong> ${jokeData.punchline}</p>
    </div>
  `;
}
function showError() {
  const jokeDiv = document.getElementById("jokeContainer");
  jokeDiv.innerHTML = `<p style="color: red;">Couldn’t fetch a joke, try again!</p>`;
}
document.getElementById("getJokeBtn").addEventListener("click", () => {
  getJoke()
    .then(displayJoke)
    .catch(showError);
});
document.getElementById("nextJokeBtn").addEventListener("click", () => {
  getJoke()
    .then(displayJoke)
    .catch(showError);
});