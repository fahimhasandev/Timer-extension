const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The current time is ${currentTime}`;

// show text like TIME or NEW
chrome.action.setBadgeText(
  {
    text: "NEW",
  },
  () => {
    console.log(`Finished setting badged text.`);
  }
);

// git commit --date="2025-month-day 14:00:00" -m "actions page set up"
