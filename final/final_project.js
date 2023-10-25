
// Import copyToClipboard fron final_import.js
import { copyToClipboard } from './final_import.js';

// Get the ul element by its id
var ul = document.getElementById('myList');
var searchInput = document.getElementById('searchInput');
var dayOfWeek = new Date().getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, ...)

// USe an array for colors
var dayColors = ['red', 'blue', 'green', 'purple', 'orange', 'brown', 'purple'];

// Use the map method to create an array of text colors for all days
var textColors = dayColors.map((color, index) => {
  return index === dayOfWeek ? color : 'purple';
});

// Set the text color based on the current day
document.body.style.color = textColors[dayOfWeek];

// Define a function to filter the list based on user input
function filterList() {
  // Get the search term entered by the user
  var searchTerm = searchInput.value.toLowerCase();

  // Clear the current list
  ul.innerHTML = '';

  // Iterate through the keys of the JSON data
  for (var key in data) {
    if (data.hasOwnProperty(key) && key.toLowerCase().includes(searchTerm)) {
      // Create a list item element with a dropdown
      var li = document.createElement('li');
      li.innerHTML = `<a href="#">${key}</a>`;

      // Create a dropdown container
      var dropdown = document.createElement('div');
      dropdown.className = 'dropdown';

      // Display each parameter, description, example, and text entry field on separate lines
      var params = data[key].params;
      for (var i = 0; i < params.length; i++) {
        var paramItem = document.createElement('div');
        paramItem.className = 'param-item';
        paramItem.innerHTML = `<p>${params[i].param}: ${params[i].description}</p>
                               <p>Example: ${params[i].example}</p>`;

        // Add a text entry field
        var paramText = document.createElement('input');
        paramText.type = 'text';
        paramText.placeholder = 'Enter value';
        paramItem.appendChild(paramText);

        // Add the parameter item to the dropdown
        dropdown.appendChild(paramItem);
      }

      // Add a "Generate Template" button
      var generateButton = document.createElement('button');
      generateButton.textContent = 'Generate Template';
      generateButton.addEventListener('click', generateTemplate);
      dropdown.appendChild(generateButton);

      // Add a container to display the combined content
      var combinedContent = document.createElement('div');
      combinedContent.className = 'combined-content';
      dropdown.appendChild(combinedContent);

      li.appendChild(dropdown);

      // Append the list item to the ul
      ul.appendChild(li);
    };
  };
};

// Generate a template when the "Generate Template" button is clicked
function generateTemplate(event) {
  // Get the parameter text fields and combined content container
  var paramTextFields = event.target.parentElement.querySelectorAll('input');
  var combinedContent = event.target.parentElement.querySelector('.combined-content');
  var listElementName = event.target.parentElement.parentElement.querySelector('a').textContent;

  // Create a template to hold the values from the text fields
  var template = listElementName;

  for (var i = 0; i < paramTextFields.length; i++) {
    var value = paramTextFields[i].value;
    template += ` ${value}`; // I don't know if this is considered using string concatenation or a template literal but it is using a template so there's that
  };

  // Display the combined content
  combinedContent.textContent = template;

  // Add a button to copy the content to the clipboard
  var copyButton = document.createElement('button');
  copyButton.textContent = 'Copy to Clipboard';
  copyButton.addEventListener('click', function () {
    copyToClipboard(template);
  });
  combinedContent.appendChild(copyButton);
};

// I know this isn't fully utilizing the fetch api, but it's still being used :)
var data;
fetch('final/final.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    // Load the entire list to start
    filterList();
  })
  .catch(error => {
    console.error('Error fetching JSON data: ', error);
  });

// Add an event listener to the search input
searchInput.addEventListener('input', filterList);

// Here's some conditional branching
function updateLinkColors() {
  var currentSecond = new Date().getSeconds();
  var links = document.getElementsByTagName('a');
  var colors;

  switch (currentSecond) {
    case 0:
      colors = 'red';
      break;
    case 1:
      colors = 'orange';
      break;
    case 2:
      colors = 'yellow';
      break;
    case 3:
      colors = 'green';
      break;
    case 4:
      colors = 'blue';
      break;
    case 5:
      colors = 'purple';
      break;
    case 6:
      colors = 'red';
      break;
    case 7:
      colors = 'orange';
      break;
    case 8:
      colors = 'yellow';
      break;
    case 9:
      colors = 'green';
      break;
    case 10:
      colors = 'blue';
      break;
    case 11:
      colors = 'purple';
      break;
    case 12:
      colors = 'red';
      break;
    case 13:
      colors = 'orange';
      break;
    case 14:
      colors = 'yellow';
      break;
    case 15:
      colors = 'green';
      break;
    case 16:
      colors = 'blue';
      break;
    case 17:
      colors = 'purple';
      break;
    case 18:
      colors = 'red';
      break;
    case 19:
      colors = 'orange';
      break;
    case 20:
      colors = 'yellow';
      break;
    case 21:
      colors = 'green';
      break;
    case 22:
      colors = 'blue';
      break;
    case 23:
      colors = 'purple';
      break;
    case 24:
      colors = 'red';
      break;
    case 25:
      colors = 'orange';
      break;
    case 26:
      colors = 'yellow';
      break;
    case 27:
      colors = 'green';
      break;
    case 28:
      colors = 'blue';
      break;
    case 29:
      colors = 'purple';
      break;
    case 30:
      colors = 'red';
      break;
    case 31:
      colors = 'orange';
      break;
    case 32:
      colors = 'yellow';
      break;
    case 33:
      colors = 'green';
      break;
    case 34:
      colors = 'blue';
      break;
    case 35:
      colors = 'purple';
      break;
    case 36:
      colors = 'red';
      break;
    case 37:
      colors = 'orange';
      break;
    case 38:
      colors = 'yellow';
      break;
    case 39:
      colors = 'green';
      break;
    case 40:
      colors = 'blue';
      break;
    case 41:
      colors = 'purple';
      break;
    case 42:
      colors = 'red';
      break;
    case 43:
      colors = 'orange';
      break;
    case 44:
      colors = 'yellow';
      break;
    case 45:
      colors = 'green';
      break;
    case 46:
      colors = 'blue';
      break;
    case 47:
      colors = 'purple';
      break;
    case 48:
      colors = 'red';
      break;
    case 49:
      colors = 'orange';
      break;
    case 50:
      colors = 'yellow';
      break;
    case 51:
      colors = 'green';
      break;
    case 52:
      colors = 'blue';
      break;
    case 53:
      colors = 'purple';
      break;
    case 54:
      colors = 'red';
      break;
    case 55:
      colors = 'orange';
      break;
    case 56:
      colors = 'yellow';
      break;
    case 57:
      colors = 'green';
      break;
    case 58:
      colors = 'blue';
      break;
    case 59:
      colors = 'purple';
      break;
    default:
      colors = 'black';
  };

  for (var i = 0; i < links.length; i++) {
    links[i].style.color = colors;
  };
};

// Update the command colors every second
setInterval(updateLinkColors, 1000);
