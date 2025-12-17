import axios from "axios";

const API_KEY = "AIzaSyB7hxgxmg7WX0qRPkElxLp8WsvFYXJh59U";
const AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";

async function createUser(email, password) {
  const response = await axios.post(
    `${AUTH_URL}signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return response.data;
}

async function login(email, password) {
  const response = await axios.post(
    `${AUTH_URL}signInWithPassword?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  console.log("Logging in...");
  return response.data;
}

export { createUser, login };
