angular.module('project-seed', [
  'project-seed.common',
  'project-seed.user',
  'ui.router',
  'templates-app',
  'ngAria',
  'angularMoment',
  'ngSanitize'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/user');
  })
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;
  })
;