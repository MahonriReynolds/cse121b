const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


const my_img = document.createElement("img");
my_img.src = "https://picsum.photos/200";
my_img.alt = 'Random Photo From Picsum'
document.body.appendChild(my_img);


const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);


const my_section = document.createElement("section");
my_section.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(my_section);


