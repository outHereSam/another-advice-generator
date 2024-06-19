const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");
const diceBtn = document.getElementById("dice");

// Load random advice when the page first loads
const fetchRandomAdvice = async () => {
  const response = await fetch("	https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
};

try {
  fetchRandomAdvice()
    .then((data) => {
      adviceText.textContent = data.slip.advice;
      adviceId.textContent = `Advice #${data.slip.id}`;
      console.log(data);
    })
    .catch((err) => console.log(err));
} catch (error) {
  throw new Error();
}

diceBtn.addEventListener("click", () => {
  try {
    fetchRandomAdvice()
      .then((data) => {
        adviceText.textContent = data.slip.advice;
        adviceId.textContent = `Advice #${data.slip.id}`;
        console.log(data);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    throw new Error();
  }
  adviceText.innerText = "loading...";
});
