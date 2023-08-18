import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
// const input = get('[name="drink"]');
const test = get(".test");

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  // console.log(test.value);
  const value = test.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
