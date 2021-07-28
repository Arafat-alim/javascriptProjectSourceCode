console.log("Script file added");

const APIURL = "https://api.github.com/users/";
const username = "arafat-alim";
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const res = await axios(APIURL + username);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

getUser(username);
