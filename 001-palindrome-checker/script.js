const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const text = inputText.value.trim();

    if (text === "") {
        alert("Please input a value");
        return;
    }

    const formattedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedText = formattedText.split("").reverse().join("");

    if (formattedText === reversedText) {
        resultDiv.textContent = `${text} is a palindrome!`;
        resultDiv.classList.add("success");
        resultDiv.classList.remove("fail");
    } else {
        resultDiv.textContent = `${text} is not a palindrome.`;
        resultDiv.classList.add("fail");
        resultDiv.classList.remove("success");
    }
});