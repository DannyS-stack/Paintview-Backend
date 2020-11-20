'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('comments', [{
      userId: 1,
      content: 'I think this is an amazing paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'I think this is a bad paint',
      createdAt: new Date(),
      updatedAt: new Date(),

     },{
      userId: 1,
      content: 'I ve had better',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'does not cover well',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'worst paint ever',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'not blue enough',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'I think this paint is OK, but prefer brand xyz',createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'I think this is an amazing paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'I think this is paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 1,
      content: 'not great',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'Not sure what to think',
      createdAt: new Date(),
      updatedAt: new Date(),     },
      {
      userId: 2,
      content: 'I think it could  not have been better',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'super coverage!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'I think this is a bad paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'I ve had better',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'does not cover well',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'worst paint ever',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'not good enough',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'I think this paint is OK, but prefer brand xyz',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'I think this is an amazing paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'I think this is paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'not BAD',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'BOOOOOOOOOOO',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'I think it could have been better',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 2,
      content: 'I think this is decent',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      userId: 3,
      content: 'I think it could be improved',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'super coverage!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'I think this is NOT RED ENOUGH',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'BEST PAINT EVER',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'does not cover well',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'worst paint ever',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'WOW!',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'I think this paint is OK, but prefer brand xyz',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'I think this is an amazing paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'I think this is paint',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'not BAD',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'BOOOOOOOOOOO',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'I think it could have been better',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      userId: 3,
      content: 'I think this is decent',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('comments', null, {});
  }


};
