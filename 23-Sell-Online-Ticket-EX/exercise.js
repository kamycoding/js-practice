const provincesData = {
  nordrhein_westfalen: ["Köln", "Düsseldorf", "Dortmund", "Essen"],
  bayern: ["München", "Nürnberg", "Augsburg", "Würzburg"],
  hessen: ["Frankfurt am Main", "Wiesbaden", "Darmstadt"],
};

//* Way 1
// const userProvnice = prompt("Enter Your state :");
// const cleanUserProvince = userProvnice.trim().toLowerCase();
// const foundCities = provincesData[cleanUserProvince];
// console.log(foundCities);
// if (foundCities === undefined) {
//   alert("State not found!");
// } else {
//   alert(`List of Cities : ${foundCities}`);
// }

//* Way 2

const userProvince = prompt("Enter your state:").trim().toLowerCase();
if (!userProvince) {
  alert("Please enter a state name!");
} else if (!provincesData[userProvince]) {
  alert("State not found! " + Object.keys(provincesData).join(", "));
} else {
  const cities = provincesData[userProvince].join(", ");
  alert(`List of Cities: ${cities}`);
  console.log(provincesData[userProvince]);
}
