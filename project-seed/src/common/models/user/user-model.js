angular.module('project-seed.models.user', [])
  .service('userModel', function UserModel($http, config) {
    var userModel = this,
      getUrl = config.baseApiUrl + "/users/";

    userModel.getUser = function(username) {
      return $http.get(getUrl + username).then(function(results) {
        return results.data;
      })
    }
  })
;
