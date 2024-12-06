const themeToggle = document.getElementById('theme-toggle');

// Set the initial state based on the default theme
themeToggle.checked = document.body.classList.contains('dark-theme');

// Toggle the theme on change
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});