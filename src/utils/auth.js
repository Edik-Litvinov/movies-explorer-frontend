class Auth {
  constructor({ baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  autorization(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password })
    })
    .then((res) => res.json())
  }

  registration(name, email, password) {
    console.log(name, email, password)
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ name, email, password })
    })
    .then((res) => res.json())
  }

  getUserData(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    }
    })
    .then((res) => res.json())
  }
}

export const auth = new Auth({
  baseUrl: 'https://api.diplom.nomoredomains.monster',
  headers: {
    "Content-Type": "application/json",
  }
 })

