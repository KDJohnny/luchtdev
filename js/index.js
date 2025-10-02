const themeToggle = document.getElementById('theme-toggle');

// Set the initial state based on the default theme
themeToggle.checked = document.body.classList.contains('dark-theme');

// Toggle the theme on change
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        body.classList.remove("sidebar-open");
    } else {
        sidebar.style.width = "250px";
        body.classList.add("sidebar-open");
    }
}
