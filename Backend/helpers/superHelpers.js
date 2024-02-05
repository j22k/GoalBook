const db = require('../config/connection');
const collections = require('../config/collection');
const bcrypt = require('bcrypt')

module.exports = {
  CreateSuperAdmin: async (data) => {
    try {
      var user = await db.getDatabase().collection(collections.SUPERADMIN).findOne({ username: data.username });
      if (user) {
        return { status: false, message: 'superadmin already registerd' };
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(data.password, salt);
        data.password = hashpass;

        var user = await db.getDatabase().collection(collections.SUPERADMIN).insertOne(data);
        return { status: true, message: 'superadmin registerd' }
      }
    } catch (error) {
      console.log(error);
    }
  },
  SignIn: async (data) => {
    try {
      var user = await db.getDatabase().collection(collections.SUPERADMIN).findOne({ username: data.username });

      if (!user) {
        return { status: false, message: 'Invalid username ' };

      }

      const matched = await bcrypt.compare(data.password, user.password);

      if (matched) {
        delete user.password;
        console.log("User found");
        return { status: true, user: user };
      } else {
        return { status: false, message: 'Invalid password' };
      }
    } catch (error) {
      console.log(error);
      return { status: false, message: error };
    }
  },
  CreateAdmin: async (data) => {
    try {
      var user = await db.getDatabase().collection(collections.ADMIN).findOne({ userid: data.userid });
      if (user) {
        return { status: false, message: 'admin already registerd' };
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(data.password, salt);
        data.password = hashpass;

        var user = await db.getDatabase().collection(collections.ADMIN).insertOne(data);
        return { status: true, message: 'admin registerd', user }
      }
    } catch (error) {
      console.log(error);
      return { status: false, message: error }
    }
  },
  getAllAdmins: async () => {
    try {
      const admins = await db.getDatabase().collection(collections.ADMIN).find({}).toArray();
      console.log(admins);
      return { status: true, message: 'Admins retrieved successfully', admins };
    } catch (error) {
      console.log(error);
      return { status: false, message: error };
    }
  }
}