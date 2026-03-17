// this helps us render the li items, it takes users as the args and display them by creating new li

const usersList = document.getElementById("users");
export function renderUsers(users) {
  usersList.innerHTML = "";

  if (users.length === 0) {
    usersList.innerHTML = "<li>No users found</li>";
    return;
  }

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.firstName} ${user.lastName}`;
    usersList.appendChild(li);
  });
}