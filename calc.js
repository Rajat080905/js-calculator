document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operatorPressed = false;

    function updateDisplay() {
        output.textContent = currentInput || "0";
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            // Clear button
            if (button.classList.contains("clear")) {
                currentInput = "";
                updateDisplay();
                return;
            }

            // Equal button
            if (button.classList.contains("equal")) {
                try {
                    currentInput = eval(currentInput).toString();
                    updateDisplay();
                } catch {
                    currentInput = "";
                    updateDisplay();
                    output.textContent = "Error";
                }
                return;
            }

            // Prevent multiple operators
            if ("+-*/%".includes(value) && operatorPressed) return;
            operatorPressed = "+-*/%".includes(value);

            currentInput += value;
            updateDisplay();
        });
    });

    updateDisplay();
});
