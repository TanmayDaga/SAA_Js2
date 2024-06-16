const { CarouselMedia } = require("../../models/home/Carousel");
const logger = require("../../utils/logger");

// Dummy data for carousel media
const dummyCarouselMedia = [
  { path: "/media/carouselImages/carousel_graduation.jpg" },
  { path: "/media/carouselImages/carousel_freepick_team.png" },
  { path: "/media/carouselImages/carousel_freepick_team1.png" },
  { path: "/media/carouselImages/carousel_studentTeamwork.png" },
  { path: "/media/carouselImages/img.jpg" },
];

async function init() {
  try {
    await CarouselMedia.sync()
    await CarouselMedia.bulkCreate(dummyCarouselMedia); // Insert dummy data
    logger("Dummy data inserted successfully", "debug");
  } catch (error) {
    logger(`Error inserting dummy data: ${error}`, "error");
  }
}

module.exports = {
  init,
};
