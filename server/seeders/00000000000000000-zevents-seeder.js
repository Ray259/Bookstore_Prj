'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
                {
                        id: "1",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "2",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "3",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "4",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "5",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "6",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "7",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "8",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "9",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "10",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
                {
                        id: "11",
                        display: "0",
                        createdAt: "0000-00-00 00:00:00",
                        updatedAt: "0000-00-00 00:00:00",
                        name: "",
                },
            ]);
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};