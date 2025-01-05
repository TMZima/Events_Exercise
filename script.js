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
      box.style.backgroundColor = newBoxColor;
    }

    colorInput.value = ""; // Resets the input field after it's submitted

    boxColor = newBoxColor; // Sets the box color to the new color that's submitted
  });

  function addNewBox() {
    // Create a new div element
    const box = document.createElement("div");

    // Set a data attribute 'data-box-id' with the current value of boxId converted to a string
    box.setAttribute("data-box-id", boxId.toString());

    // Set the text content of the box to display its ID
    box.textContent = `Box ${boxId}`;

    // Add the CSS class 'box' to the new div element
    box.className = "box";

    // Set the background color of the box to the last submitted box color
    box.style.backgroundColor = boxColor;

    // Append the new box to the container element with the ID 'box-container'
    boxContainer.appendChild(box);

    // Increment the boxId counter to ensure each new box has a unique ID
    boxId++;
  }

  // On clicking the "New Box" button, addNewBox() Method is called
  newBoxBtn.addEventListener("click", function () {
    addNewBox();
  });

  // document listener for double click. If the class list contains "box" delete selected box
  document.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.remove();
    }
  });

  // document listener for mouseover box. If the class list contains "box" display pageX and pageY as text content
  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.textContent = `X: ${e.pageX}, Y: ${e.pageY}`;
    }
  });

  // document listener for mouseout box. If the class list contains "box" return text display to original box ID
  document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("box")) {
      const originalBoxId = e.target.getAttribute("data-box-id"); // stores original box ID
      e.target.textContent = `Box ${originalBoxId}`; // sets text display to original box ID
    }
  });
});
