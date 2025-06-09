const submitBtn = document.getElementById("save-btn");
const nameInput = document.getElementById("name-input");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value;

  chrome.storage.sync.set({ name }).then(() => {
    console.log(name);
  });
});

chrome.storage.sync.get(["name"], (res) => {
  nameInput.value = res.name ?? "??";
});
