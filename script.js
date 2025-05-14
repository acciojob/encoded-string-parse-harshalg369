// Function to parse the encoded string
function parseCode(encodedStr) {
  // Split on one or more zeros using regex
  const parts = encodedStr.split(/0+/);
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
}

// Handle button click and display result
function handleParse() {
  const input = document.getElementById("encodedInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (input === "") {
    resultDiv.textContent = "Please enter an encoded string.";
    return;
  }

  const parsed = parseCode(input);
  resultDiv.textContent = `✅ First Name: ${parsed.firstName}, Last Name: ${parsed.lastName}, ID: ${parsed.id}`;
}
