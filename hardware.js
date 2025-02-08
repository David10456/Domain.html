
// Add event listener to course cards
document.addEventListener("DOMContentLoaded", function () {
    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach((card) => {
        card.addEventListener("click", (e) => {
            const courseName = card.querySelector("h1").textContent;
            const coursePage = courseName.toLowerCase().replace(" ", "-") + ".html";
            window.location.href = coursePage;
        });
    });
});
