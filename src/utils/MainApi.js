class MainApi {
  constructor({ baseUrl  }) {
    this.baseUrl = baseUrl;
  }

  getUserInfo(){
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
    })
    .then((res) => res.json());
  }

  updateUserInfo(values) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        email: values.email,
        name: values.name
      })
    })
    .then((res) => res.json());
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      headers: this.headers,
    })
    .then((res) => res.json());
  }

  postSavedMovies(data) {
    console.log(data)
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
    })
    }).then((res) => res.json())
  }

  deleteMovies(movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        headers: this.headers,
    }).then((res) => res.json());
  }

  getToken(token) {
    this.headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  }

}

export const mainApi = new MainApi({
  baseUrl: 'https://api.diplom.nomoredomains.monster',
})


