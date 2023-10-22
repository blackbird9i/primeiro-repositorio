'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('users',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      imagem:{
        type: Sequelize.BLOB
      },
      nome:{
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      telefone:{
        type: Sequelize.INTEGER
      },
      senha:{
        type: Sequelize.INTEGER
      },
      createdAt:{
        type: Sequelize.STRING
      },
      updateAt:{
        type: Sequelize.STRING
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users')
  }
};
