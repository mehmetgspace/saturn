const MoonService = function () {
  this.saturnAPI = new SaturnApi();
}

/**
 * get all moons
 * @param callback
 */
MoonService.prototype.getMoons = function (callback) {
  this.saturnAPI.request('GET', '/moons', null, callback);
}

/**
 * get only minor moons
 * @param callback
 */
MoonService.prototype.getOnlyMinorMoons = function(callback) {
  this.saturnAPI.request('GET', '/onlyMinorMoons', callback);
}

/**
 * get specific moon
 * @param id
 * @param callback
 */
MoonService.prototype.getMoon = function (id, callback) {
  this.saturnAPI.request('GET', '/moons/' + id, callback);
}

/**
 * add a new moon
 * @param data
 * @param callback
 */
MoonService.prototype.addMoon = function (data, callback) {
  this.saturnAPI.request('POST', '/moons', data, callback);
}

/**
 * update specific moon
 * @param id
 * @param callback
 */
MoonService.prototype.updateMoon = function (id, callback) {
  this.saturnAPI.request('PUT', '/moons/' + id, callback);
}

/**
 * remove specific moon
 * @param id
 * @param callback
 */
MoonService.prototype.removeMoon = function (id, callback) {
  this.saturnAPI.request('DELETE', 'moons/' + id, callback);
}
