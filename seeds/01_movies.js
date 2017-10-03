
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'Black Book',
          director: 'Paul Verhoeven',
          genre: 'Drama',
          year_released: 2006
        },

        {
          title: 'Trainspotting',
          director: 'Danny Boyle',
          genre: 'Drama',
          year_released: 1996
        },

        {
          title: 'Hunt for the Wilderpeople',
          director: 'Taika Waititi',
          genre: 'Comedy',
          year_released: 2016
        },

        {
          title: 'The Place Beyond the Pines',
          director: 'Derek Cianfrance',
          genre: 'Drama',
          year_released: 2012
        },

        {
          title: 'Ex Machina',
          director: 'Alex Garland',
          genre: 'Sci-Fi',
          year_released: 2014
        },

        {
          title: 'Ferris Bueller\'s Day Off',
          director: 'John Hughes',
          genre: 'Comedy',
          year_released: 1986
        },

        {
          title: 'House of 1000 Corpses',
          director: 'Rob Zombie',
          genre: 'Horror',
          year_released: 2003
        },

        {
          title: 'The Hateful Eight',
          director: 'Quentin Tarantino',
          genre: 'Mystery',
          year_released: 2015
        },

        {
          title: 'Rad',
          director: 'Hal Needham',
          genre: 'Drama',
          year_released: 1986
        },

        {
          title: 'Taxi Driver',
          director: 'Martin Scorsese',
          genre: 'Drama',
          year_released: 1976
        },
      ]);
    });
};
