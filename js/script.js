fetch('http://127.0.0.1:8000/plants')
.then(response => response.json())
.then(plants => {
const plantsSection = document.querySelector('.featured-plants');
console.log(plants)
plants.forEach(plant => {
const plantCard = document.createElement('div');
plantCard.className = 'plant-card';
const plantImg = document.createElement('img');
plantCard.innerHTML = `
<img src=${plant.img}>
<h3>${plant.name}</h3>
<p>${plant.description}</p>
`;
plantsSection.appendChild(plantCard);
plantsSection.appendChild(plantImg);
});
})