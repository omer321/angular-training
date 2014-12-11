angular.module('project-seed.models.user', [
  'project-seed.config.constants'
])
  .service('userModel', function UserModel($http, config, $q) {
    var userModel = this,
      getUrl = config.baseApiUrl + "/users/";

    userModel.users = [];

    userModel.getAllUsers = function() {
      var deferred = $q.defer();

      if(userModel.users.length > 0) {
        console.log('using cached');
        deferred.resolve(userModel.users);
      } else {
        $http.get(config.baseApiUrl + '/users').then(function (results) {
          console.log('using remote');
          userModel.users = results.data;
          deferred.resolve(userModel.users);
        })
      }

      return deferred.promise
    };

    userModel.getUser = function(username) {

      var reposPromise = $http.get(config.baseApiUrl + '/users/' + username + '/repos').then(function (results) {
        console.log('resolved repos');
        return results.data;
      });

      var userPromise = $http.get(getUrl + username).then(function(results) {
        console.log('resolved user');
        return results.data;
      });

      return $q.all({repos: reposPromise, user: userPromise}).then(function(result) {
          var user = result.user,
            repos = result.repos;

        user.repos = repos;

        return user;
      })
    }
  })
;
