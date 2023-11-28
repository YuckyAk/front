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

var fam = document.getElementById('fam')
fam.addEventListener('click',function(){
    fetch('http://127.0.0.1:8000/families')
.then(response => response.json())
.then(familis => {
const plantsSection = document.querySelector('.featured-plants');
const mainsection = document.querySelector('main')
console.log(mainsection)
plantsSection.remove()
let plantsSectionnew = document.createElement('section')
plantsSectionnew.classList.add('featured-plants')
mainsection.appendChild(plantsSectionnew)
familis.forEach(familis => {
    const plantCard = document.createElement('div');
    plantCard.className = 'plant-card';
    plantCard.innerHTML = `
    <h3>${familis.name}</h3>
    <p>${familis.description}</p>
    `;
    plantsSectionnew.appendChild(plantCard);
})
})
})

var main = document.getElementById('main')
main.addEventListener('click',function(){
    fetch('http://127.0.0.1:8000/plants')
    .then(response => response.json())
    .then(plants => {
    const plantsSection = document.querySelector('.featured-plants');
    plantsSection.remove()
    let plantsSectionnew = document.createElement('section')
    const mainsection = document.querySelector('main')
    plantsSectionnew.classList.add('featured-plants')
    mainsection.appendChild(plantsSectionnew)
    plants.forEach(plant => {
    const plantCard = document.createElement('div');
    plantCard.className = 'plant-card';
    const plantImg = document.createElement('img');
    plantCard.innerHTML = `
    <img src=${plant.img}>
    <h3>${plant.name}</h3>
    <p>${plant.description}</p>
    `;
    plantsSectionnew.appendChild(plantCard);
    plantsSectionnew.appendChild(plantImg);
    });
    })
})