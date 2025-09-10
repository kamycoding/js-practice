const provincesData = {
  nordrhein_westfalen: ["Köln", "Düsseldorf", "Dortmund", "Essen"],
  bayern: ["München", "Nürnberg", "Augsburg", "Würzburg"],
  hessen: ["Frankfurt am Main", "Wiesbaden", "Darmstadt"],
};

const userProvnice = prompt("Enter Your state :");
const cleanUserProvince = userProvnice.trim().toLowerCase();
const foundCities = provincesData[cleanUserProvince];
console.log(foundCities);
if (foundCities === undefined) {
  alert("State not found!");
} else {
  alert(`List of Cities : ${foundCities}`);
}
