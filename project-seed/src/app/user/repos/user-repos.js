angular.module('project-seed.user.repos', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('user.repos', {
        url: '/repos',
        templateUrl: 'user/repos/user-repos.tpl.html',
        controller: 'UserReposCtrl as userRepos'
      })
  })
  .controller('UserReposCtrl', function($http, config, $stateParams) {
    var userRepos = this;

    $http.get(config.baseApiUrl + '/users/' + $stateParams.login + '/repos').then(function(results) {
      userRepos.repos = results.data;
    })
  })
;
