// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.querySelector('#changeText').addEventListener('click', () => {
    let para = document.querySelector('#text');
    para.textContent = "Hello, developer!";
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.
let img = document.querySelector('.toggleImg');
let isVisible = true;
img.addEventListener('dblclick', () => {
    if (isVisible) {
        img.style.opacity = "0";
    } else {
        img.style.opacity = "1";
    }
    isVisible = !isVisible;
})

// Task 3: Add a mouseover event listener to an element that changes its background color.
let box = document.querySelector(".box");
let bgChangeButton = document.querySelector(".changeBg")
bgChangeButton.addEventListener('mouseover', () => {
    box.style.backgroundColor = "green";
})

// Task 4: Add a mouseout event listener to an element that resets its background color.
bgChangeButton.addEventListener('mouseout', () => {
    box.style.backgroundColor = "red";
})

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let logInput = document.querySelector("#logInput");
logInput.addEventListener("keydown", (event) => {
    console.log(event.target.value)
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
logInput.addEventListener("keyup", (event) => {
    console.log(event.target.value)
})

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let submitBtn = document.querySelector('#form')
submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(submitBtn);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    })
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
let fruitSelect = document.querySelector('#fruitSelect');
let selectedFruit = document.querySelector("#selectedFruit");
fruitSelect.addEventListener('change', (event) => {
    selectedFruit.textContent = `Selected fruit: ${event.target.value}`
})

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let itemsList = document.querySelector('#itemsList');
let clickedList = document.querySelector('#clickedList')
itemsList.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === "LI") {
        clickedList.textContent = `Clicked List: ${event.target.textContent}`
    }
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const itemList1 = document.querySelector("#itemList1");
const addItemButton1 = document.querySelector("#addItemButton1");

const addListItem = () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemList1.children.length + 1}`;
    itemList1.appendChild(newItem);
};

addItemButton1.addEventListener("click", addListItem);

itemList1.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "LI") {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});
