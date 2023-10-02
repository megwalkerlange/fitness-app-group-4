import axios from 'axios';
// import workoutForm from '../src/components/workoutForm';

const BASEURL = 'https://api.api-ninjas.com/v1/exercises?';

const APIKEY = '&api_key=kL+ooYo4Of9nPzkhQm84Pg==wuMYOkk8L3CImp6n';

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
