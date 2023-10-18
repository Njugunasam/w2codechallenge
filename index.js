document.addEventListener("DOMContentLoaded", function () {
  fetch("  http://localhost:3000/characters/")
    .then(response => response.json())
    .then(data => {
      showAllcharacters(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
//difine show all characters
function showAllcharacters(data) {
  const animalList = document.getElementById('animal-list');

  data.forEach(animal => {
    const animalDiv = document.createElement('div');
    animalDiv.className = 'animal-details';

    const animalImage = document.createElement('img');
animalImage.src = animal.image;
animalImage.alt = animal.name;
animalImage.className = 'animal-image'; 

    const voteCount = document.createElement('p');
    voteCount.textContent = `Votes: ${animal.votes}`;

    const voteButton = document.createElement('button');
    voteButton.textContent = 'Vote';
    voteButton.addEventListener('click', () => {
      animal.votes++;
      voteCount.textContent = `Votes: ${animal.votes}`;
    });

    animalDiv.appendChild(animalImage);
    animalDiv.appendChild(voteCount);
    animalDiv.appendChild(voteButton);
    animalList.appendChild(animalDiv);
  });
}