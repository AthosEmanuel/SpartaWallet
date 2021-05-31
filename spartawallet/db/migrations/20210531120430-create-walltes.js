"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Walltes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      btc: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Btcs",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      eth: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Eths",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      doge: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "doges",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      bnb: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "bnbs",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      xrp: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Xrps",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Walltes");
  },
};
