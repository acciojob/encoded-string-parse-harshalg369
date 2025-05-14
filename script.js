// Function to parse the encoded string
function parseCode(encodedStr) {
  const parts = encodedStr.split(/0+/); // Split by one or more zeros
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
}

// Handle the parsing and show the result
function handleParse() {
  const input = document.getElementById("encodedInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.textContent = "Please enter a valid encoded string.";
    return;
  }

  const result = parseCode(input);

  resultDiv.textContent = `First Name: ${result.firstName}, Last Name: ${result.lastName}, ID: ${result.id}`;
}
