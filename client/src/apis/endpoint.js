const nodeserver = 'http://localhost:5000';

const endpoint = {
  // Define your API endpoints here
  superSignin: `${nodeserver}/super/signin`,
  signIn: `${nodeserver}/user/signin`,
  addAdmin : `${nodeserver}/super/add_admin`,
  fetchAdmins : `${nodeserver}/super/fetch_admins`
  // ...other endpoints
};

module.exports = endpoint;