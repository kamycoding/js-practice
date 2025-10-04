const searchInput = document.getElementById("search-input");
const searchHandler = (event) => {
  const searchValue = event.target.value;
  console.log(searchValue);
};
searchInput.addEventListener("keyup", searchHandler);
