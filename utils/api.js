// utils/api.js
export async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");

  if (!res.ok) {
    throw new Error("API call failed");
  }

  const data = await res.json();
  return data.users;
}