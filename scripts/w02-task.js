/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Mahonri Reynolds';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/profile.png'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByTagName("img")[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
const anArrayOfFavoriteFoods = ['Fried Chicken', 'Baked Chicken', 'Roasted Chicken', 'Barbequed Chicken', 'Smoked Chicken', 'Grilled Chicken'];
foodElement.innerText = anArrayOfFavoriteFoods;
let newFood = 'Chicken Curry';
anArrayOfFavoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${anArrayOfFavoriteFoods}`;
anArrayOfFavoriteFoods.shift();
foodElement.innerHTML += `<br>${anArrayOfFavoriteFoods}`;
anArrayOfFavoriteFoods.pop()
foodElement.innerHTML += `<br>${anArrayOfFavoriteFoods}`;
