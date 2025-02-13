const bucketList = [
    "Go on a road trip",
    "Watch the sunset together",
    "Have a picnic in the park",
    "Try a new restaurant",
    "Take a dance class together",
    "Gate crash a wedding",
    "Write each other love letters the old fashioned way",
    "Visit a new country",
    "Go camping under the stars",
    "Take a spontaneous weekend getaway",
    "Ride bikes in a scenic park",
    "Go horseback riding together",
    "Try zip-lining together",
    "Explore a hidden hiking trail",
    "Have a breakfast-in-bed morning",
    "Go on a train journey just for the experience",
    "Try making homemade pizza from scratch",
    "Do a restaurant-hopping date",
    "Make cocktails and have a taste test",
    "Have a candlelit dinner at home",
    "Slow dance in the kitchen",
    "Write love letters to each other",
    "Recreate our first date at home",
    "Go ice skating in the winter",
    "Visit a sunflower or lavender field in spring",
    "Try an escape room challenge",
    "Do a karaoke night",
    "Plan your dream home together",
    "Volunteer at a charity together",
    "Make a time capsule and bury it",
    "Have a lazy Sunday morning with breakfast in bed",
    "Have a spa day at home",
    "Do a digital detox day",
    "Read a book together and discuss it",
    "Make a playlist of songs that remind you of each other",
    "Create a scrapbook of your memories together"
];

const todoList = document.getElementById("todo-list");
const savedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

bucketList.forEach((item, index) => {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = savedItems.includes(index);
    if (checkbox.checked) {
        listItem.classList.add("completed");
    }

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            listItem.classList.add("completed");
            savedItems.push(index);
        } else {
            listItem.classList.remove("completed");
            savedItems.splice(savedItems.indexOf(index), 1);
        }
        localStorage.setItem("checkedItems", JSON.stringify(savedItems));
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(" " + item));
    todoList.appendChild(listItem);
});
