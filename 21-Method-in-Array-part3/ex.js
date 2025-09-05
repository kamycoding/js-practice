const articles = [
  "What is HTML?",
  "What is PYTHON?",
  "What is TAILEIND?",
  "Why use Javascript ?",
  "What is CSS?",
  "What is REACT?",
  "What is Javascript?",
];
const userSearch = prompt("Search item...");
if (userSearch.trim().length === 0) {
  alert("Please type anything :)");
} else {
  const searchResult = articles.filter(function (article) {
    return article.includes(userSearch);
  });

  if (searchResult.length === 0) {
    alert("Nothing !");
  } else {
    let resault = "";
    let i = 1;
    searchResult.forEach(function (item) {
      resault += i + "." + item + "\n";
      i++;
    });
    alert(resault);
  }
}
