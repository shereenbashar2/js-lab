// This function fetches data from the public API and displays it on the page
const fetchUsers = () => {
  // Fetching data from the JSONPlaceholder API
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json(); // Parse the response as JSON
    })
    .then(users => {
      // Select the <ul> element to display the users
      const usersList = document.getElementById('users-list');
      
      // Loop through each user and create an <li> element for each
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
        usersList.appendChild(listItem); // Add the list item to the <ul>
      });
    })
    .catch(error => {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching users:', error);
    });
};

// Call the fetchUsers function to start the process
fetchUsers();
