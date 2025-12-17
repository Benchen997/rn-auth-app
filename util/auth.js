import axios from "axios";

const API_KEY = "AIzaSyB7hxgxmg7WX0qRPkElxLp8WsvFYXJh59U";
const AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";


async function authenticate(mode, email, password) {
    const response = await axios.post(
        `${AUTH_URL}${mode}?key=${API_KEY}`,
        {
            email,
            password,
            returnSecureToken: true,
        }
    );
    const token = response.data.idToken;
    return token;
}

function createUser(email, password) {
  return authenticate('signUp', email, password);
}

function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}

export { createUser, login };