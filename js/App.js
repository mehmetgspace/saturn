/**
 * global variable so that we can directly access from any file
 */
const Saturn = {
  "API": {},
  "MoonService": {},
  "MoonController": {}
}

/**
 * default actions when page load
 */
document.addEventListener('DOMContentLoaded', function() {
  Saturn.API = new SaturnApi();
  Saturn.MoonService = new MoonService();
  Saturn.MoonController = new MoonController();

  // run specific function when page is ready
  Saturn.MoonController.init();
});
