const postsPerPage = 3; // Number of posts per page
const posts = [
    "Post 1: Exploring the Universe",
    "Post 2: Delicious Recipes for Summer",
    "Post 3: Tips for Productive Remote Work",
    "Post 4: The Art of Mindfulness",
    "Post 5: Traveling on a Budget",
    "Post 6: Introduction to Coding",
    "Post 7: Mastering the Guitar",
    "Post 8: Building Your Personal Brand",
    "Post 9: The Science of Happiness",
    "Post 10: Creating Stunning Digital Art",
]; // Sample posts

const postList = document.getElementById("post-list");
const pagination = document.getElementById("pagination");

function displayPosts(pageNumber) {
    postList.innerHTML = "";
    const startIndex = (pageNumber - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    for (let i = startIndex; i < endIndex && i < posts.length; i++) {
        const listItem = document.createElement("li");
        listItem.className = "post-item";
        listItem.textContent = posts[i];
        postList.appendChild(listItem);
    }
}

function createPaginationButtons() {
    const pageCount = Math.ceil(posts.length / postsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("pagination-button");

        button.addEventListener("click", function () {
            displayPosts(i);
        });

        pagination.appendChild(button);
    }
}

// Initialize
displayPosts(1);
createPaginationButtons();
