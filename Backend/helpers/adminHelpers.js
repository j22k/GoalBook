const db = require('../config/connection');
const collections = require('../config/collection');
const bcrypt = require('bcrypt')

module.exports = {

CreateEmployee: async (data) => {
    try {
      var user = await db.getDatabase().collection(collections.EMPLOYEE).findOne({ employeeid: data.employeeid });
      if (user) {
        return { status: false, message: 'employee already registerd' };
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(data.password, salt);
        data.password = hashpass;

        var user = await db.getDatabase().collection(collections.EMPLOYEE).insertOne(data);
        return { status: true, message: 'employee registerd', user }
      }
    } catch (error) {
      console.log(error);
      return { status: false, message: error }
    }
  },
  getAllEmployee: async () => {
    try {
      const employee = await db.getDatabase().collection(collections.EMPLOYEE).find({}).toArray();
      console.log(employee);
      return { status: true, message: 'Employee retrieved successfully', employee };
    } catch (error) {
      console.log(error);
      return { status: false, message: error };
    }
  },
  AddBookings: async (data) => {
    try {
      var user = await db.getDatabase().collection(collections.BOOKINGS).findOne({ bookingdate: data.bookingdate,time :data.time  });
      if (user) {
        return { status: false, message: 'Booking already registerd' };
      } else {
        var user = await db.getDatabase().collection(collections.BOOKINGS).insertOne(data);
        return { status: true, message: 'Booking registerd', user }
      }
    } catch (error) {
      console.log(error);
      return { status: false, message: error }
    }
  },
  getAllBookings: async () => {
    try {
      const bookings = await db.getDatabase().collection(collections.BOOKINGS).find({}).toArray();
      console.log(bookings);
      return { status: true, message: 'Bookings retrieved successfully', bookings };
    } catch (error) {
      console.log(error);
      return { status: false, message: error };
    }
  },
}
