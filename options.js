const submitBtn = document.getElementById("save-btn");
const nameInput = document.getElementById("name-input");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value;

  chrome.storage.sync.set({ name }).then(() => {
    console.log("Value is set");
  });

  chrome.storage.sync.get(["name"]).then((result) => {
    console.log("Value currently is " + result.key);
  });
});
