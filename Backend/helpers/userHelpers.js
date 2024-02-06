const db = require('../config/connection');
const collections = require('../config/collection');
const bcrypt = require('bcrypt');

module.exports = {
  SignIn: async (userData) => {
    try {
      const user = await db.getDatabase().collection(collections.ADMIN).findOne({ userid: userData.userID });

      if (!user) {
        const user1 = await db.getDatabase().collection(collections.EMPLOYEE).findOne({ employeeid: userData.userID });
        if (user1) {
          const matched = await bcrypt.compare(userData.password, user1.password);
          if (matched) {
            delete user1.password;
            console.log("User found");
            return { status: true, user: user1, authourozation : "employee" };
          } else {
            return { status: false, message: 'Invalid password' };
          }
        } else {
        return { status: false, message: 'Invalid username ' };
        }

      }
      const matched = await bcrypt.compare(userData.password, user.password);

      if (matched) {
        delete user.password;
        console.log("User found");
        return { status: true, user: user };
      } else {
        return { status: false, message: 'Invalid password' };
      }
    } catch (error) {
      console.error(error);
    }

  },
 
};
