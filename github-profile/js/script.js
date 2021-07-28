console.log("Script file added");

const APIURL = "https://api.github.com/users/";
// const username = "arafat-alim";
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

//fetching user-data through an API
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    // console.log(res.data);
    createUserData(data);
    getRepo(username);
  } catch (err) {
    console.log(err);
    if (err.response.status == 404) {
      createErrData("No Profile with this username");
    }
  }
}

//fetching repo-data through an APi
async function getRepo(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created"); //lates repo will get
    addRepoToCard(data);
  } catch (err) {
    console.log(err);
  }
}

//input field
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

//Putting all the datas to my html
function createUserData(user) {
  const cardHtml = `
 <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt=""
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio}</p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos">
    
          </div>
        </div>
      </div>
    `;
  //   main.appendChild(cardHtml);
  main.innerHTML = cardHtml;
}

function addRepoToCard(repo) {
  const reposEl = document.getElementById("repos");

  repo.slice(0, 5).forEach((r) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repos");
    repoEl.href = r.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = r.name;

    reposEl.appendChild(repoEl);
  });
}

function createErrData(msg) {
  const cardHTM = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `;

  main.innerHTML = cardHTM;
}
