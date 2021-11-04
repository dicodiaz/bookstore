export default class BookstoreAPI {
  static #BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

  static #APP_ID = 'ffGQXar15qbfAJpAIAgz';

  static getAllBooksFromAPI = async () => {
    const url = `${this.#BASE_URL}/apps/${this.#APP_ID}/books`;
    const response = await fetch(url);
    return response.json();
  };

  static addBooktoAPI = async (data) => {
    const url = `${this.#BASE_URL}/apps/${this.#APP_ID}/books`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  };

  static deleteBookFromAPI = async (id) => {
    const url = `${this.#BASE_URL}/apps/${this.#APP_ID}/books/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return response;
  };
}
