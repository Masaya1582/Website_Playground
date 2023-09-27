document.addEventListener("DOMContentLoaded", function () {
    const itemList = document.getElementById("item-list");
    const pushButton = document.getElementById("push-button");
    const popButton = document.getElementById("pop-button");
    const shiftButton = document.getElementById("shift-button");
    const unshiftButton = document.getElementById("unshift-button");

    // Initial list of items
    const items = ["Item 1", "Item 2", "Item 3"];

    // Function to update the list
    function updateList() {
        itemList.innerHTML = "";
        for (const item of items) {
            const li = document.createElement("li");
            li.textContent = item;
            itemList.appendChild(li);
        }
    }

    // Event listeners for array manipulation
    pushButton.addEventListener("click", function () {
        const newItem = `Item ${items.length + 1}`;
        items.push(newItem);
        updateList();
    });

    popButton.addEventListener("click", function () {
        items.pop();
        updateList();
    });

    shiftButton.addEventListener("click", function () {
        items.shift();
        updateList();
    });

    unshiftButton.addEventListener("click", function () {
        const newItem = `Item 0`;
        items.unshift(newItem);
        updateList();
    });

    // Initialize the list
    updateList();
});
