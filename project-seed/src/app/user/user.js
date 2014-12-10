angular.module('project-seed.user', [
  'ui.router',
  'project-seed.user.repos'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/users/:login',
        templateUrl: 'user/user.tpl.html',
        controller: 'UserCtrl as userCtrl'
      })
  })
  .controller('UserCtrl', function UserCtrl(userModel, $stateParams) {
    var userCtrl = this;

    userModel.getUser($stateParams.login).then(function (user) {
      userCtrl.user = user;
    })
  })
;