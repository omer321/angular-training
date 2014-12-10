angular.module('project-seed.user', [
  'ui.router',
  'project-seed.user.repos'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.user', {
        url: '/users/:login',
        views: {
          'header@': {
            template: '<h1 class="text-danger">New Header for User</h1>'
          },
          'content@': {
            templateUrl: 'user/user.tpl.html',
            controller: 'UserCtrl as userCtrl'
          }
        }
      })
  })
  .controller('UserCtrl', function UserCtrl(userModel, $stateParams, repoModel) {
    var userCtrl = this;

    userModel.getUser($stateParams.login).then(function (user) {

      console.log(user);
      userCtrl.user = user;
    });

    //repoModel.getUserRepos($stateParams.login).then(function (repos) {
    //  userCtrl.repos = repos;
    //})
  })
;