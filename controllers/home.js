const CONSTANTS = require("../utils/constants");
const { CarouselMedia } = require("../models/home/Carousel");

module.exports = {
  homeView: async (req, res, next) => {
    res.render("home", {
      [CONSTANTS.HOME_PAGE_RENDER_INPUTS.NavLinks]:
        CONSTANTS.HOME_PAGE_NAVLINKS,
      [CONSTANTS.HOME_PAGE_RENDER_INPUTS.CarouselMedia]:
        await CarouselMedia.findAll({ attributes: ["path"] }),
    });
    next();
  },
};


