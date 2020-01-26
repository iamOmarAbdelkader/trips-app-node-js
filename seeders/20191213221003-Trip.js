'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('trips', [{
      hotel:'فندق Coreal Sea',
      city:'Sharm elsheikh',
      rating:4,
      description:'ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق،',
      meal_plan:'فطار غداء عشاء',
      days:4,
      image_url:'1.jpg',
      agency_id:1,
    },
    {
      hotel:'فندق Seven Seas',
      city:'Sahel',
      rating:5,
      description:'ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق،',
      meal_plan:'فطار غداء عشاء',
      days:2,
      image_url:'2.jpg',
      agency_id:2,
    },
    {
      hotel:'فندق Seven Seas And Ground',
      city:'Alex',
      rating:3.5,
      description:'ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق،',
      meal_plan:'فطار غداء عشاء',
      days:5,
      image_url:'3.jpg',
      agency_id:3,
    }
  ], {});

    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
