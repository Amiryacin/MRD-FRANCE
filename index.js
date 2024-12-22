// ---
function sayHello() { 
  console.log("Hello! What is your email address?"); 
} 

sayHello();

const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
/* 
// LOGIN FUNCTION
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === 'mrd' && password === 'mrd') {
      document.getElementById('loginDiv').classList.add('hidden');
      document.getElementById('editorDiv').classList.remove('hidden');
      document.querySelectorAll('.delete-button').forEach(button => button.classList.remove('hidden')); // Show delete buttons
  } else {
      alert('Incorrect username or password.');
  }
}

// ADD NAME FUNCTION
function addName() {
  const newName = document.getElementById('newName').value.trim();
  const color2023 = document.getElementById('color2023').value;
  const color2024 = document.getElementById('color2024').value;
  const color2025 = document.getElementById('color2025').value;

  if (!newName) {
      alert("Name cannot be empty!");
      return;
  }

  const colorClasses = {
      'green': 'tg-bgu1',
      'red': 'tg-be24',
      'yellow': 'tg-bgu2',
  };

  const table = document.getElementById('membersTable');
  const tbody = table.querySelector('tbody');

  let existingRow = Array.from(tbody.querySelectorAll('tr')).find(row => row.cells[0]?.textContent === newName);

  if (existingRow) {
      existingRow.cells[1].className = colorClasses[color2023] || 'tg-bgu1';
      existingRow.cells[2].className = colorClasses[color2024] || 'tg-bgu1';
      existingRow.cells[3].className = colorClasses[color2025] || 'tg-bgu1';
  } else {
      const newRow = tbody.insertRow();
      newRow.insertCell(0).textContent = newName;
      newRow.insertCell(1).className = colorClasses[color2023] || 'tg-bgu1';
      newRow.insertCell(2).className = colorClasses[color2024] || 'tg-bgu1';
      newRow.insertCell(3).className = colorClasses[color2025] || 'tg-bgu1';
      const deleteCell = newRow.insertCell(4);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button', 'hidden');  // Hide initially
      deleteButton.onclick = () => deleteRow(newRow, newName);
      deleteCell.appendChild(deleteButton);
  }

  sortTableAlphabetically();
  saveTableToLocalStorage();
}

// DELETE ROW FUNCTION
function deleteRow(row, name) {
  row.remove();
  const storedData = JSON.parse(localStorage.getItem('membersData')) || [];
  const updatedData = storedData.filter(item => item.name !== name);
  localStorage.setItem('membersData', JSON.stringify(updatedData));
}

// LOGOUT FUNCTION
function logout() {
  document.getElementById('editorDiv').classList.add('hidden');
  document.getElementById('loginDiv').classList.remove('hidden');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  // Hide delete buttons when logged out
  document.querySelectorAll('.delete-button').forEach(button => button.classList.add('hidden'));
}

// SORT TABLE FUNCTION
function sortTableAlphabetically() {
  const table = document.getElementById('membersTable');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => rowA.cells[0].textContent.localeCompare(rowB.cells[0].textContent));

  tbody.innerHTML = '';
  rows.forEach(row => tbody.appendChild(row));
}

// SAVE DATA TO LOCAL STORAGE
function saveTableToLocalStorage() {
  const table = document.getElementById('membersTable');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const data = rows.map(row => ({
      name: row.cells[0]?.textContent || '',
      color2023: row.cells[1]?.className || '',
      color2024: row.cells[2]?.className || '',
      color2025: row.cells[3]?.className || ''
  }));
  localStorage.setItem('membersData', JSON.stringify(data));
}

// LOAD DATA FROM LOCAL STORAGE
function loadTableFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('membersData')) || [];
  const tbody = document.getElementById('membersTable').querySelector('tbody');
  tbody.innerHTML = '';

  data.forEach(rowData => {
      const newRow = tbody.insertRow();
      newRow.insertCell(0).textContent = rowData.name;
      newRow.insertCell(1).className = rowData.color2023;
      newRow.insertCell(2).className = rowData.color2024;
      newRow.insertCell(3).className = rowData.color2025;
      const deleteCell = newRow.insertCell(4);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button', 'hidden'); // Hide initially
      deleteButton.onclick = () => deleteRow(newRow, rowData.name);
      deleteCell.appendChild(deleteButton);
  });

  sortTableAlphabetically();
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
  loadTableFromLocalStorage();

  document.getElementById('addButton').onclick = addName;
});
*/ 