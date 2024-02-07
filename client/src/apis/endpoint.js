const nodeserver = 'http://localhost:5000';

const endpoint = {
  // Define your API endpoints here
  superSignin: `${nodeserver}/super/signin`,
  signIn: `${nodeserver}/user/signin`,
  addAdmin : `${nodeserver}/super/add_admin`,
  fetchAdmins : `${nodeserver}/super/fetch_admins`,
  addEmployee : `${nodeserver}/admin/add_employee`,
  fetchEmployee : `${nodeserver}/admin/fetch_employee`,
  addBooking : `${nodeserver}/admin/add_booking`,
  // ...other endpoints
};

module.exports = endpoint;