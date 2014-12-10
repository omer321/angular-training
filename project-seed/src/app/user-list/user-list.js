angular.module('project-seed.user-list', [
  'ui.router'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('user-list', {
        url: '/users',
        controller: 'UserList as userList',
        templateUrl: 'user-list/user-list.tpl.html'
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
