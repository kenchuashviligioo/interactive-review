const numbers = document.querySelectorAll(".circle");
const submitbtn = document.querySelector("button");

const closeBtn = document.querySelector("span");
const modalElement = document.querySelector("#modal");

let selectednum = null;

for (let num of numbers) {
  num.addEventListener("click", () => {
    removestyles();
    num.classList.add("selected");
    selectednum = num.textContent;
  });
}
submitbtn.addEventListener("click", () => {
  if (selectednum == null) {
    modalElement.classList.remove("hidden-2");
  } else {
    window.localStorage.setItem("selectednumber", selectednum);
    window.open("./thanks.html", "_self");
  }
});

function removestyles() {
  for (let item of numbers) {
    item.classList.remove("selected");
  }
}

closeBtn.addEventListener("click", () => {
  modalElement.classList.add("hidden-2");
});
