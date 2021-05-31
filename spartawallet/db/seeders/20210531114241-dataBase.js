"use strict";

var faker = require("faker");

faker.locale = "pt_BR";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        name: "ADM",
        email: "admEmail@gmail.com",
        typePerson: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    for (let index = 0; index < 50; index++) {
      const user = await queryInterface.bulkInsert("Users", [
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          typePerson: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      const BTC = await queryInterface.bulkInsert("Btcs", [
        {
          userID: user,
          quantity: faker.datatype.number(10),
          price: faker.datatype.number(30000),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      const ETH = await queryInterface.bulkInsert("Eths", [
        {
          userID: user,
          quantity: faker.datatype.number(10),
          price: faker.datatype.number(10000),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      const DOGE = await queryInterface.bulkInsert("doges", [
        {
          userID: user,
          quantity: faker.datatype.number(10),
          price: faker.datatype.number(100),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      const BNB = await queryInterface.bulkInsert("bnbs", [
        {
          userID: user,
          quantity: faker.datatype.number(10),
          price: faker.datatype.number(1000),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      const XRP = await queryInterface.bulkInsert("xrps", [
        {
          userID: user,
          quantity: faker.datatype.number(10),
          price: faker.datatype.number(1000),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      await queryInterface.bulkInsert("Walltes", [
        {
          userID: user,
          btc: BTC,
          eth: ETH,
          doge: DOGE,
          bnb: BNB,
          xrp: XRP,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
