angular.module('project-seed.models.repo-model', [])
  .service('repoModel', function RepoModel($http, config) {
    var repoModel = this;

    repoModel.getUserRepos = function(login) {
      return $http.get(config.baseApiUrl + '/users/' + login + '/repos').then(function (results) {
        return results.data;
      })
    }
  })
;