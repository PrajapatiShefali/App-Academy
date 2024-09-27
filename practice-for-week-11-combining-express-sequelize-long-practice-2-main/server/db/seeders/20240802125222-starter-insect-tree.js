'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const WesternPygmyBlue = await queryInterface.findOne('Insects', {
      where: { name: 'Western Pygmy Blue Butterfly' },
    }, ['id']);
    
    const PatuDiguaSpider = await queryInterface.findOne('Insects', {
      where: { name: 'Patu Digua Spider' },
    }, ['id']);
    
    const GeneralSherman = await queryInterface.findOne('Trees', {
      where: { tree: 'General Sherman' },
    }, ['id']);
    
    const GeneralGrant = await queryInterface.findOne('Trees', {
      where: { tree: 'General Grant' },
    }, ['id']);
    
    const Lincoln = await queryInterface.findOne('Trees', {
      where: { tree: 'Lincoln' },
    }, ['id']);
    
    const Stagg = await queryInterface.findOne('Trees', {
      where: { tree: 'Stagg' },
    }, ['id']);
    
    const seedData = [
      { insectId: WesternPygmyBlue, treeId: GeneralSherman },
      { insectId: WesternPygmyBlue, treeId: GeneralGrant },
      { insectId: WesternPygmyBlue, treeId: Lincoln },
      { insectId: WesternPygmyBlue, treeId: Stagg },
      { insectId: PatuDiguaSpider, treeId: Stagg },
    ];

    await queryInterface.bulkInsert('InsectTrees', seedData, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const WesternPygmyBlue = await queryInterface.findOne('Insects', {
      where: { name: 'Western Pygmy Blue Butterfly' },
    }, ['id']);
    
    const PatuDiguaSpider = await queryInterface.findOne('Insects', {
      where: { name: 'Patu Digua Spider' },
    }, ['id']);
    
    const GeneralSherman = await queryInterface.findOne('Trees', {
      where: { tree: 'General Sherman' },
    }, ['id']);
    
    const GeneralGrant = await queryInterface.findOne('Trees', {
      where: { tree: 'General Grant' },
    }, ['id']);
    
    const Lincoln = await queryInterface.findOne('Trees', {
      where: { tree: 'Lincoln' },
    }, ['id']);
    
    const Stagg = await queryInterface.findOne('Trees', {
      where: { tree: 'Stagg' },
    }, ['id']);
    
    await queryInterface.bulkDelete('InsectTrees', {
      insectId: [WesternPygmyBlue, PatuDiguaSpider],
      treeId: [GeneralSherman, GeneralGrant, Lincoln, Stagg]
    }, {});
  
  }
};
