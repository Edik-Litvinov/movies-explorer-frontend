class ApiBeatfilm {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;

  }

  getFilms() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      headers: this.headers,
    }).then((res) => res.json())
  }
}

export const apiBeatfilm = new ApiBeatfilm({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "content-type": "application/json",
  }
})
