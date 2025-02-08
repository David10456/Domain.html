
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






<header>
<h1>Hardware Engineering</h1>
</header>
<main>
<section>
    <p>Learn about the design, development, and testing of computer hardware.</p>
    <p>Topics covered include:</p>
    <ul>
        <li><a href="#">Computer architecture</a></li>
        <li><a href="#">Digital logic design</a></li>
        <li><a href="#">Microprocessors and embedded systems</a></li>
    </ul>
</section>
</main>