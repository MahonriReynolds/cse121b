/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (a_list_of_temples) => {
    a_list_of_temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(image);
        templesElement.appendChild(article)
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    let response_json = await response.json();
    let response_object = await response_json.forEach(temple => {
        templeList.push(temple);
    });
    displayTemples(templeList);
};

/* reset Function */
function reset() {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    };
    displayTemples([])
};


/* sortBy Function */
function sortBy(temples) {
    reset();
    let filter = document.getElementById('sortBy').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case 'notutah':
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case 'older':
            const old = new Date(1950, 0, 1)
            displayTemples(temples.filter((temple) => Date.parse(temple.dedicated) < old ));
            break;
        case 'all':
            displayTemples(temples);
            break;
      };
};

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => { sortBy(templeList) });

console.log(templesElement);

getTemples();
