angular.module('project-seed.user.repos', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.user.repos', {
        url: '/repos',
        templateUrl: 'user/repos/user-repos.tpl.html',
        controller: 'UserReposCtrl as userRepos'
      })
  })
  .controller('UserReposCtrl', function(repoModel, $stateParams) {
    var userRepos = this;

    repoModel.getUserRepos($stateParams.login).then(function(repos) {
      userRepos.repos = repos;
    })
  })
;
