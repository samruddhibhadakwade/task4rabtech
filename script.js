const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀️ Light";
} else {
    themeToggle.textContent = "🌙 Dark";
}

// Toggle theme
themeToggle.addEventListener("click", function () {

    body.classList.toggle("dark-theme");

    const isDark = body.classList.contains("dark-theme");

    if (isDark) {
        themeToggle.textContent = "☀️ Light";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Dark";
        localStorage.setItem("theme", "light");
    }

});