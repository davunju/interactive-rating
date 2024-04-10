const id = (id) => document.getElementById(id);
const buttons = document.querySelectorAll("#btn");

const rating = id("rating"),
  popup = id("thankPopup"),
  rate = id("rate"),
  button = id("submitBtn");

buttons.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    const rateNum = number.textContent;
    rate.textContent = rateNum;
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  rating.classList.add("hidden");
  popup.classList.remove("hidden");
});
