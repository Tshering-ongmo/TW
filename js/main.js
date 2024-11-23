//Navbar
//Header
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const nav = document.getElementById('nav');
    const overlay = document.querySelector('.overlay');

    menu.addEventListener('click', () => {
        menu.classList.toggle('clicked');
        nav.classList.toggle('show');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('clicked');
        nav.classList.remove('show');
        overlay.classList.remove('show');
    });
});

//Intro-section-INDEX
function filterCourses() {
        const keyword = document.getElementById("searchInput").value.toLowerCase();
        const dropdownItems = document.querySelectorAll("#dropdownMenu .dropdown-item");

        dropdownItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(keyword) ? "block" : "none";
        });
    }

    function performSearch() {
        const keyword = document.getElementById("searchInput").value;
        if (keyword.trim() === "") {
            alert("Please enter a keyword to search.");
            return;
        }
        alert(`Searching for "${keyword}"...`);
        // Add actual search functionality here
    }

// Vision-Mission
document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const visionBtn = document.getElementById('vision-btn');
    const missionBtn = document.getElementById('mission-btn');
    const visionContent = document.getElementById('vision-content');
    const missionContent = document.getElementById('mission-content');

    // Add event listeners to buttons
    visionBtn.addEventListener('click', () => {
        // Show vision content
        visionContent.classList.add('active');
        visionContent.classList.remove('d-none');
        // Hide mission content
        missionContent.classList.remove('active');
        missionContent.classList.add('d-none');
        // Update button states
        visionBtn.classList.add('active');
        missionBtn.classList.remove('active');
    });

    missionBtn.addEventListener('click', () => {
        // Show mission content
        missionContent.classList.add('active');
        missionContent.classList.remove('d-none');
        // Hide vision content
        visionContent.classList.remove('active');
        visionContent.classList.add('d-none');
        // Update button states
        missionBtn.classList.add('active');
        visionBtn.classList.remove('active');
    });
});