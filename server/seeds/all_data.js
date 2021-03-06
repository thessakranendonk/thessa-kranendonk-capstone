const beersData = require("../seed_data/beers");
const breweriesData = require("../seed_data/breweries");
const commentsData = require("../seed_data/comments");
const foodsData = require("../seed_data/foods");
const eventsData = require("../seed_data/events");

exports.seed = function(knex) {
  return knex("beers")
    .del()
    .then(() => {
      return knex("breweries").insert(breweriesData);
    })
    .then(() => {
      return knex("events").insert(eventsData);
    })
    .then(() => {
        return knex("foods").insert(foodsData);
      })
      .then(() => {
        return knex("beers").insert(beersData);
      })
      .then(() => {
        return knex("comments").insert(commentsData);
      })
};