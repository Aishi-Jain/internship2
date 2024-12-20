// JavaScript for interactivity
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const loadMoreButton = document.getElementById("load-more");
    const postsGrid = document.getElementById("posts-grid");
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Load More Posts
    loadMoreButton.addEventListener("click", () => {
        const newPosts = [
            {
                img: "https://i.pinimg.com/736x/d1/65/12/d1651205013858cad719ccf608a367ae.jpg",
                title: "The great excavation lay far from the plaza",
                date: "January 10, 2019 · Photo · Stories",
                description: "Far from the plaza, an untamed stretch of ground awaited...",
            },
            {
                img: "https://i.pinimg.com/236x/bb/57/58/bb5758b94ca31b79ff490c6b75c5d497.jpg",
                title: "Post with tall image",
                date: "February 2, 2019 · Travel",
                description: "Tall images can capture the scene's beauty in a unique way...",
            },
        ];

        newPosts.forEach((post) => {
            const article = document.createElement("article");
            article.innerHTML = `
                <img src="${post.img}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.date}</p>
                <p>${post.description}</p>
                <a href="#">Read more →</a>
            `;
            postsGrid.appendChild(article);
        });
    });

    // Scroll to Top Functionality
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
