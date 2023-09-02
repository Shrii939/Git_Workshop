const body = document.body;
const nameParagraph = document.getElementById("name");
const navTitle = document.querySelector(".nav-title");
const osSpan = document.getElementById("os");
const themeToggle = document.getElementById("theme-toggle");

nameParagraph.addEventListener("input", function () {
  const newName = nameParagraph.innerText;
  navTitle.innerText = newName;
  document.title = newName;
});

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  const currentEmoji = themeToggle.innerText;
  themeToggle.innerText = currentEmoji === "☀️" ? "🌙" : "☀️";
});


 function init() {
  const osSpan = document.getElementById("os");
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) {
    osSpan.innerText = "Windows";
  } else if (userAgent.includes("mac")) {
    osSpan.innerText = "Mac";
  } else if (userAgent.includes("linux")) {
    osSpan.innerText = "Linux";
  } else if (userAgent.includes("android")) {
    osSpan.innerText = "Android";
  } else if (userAgent.includes("ios")) {
    osSpan.innerText = "iOS";
  } else {
    osSpan.innerText = "Unkown";
  }
};
