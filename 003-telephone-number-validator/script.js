document.getElementById('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  const resultsDiv = document.getElementById('results-div');

  const validPatterns = [
      /^1?\s?\d{3}-\d{3}-\d{4}$/,           // 1 555-555-5555 or 555-555-5555
      /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,     // 1 (555) 555-5555 or (555) 555-5555
      /^1?\s?\d{10}$/,                      // 15555555555 or 5555555555
      /^1?\s?\d{3}\s\d{3}\s\d{4}$/,         // 1 555 555 5555 or 555 555 5555
  ];

  const isValid = validPatterns.some(pattern => pattern.test(userInput));
  const hasValue = userInput.trim().length > 0;

  if (!hasValue) {
      alert("Please provide a phone number");
  } else if (isValid) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('results-div').textContent = '';
});