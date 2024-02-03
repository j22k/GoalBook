const nodeserver = 'http://localhost:5000';

const endpoint = {
  // Define your API endpoints here
  signUp: `${nodeserver}/user/signup`,
  signIn: `${nodeserver}/user/signin`,
  writeSubmit : `${nodeserver}/user/write`,
  fetchStory : `${nodeserver}/user/fetchstory`
  // ...other endpoints
};

module.exports = endpoint;