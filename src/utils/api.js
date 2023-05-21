import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDE4OTlhNjVjMDFjZjJkZjA4NTcxODg4YzViYTE1NCIsInN1YiI6IjY0NjcwYzE1MzNhMzc2MDEzYjNkMzlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0bRQl9n3uCsREjy1Ed4uHVEgukbSilCS069Fdfp-3s';

const headers = { Authorization: 'bearer ' + TMDB_TOKEN };
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
