document.getElementById('githubForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    fetch('https://api.github.com/users/${username}/repos')
        .then(response => response.json())
        .then(repositories => {
            const repositoriesSection = document.getElementById('repositories');
            repositoriesSection.innerHTML = '<h2>Repositories:</h2>';
            repositories.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.innerHTML = <p><strong>${repo.name}</strong>: ${repo.description || 'No description available'}</p>;
                repositoriesSection.appendChild(repoElement);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});