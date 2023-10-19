//fetching data from db
document.addEventListener("DOMContentLoaded", function () { 
  fetch(" http://localhost:3000/characters") 
    .then(response => response.json()) 
    .then(data => { 
      showAllCharacters(data); 
    }) 
    .catch(error => { 
      console.error('Error fetching data:', error); 
    }); 
});
//define showallcharacters
function showAllCharacters(data) {
  const animals_namesContainer = document.getElementById('animal-names');
  const Animal_ImagesContainer = document.getElementById('animal-image');
  const voteButton = document.getElementById('vote-button');
  const voteCount = document.getElementById('vote-count');
  let currentAnimal = null;

  const namesRow = document.createElement('div'); 
  namesRow.style.display = 'flex';

  data.forEach(animal => {
    const animalName = document.createElement('p');
    animalName.textContent = animal.name;
    animalName.style.margin = '0 10px';

    animalName.addEventListener('click', () => {
      if (currentAnimal === animal) {
        Animal_ImagesContainer.innerHTML = '';
        currentAnimal = null;
      } else {
        const Animal_Images = document.createElement('img');
        Animal_Images.src = animal.image;
        Animal_Images.alt = animal.name;
        Animal_ImagesContainer.innerHTML = '';
        Animal_ImagesContainer.appendChild(Animal_Images);
        currentAnimal = animal;
        voteCount.textContent = `Votes: ${animal.votes}`;
      }
    });

    namesRow.appendChild(animalName);
  });

  animals_namesContainer.appendChild(namesRow);

  voteButton.addEventListener('click', () => {
    if (currentAnimal) {
      currentAnimal.votes++;
      voteCount.textContent = `Votes: ${currentAnimal.votes}`;
    }
  });
}
