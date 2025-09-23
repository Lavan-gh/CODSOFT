const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if(button.id === "clear") {
      currentInput = "";
      display.value = "";
    } else if(button.id === "equal") {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Optional: Keyboard support
document.addEventListener("keydown", (e) => {
  if((e.key >= 0 && e.key <= 9) || "+-*/.".includes(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  } else if(e.key === "Enter") {
    try {
      display.value = eval(currentInput);
      currentInput = display.value;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } else if(e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if(e.key === "c" || e.key === "C") {
    currentInput = "";
    display.value = "";
  }
});
