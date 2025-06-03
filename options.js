console.log("Option page");

const submitBtn = document.getElementById("save-btn");

submitBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("name-input");
  console.log(nameInput.value);
});
