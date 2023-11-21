const apiUrl = 'https://api.github.com/users/';
const formEl = document.querySelector('.user-form');
const searchEl = document.querySelector('.search');
const mainEl = document.querySelector('main');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = searchEl.value;

  if (user) {
    getUser(user);
    searchEl.value = '';
  }
});

async function getUser(username) {
  try {
    const { data } = await axios(apiUrl + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username has been found.');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(apiUrl + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching user repos.');
  }
}

function createUserCard(user) {
  const cardHtml = `<div class="card">
    <div><img
            src="${user.avatar_url}"
            alt="" class="avatar"></div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio ?? 'User has no biography.'}</p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div class="repos"></div>
    </div>
</div>`;

  mainEl.innerHTML = cardHtml;
}

function createErrorCard(msg) {
  const cardHtml = `
    <div class="card">
    <h1>${msg}</h1>
    </div>`;

  mainEl.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector('.repos');
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}
