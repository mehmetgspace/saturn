const SaturnApi = function () {
  this.apiUrl = '/myApi';
}

/**
 * default api request
 */
SaturnApi.prototype.request = function(method, controller, params, callback) {
  callback('request')
}
