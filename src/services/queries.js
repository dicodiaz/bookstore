const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'ffGQXar15qbfAJpAIAgz';

export const getAllBooksFromAPI = async () => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  const response = await fetch(url);
  return response.json();
};

export const addBooktoAPI = async (data) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteBookFromAPI = async (id) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  return response;
};
