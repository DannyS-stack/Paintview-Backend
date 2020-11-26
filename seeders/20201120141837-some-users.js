"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "a",
          email: "a@a.com",
          password: "a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "b",
          email: "b@b.com",
          password: "b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "c",
          email: "c@c.com",
          password: "c",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "d",
          email: "d@d.com",
          password: "d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "John Doe",
          email: "John@Doe.com",
          password: "JohnDoe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
