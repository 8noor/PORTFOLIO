let lastScrollTop = 0; // To track the previous scroll position
const header = document.querySelector("header"); // Select the header element
const timeText = document.querySelector(".time"); // Select the time display element
const yearText = document.getElementById("year"); // Select the year display element

// Add an event listener for the scroll event
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Hide the header when scrolling down
    header.classList.add("hidden");
  } else {
    // Show the header when scrolling up
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});

// Get the current time and display it in Pakistan's timezone (PST)
const now = new Date();
const pakistanTime = now.toLocaleString("en-US", { timeZone: "Asia/Karachi" });
const [date, time] = pakistanTime.split(", ");
timeText.textContent = `${time} GMT+5`; // Format the time display for Pakistan (GMT+5)

// Get the current year and display it
const year = new Date().getFullYear();
if (yearText) {
  yearText.textContent = year;
}
