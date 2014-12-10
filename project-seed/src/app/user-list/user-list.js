angular.module('project-seed.user-list', [
  'ui.router'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.user-list', {
        url: '/users',
        views: {
          'content@': {
            controller: 'UserList as userList',
            templateUrl: 'user-list/user-list.tpl.html'
          }
        }
      })
    ;
  })
  .controller('UserList', function UserList(userModel) {
    var userList = this;

    userModel.getAllUsers().then(function(users) {
      userList.users = users;
    })
  })
;
