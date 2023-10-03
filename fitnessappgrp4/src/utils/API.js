import axios from 'axios';
// import workoutForm from '../src/components/workoutForm';

export default {
  search: async function (muscle) {
    return await axios.get(
      'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
      {
        headers: {
          'X-Api-Key': 'kL+ooYo4Of9nPzkhQm84Pg==wuMYOkk8L3CImp6n',
        },
      },
    );
  },
};
