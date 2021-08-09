import axios from 'axios';

export default axios.create({
  baseURL: 'https://okrcentral.github.io/sample-okrs/db.json',
});
