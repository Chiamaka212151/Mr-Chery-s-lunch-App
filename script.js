// FUNCTION:
// Runs when the user clicks an order button.
function orderFood(place) {
  if (place === "Sun's Pizza") {
    document.getElementById("pizza-message").textContent =
      "Order started for Sun's Pizza! Your fresh pizza is on the way.";
  }
}
if (place === "Sun's Pizza")