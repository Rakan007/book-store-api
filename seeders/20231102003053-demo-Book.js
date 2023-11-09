"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        Judul: "Harry Potter Dan Batu Bertuah",
        Penerbit: "J.k. Rowling",
        Deskripsi: "Seumur hidup, Harry Potter tidak pernah berurusan dengan sihir.",
        Gambar: "harry.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Judul: "Harry Potter dan Kamar Rahasia",
        Penerbit: "J.k. Rowling",
        Deskripsi: "kepulangan Harry pada liburan musim panas.",
        Gambar: "harry2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Judul: "Dilan 1990",
        Penerbit: "Pidi Baiq",
        Deskripsi: "Gangster bandung",
        Gambar: " ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Judul: "Dilan 1991",
        Penerbit: "Pidi Baiq",
        Deskripsi: "Gangster tobat",
        Gambar: " ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
