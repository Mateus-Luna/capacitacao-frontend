fetch("https://api.github.com/users/maybrito").then((response) =>
  console.log(
    response.json().then((data) => {
      fetch(data.repos_url)
        .then((res) => res.json())
        .then((d) => console.log(d))
        .catch((error) => console.log(error));
    })
  )
);

async function start(){
    const response = await fetch("https://api.github.com/users/maybrito")
    const user = await response.json()
    const repos_response = await fetch(user.repos_url)
    const repos =  await repos_response.json()
    console.log(repos)
}
start();
