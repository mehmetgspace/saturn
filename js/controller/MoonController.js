const MoonController = function () {
  this.moonService = new MoonService();
}

/**
 * init actions
 */
MoonController.prototype.init = function () {
  // get moon list
  this.getMoonList();
}

/**
 * get moon list from service
 */
MoonController.prototype.getMoonList = function () {
  this.moonService.getMoons(function(data) {
    console.log(data);
  });
}
