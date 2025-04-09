// Select elements
const jokeBtn = document.querySelector(".jokebtn");
const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".backBtn");
const jokeElem = document.getElementById("jokelem");

// Initial state
wrapper.style.display = "none";
backBtn.style.display = "none";

// Show joke on button click
jokeBtn.addEventListener("click", () => {
  jokeBtn.style.display = "none";
  backBtn.style.display = "block";

  fetch("https://icanhazdadjoke.com/slack")
    .then((res) => res.json())
    .then((data) => {
      const jokeText = data.attachments[0].text;
      wrapper.style.display = "flex";
      jokeElem.innerHTML = jokeText;
    })
    .catch((err) => {
      jokeElem.innerHTML = "Oops! Couldn't fetch a joke 😅";
      wrapper.style.display = "flex";
      console.error("Error fetching joke:", err);
    });
});

// Back button logic
backBtn.addEventListener("click", () => {
  wrapper.style.display = "none";
  jokeBtn.style.display = "flex";
  backBtn.style.display = "none";
});
