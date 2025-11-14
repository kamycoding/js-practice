const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=1");
xhr.send();
const name = "kamycoding"