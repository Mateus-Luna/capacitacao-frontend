import axios from "axios";
axios
  .get("https://api.github.com/users/maybrito")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => console.log(error));