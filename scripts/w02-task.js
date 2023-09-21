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
const imageElement = document.getElementById('profile');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
const arrayVariable = ['Fried Chicken', 'Baked Chicken', 'Roasted Chicken', 'Barbequed Chicken', 'Smoked Chicken', 'Grilled Chicken'];
foodElement.innerText = arrayVariable;
let newFood = 'Chicken Curry';
arrayVariable.push(newFood);
foodElement.innerHTML += `<br>${arrayVariable}`;
arrayVariable.shift();
foodElement.innerHTML += `<br>${arrayVariable}`;
arrayVariable.pop()
foodElement.innerHTML += `<br>${arrayVariable}`;
