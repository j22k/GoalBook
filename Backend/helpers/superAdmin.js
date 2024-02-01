const db = require('../config/connection');
const collections = require('../config/collection');
const bcrypt = require('bcrypt')

module.exports = {
    CreateSuperAdmin: async (data) => {
        try {
          var user = await db.getDatabase().collection(collections.SUPERADMIN).findOne({ username: data.username });
          if (user) {
            return {status : false,message : 'superadmin already registerd'};
          } else {
            const salt = await bcrypt.genSalt(10);
            const hashpass = await bcrypt.hash(data.password, salt);
            data.password = hashpass;
    
            var user = await db.getDatabase().collection(collections.SUPERADMIN).insertOne(data);
            return {status : true,message:'superadmin registerd'}
          }
        } catch (error) {
          console.log(error);
        }
      },
}