import axios from "axios";
Promise.all([
  axios.get("https://api.github.com/users/maybrito"),
  axios.get("https://api.github.com/users/maybrito/repos")
])
  .then((responses) => {
    console.log(responses[0].data), console.log(responses[1].data);
  })
  .catch((error) => console.log(error));