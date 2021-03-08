const path = require("path");
const { environment } = require("@rails/webpacker");

const cssViewLoader = path.resolve(__dirname, "loaders/css_view_component.js");

environment.loaders.get("sass").use.push({ loader: cssViewLoader });
environment.loaders.get("css").use.push({ loader: cssViewLoader });

module.exports = environment;
