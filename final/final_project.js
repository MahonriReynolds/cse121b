// Get the ul element by its id
var ul = document.getElementById('myList');
var searchInput = document.getElementById('searchInput');

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

      // Display the description on one line
      var description = document.createElement('p');
      description.textContent = data[key].description;
      dropdown.appendChild(description);

      // Display each parameter, description, example, and text entry field on separate lines
      var params = data[key].params;
      for (var i = 0; i < params.length; i++) {
        var paramItem = document.createElement('div');
        paramItem.className = 'param-item';
        paramItem.innerHTML = `
          <p>${params[i].param}: ${params[i].description}</p>
          <p>Example: ${params[i].example}</p>
        `;

        // Add a text entry field
        var paramText = document.createElement('input');
        paramText.type = 'text';
        paramText.placeholder = 'Enter value';
        paramItem.appendChild(paramText);
        
        // Add the parameter item to the dropdown
        dropdown.appendChild(paramItem);
      };

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
    template += ` ${value}`;
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

// Copy content to the clipboard
function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.body.removeChild(textArea);
  alert('Copied to clipboard: ' + text);
};

// Fetch the JSON file using the Fetch API
var data;


// I know this isn't fully utilizing the fetch api, but it's still being used :)
// I wasn't able to host the file anywhere else
fetch('final.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    // Initially, load the entire list
    filterList();
  })
  .catch(error => {
    console.error('Error fetching JSON data: ', error);
  });

// Add an event listener to the search input
searchInput.addEventListener('input', filterList);
