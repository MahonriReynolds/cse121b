/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Mahonri Reynolds',
    photo: 'images/profile.png',
    favoriteFoods: ['chicken potstickers', 'chicken wings', 'chicken tacos', 'chicken brownies'],
    hobbies: ['javascript', 'html', 'css'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: 'San Diego, CA', length: '1 year'});
myProfile.placesLived.push({place: 'Northern CO', length: '13 year'});
myProfile.placesLived.push({place: 'Rexburg, ID', length: '8 year'});


/* DOM Manipulation - Output */

/* Name */

document.getElementById('name').textContent = myProfile.name;


/* Photo with attributes */

document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(f => {
    let li = document.createElement('li');
    li.textContent = f;
    document.getElementById('favorite-foods').appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach(h => {
    let li = document.createElement('li');
    li.textContent = h;
    document.getElementById('hobbies').appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(pl => {
    let dt = document.createElement('dt');
    dt.textContent = pl.place;
    let dd = document.createElement('dd');
    dd.textContent = pl.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
});
