const { user } = require('../../models/index');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      
      user.create({
        name: "Mario",
        email: "mario@gmail.com",
        password: bcrypt.hashSync("123456", +authConfig.rounds),
        posts: [
          {
            title: "Title 1",
            body: "Body 1"
          },
          {
            title: "Title 2",
            body: "Body 2"
          },
        ]
      }, {
        include: "posts"
      }),

      user.create({
        name: "Manuel",
        email: "manuel@gmail.com",
        password: bcrypt.hashSync("123456", +authConfig.rounds),
        posts: [
          {
            title: "Title 3",
            body: "Body 3"
          },
          {
            title: "Title 4",
            body: "Body 4"
          },
        ]
      }, {
        include: "posts"
      })

    ]);
  },

  down: (queryInterface, Sequelize) => {
    
      return Promise.all([
        queryInterface.bulkDelete('posts', null, {}),
        queryInterface.bulkDelete('users', null, {})
      ]);

  }
};