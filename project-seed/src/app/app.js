angular.module('project-seed', [
  'project-seed.common',
  'project-seed.user',
  'project-seed.user-list',
  'ui.router',
  'templates-app',
  'ngAria',
  'angularMoment',
  'ngSanitize'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  })
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;
  })
;