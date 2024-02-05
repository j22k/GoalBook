const nodeserver = 'http://localhost:5000';

const endpoint = {
  // Define your API endpoints here
  superSignin: `${nodeserver}/super/signin`,
  signIn: `${nodeserver}/user/signin`,
  addAdmin : `${nodeserver}/super/add_admin`,
  fetchStory : `${nodeserver}/user/fetchstory`
  // ...other endpoints
};

module.exports = endpoint;