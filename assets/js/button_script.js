document.addEventListener("DOMContentLoaded", function () {
const tabButtons = document.querySelectorAll(".tab-button");
const contentSections = document.querySelectorAll(".content");

tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
    // Hide all content sections
    contentSections.forEach((section) => {
        section.style.display = "none";
    });

    // Show the selected content
    const contentId = this.getAttribute("data-content");
    document.getElementById(contentId).style.display = "block";
    });
});

// Show the first content section by default
document.getElementById("page1").style.display = "block";
});