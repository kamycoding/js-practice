// const user = { name: "kamy", age: 27 };
// const name = user.name;
// const age = user.age;
// console.log(name, age);

// with destructuring
// const { name, age } = user;
// console.log(name, age);

// const colors = ["red", "green", "blue"];
// const first = colors[0];
// console.log(first);
// const [first, kamy] = colors;
// console.log(first, kamy);

// const customer = {
//   id: 1,
//   f_name: "kamy",
//   l_name: "coding",
//   age: 27,
// };

// const { f_name, age } = customer;
// console.log(f_name, age);

// const customers = [
//   { id: 1, f_name: "Abby", age: 32 },
//   { id: 2, f_name: "Jerry", age: 64 },
//   { id: 3, f_name: "Dianna", age: 22 },
// ];
// const [firstCustomer, secoundCustomer] = customers;
// console.log(firstCustomer, secoundCustomer);
// const users = [
//   { name: "Ali", age: 25, city: "Tehran" },
//   { name: "Sara", age: 22, city: "Shiraz" },
// ];
// const [{ name }, { city }] = users;
// console.log(name, city);

const user = { name: "kamy" };
const { age = 20, name } = user;
console.log({ age, name });
