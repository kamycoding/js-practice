//* Error Handling
const makeString = (arr) => {
  console.log(arr.join(" "));
};

// makeString(["Hello", "world!"]);
try {
  makeString(13);
  console.log("Done!");
} catch (error) {
  console.log("Error:", error.message);
  throw "An error occurred";
} finally {
  //clean up function
  console.log("Final");
}
