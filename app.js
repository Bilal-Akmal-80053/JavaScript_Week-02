//  util imports here 
import { validationForm } from "./utils/validateForm.js";
import { getUsers } from "./utils/api.js";
import { renderUsers } from "./ui/renderUsers.js";
import { debounce } from "./utils/debounce.js";
// form dom here and validation
const form = document.getElementById("validationForm");
form.addEventListener("submit", validationForm);

// here we get status upper lsit and inpout dfrom the dom 
const status = document.getElementById("status");
const input = document.getElementById("searchInput");

// STATE
let allUsers = [];

// this function performs the serach that whatever user types in her ewe does that search funtion here 
 function performSearch(query) {
  const filteredUsers = allUsers.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(query.toLowerCase());
  });

  renderUsers(filteredUsers);
}

// This loadUsers just loads the api or fetches the user form api using that api.js utils
async function loadUsers() {
  status.textContent = "Loading users...";

  try {
    allUsers = await getUsers(); 
    status.textContent = "";

    renderUsers(allUsers);
  } catch (error) {
    status.textContent = "Error: " + error.message;
  }
}

loadUsers();





// this function uses the debounce functiuona and to set the local storage and perform serach function every 500 milli seond later
const debouncedSearch = debounce((query) => {
  localStorage.setItem("searchQuery", query);
  performSearch(query);
}, 500);

// to restore the serach when the user open the web after some time
const savedQuery = localStorage.getItem("searchQuery");
if (savedQuery) {
  input.value = savedQuery;
  performSearch(savedQuery);
}

// inout addevent listener for the debounce search
input.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});