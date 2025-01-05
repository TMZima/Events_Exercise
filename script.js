document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.querySelector("#box-container");
  const newBoxBtn = document.querySelector("#new-box-button");
  const colorForm = document.querySelector("#color-form");
  const colorInput = document.querySelector("#color-input");

  let boxColor = null; // Stores the color for boxes submitted from the form
  let boxId = 0; // Counter for assigning ID to boxes

  colorForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents default behavior of refreshing the page

    const newBoxColor = colorInput.value;
    const boxes = document.querySelectorAll(".box");

    for (let box of boxes) {
      box.style.backgoundColor = newBoxColor;
    }

    colorInput.value = ""; // Resets the input field after it's submitted
    boxColor = newBoxColor; // Sets the box color to the new color that's submitted
  });

  function addNewBox() {
    const box = document.createElement("div");
    box.setAttribute("data-box-id", boxId.toString()); // Converts boxId to a string and stores it to the data attribute.
    box.textContent = `Box ${boxId}`; // Displays box ID as text
    box.className = "box"; // Sets the CSS class to "box"
    box.style.backgroundColor = boxColor; // Sets the box's background color to the last submitted box color
    boxContainer.appendChild(box); // Appends the new box to the box container element as it's child

    boxId++; // Increments the counter to keep unique id's for additional new boxes.
  }
});
