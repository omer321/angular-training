angular.module('project-seed.models.user', [])
  .service('userModel', function UserModel($http, config) {
    var userModel = this,
      getUrl = config.baseApiUrl + "/users/";

    userModel.getAllUsers = function() {
      return $http.get(config.baseApiUrl + '/users').then(function (results) {
        return results.data;
      })
    };

    userModel.getUser = function(username) {
      return $http.get(getUrl + username).then(function(results) {
        return results.data;
      })
    }
  })
;
