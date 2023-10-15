// Define initial animal details
const initialAnimalList = [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://bestanimations.com/gifs/cute-bird-act-without-expectation.html",
      "votes": 0
    },
    {
      "id": 2,
      "name": "Mx. Monkey",
      "image": "https://bestanimations.com/gifs/Pretty-Monkey.html",
      "votes": 0
    },
    {
      "id": 3,
      "name": "Ms. Zebra",
      "image": "https://bestanimations.com/gifs/zebra-running.html",
      "votes": 0
    },
    {
      "id": 4,
      "name": "Dr. Lion",
      "image": "https://bestanimations.com/gifs/Lion-Running-In-Jungle.html",
      "votes": 0
    },
    {
      "id": 5,
      "name": "Mme. Panda",
      "image": "https://bestanimations.com/gifs/Cute-Panda-Bear-Cartoon.html",
      "votes": 0
    }
  ];
  
  // Function to display all animal details
  function showAllAnimalDetails() {
    const animalList = document.getElementById('animal-list');
  
    initialAnimalList.forEach(animal => {
      const animalDiv = document.createElement('div');
      animalDiv.className = 'animal-details';
  
      const animalImage = document.createElement('img');
      animalImage.src = animal.image;
      animalImage.alt = animal.name;
  
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
  
  // Fetch animal details
  document.addEventListener("DOMContentLoaded", function () {
    showAllAnimalDetails();
  });