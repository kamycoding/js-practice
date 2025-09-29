//* Setter and Getter

const data = {
  firstName: "sog",
  lastName: "design",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
data.firstName = "kamy";
data.lastName = "coding";

console.log(data.fullName);
