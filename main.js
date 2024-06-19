const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");
const diceBtn = document.getElementById("dice");

// With Async/Await
const fetchRandomAdvice = async () => {
  const response = await fetch("	https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
};

// With Promise
// const fetchRandomAdvice = () => {
//   return new Promise((resolve, reject) => {
//     fetch("	https://api.adviceslip.com/advice")
//       .then((response) => {
//         if (response) {
//           return response.json();
//         } else {
//           throw new Error("Error! Could Not Fetch Data");
//         }
//       })
//       .then((data) => resolve(data))
//       .catch((err) => reject(err));
//   });
// };

// With callbacks
// function fetchRandomAdvice(successCallback, failureCallback) {
//   fetch("	https://api.adviceslip.com/advice")
//     .then((response) => {
//       if (response) {
//         return response.json();
//       } else {
//         throw new Error("Error! Could Not Fetch Data");
//       }
//     })
//     .then((data) => successCallback(data))
//     .catch((err) => failureCallback(err));
// }

// fetchRandomAdvice(
//   (data) => {
//     adviceText.textContent = data.slip.advice;
//     adviceId.textContent = `Advice #${data.slip.id}`;
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

try {
  fetchRandomAdvice()
    .then((data) => {
      setAdviceText(data);
    })
    .catch((err) => console.log(err));
} catch (error) {
  throw new Error();
}

const setAdviceText = (data) => {
  adviceText.textContent = `"${data.slip.advice}"`;
  adviceId.textContent = `Advice #${data.slip.id}`;
};

diceBtn.addEventListener("click", () => {
  try {
    fetchRandomAdvice()
      .then((data) => {
        setAdviceText(data);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    throw new Error();
  }
  adviceText.innerText = "loading...";
});
