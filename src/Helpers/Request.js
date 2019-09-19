import axios from 'axios'

export const restRequest = (method, urlToAdd, data) => {
  return axios({
    method,
    url: `${process.env.REACT_APP_API_URL}/${urlToAdd}&app_id=${process.env.REACT_APP_FOOD_APP_ID}&app_key=${process.env.REACT_APP_FOOD_APP_ID}`,
    data,
  });
}