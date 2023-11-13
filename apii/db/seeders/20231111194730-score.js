'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('scores', [{
      SecretWord:12233,
      UserId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      SecretWord:12233,
      UserId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      SecretWord:12233,
      UserId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      SecretWord:12233,
      UserId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      SecretWord:12233,
      UserId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ])},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('score', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
