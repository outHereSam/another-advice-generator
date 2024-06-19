const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");
const diceBtn = document.getElementById("dice");

// Load random advice when the page first loads
// const fetchRandomAdvice = async () => {
//   const response = await fetch("	https://api.adviceslip.com/advice");
//   const data = await response.json();
//   return data;
// };

// Trying with Promise
const fetchRandomAdvice = () => {
  return new Promise((resolve, reject) => {
    fetch("	https://api.adviceslip.com/advice")
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          throw new Error("Error! Could Not Fetch Data");
        }
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
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
