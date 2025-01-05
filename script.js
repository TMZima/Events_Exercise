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
});
