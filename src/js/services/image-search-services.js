const baseUrl = 'https://pixabay.com/api/';
export default {
  page: 1,
  query: '',
  key: '15807739-09fa85d701810a3ee4e99cc27',
  fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;
    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      })
      .catch(error => console.warn(error));
  },
 
  get serchQuery() {
    return this.query;
  },
  set serchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
