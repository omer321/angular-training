angular.module('project-seed', [
  'project-seed.common',
  'ui.router',
  'templates-app',
  'ngAria',
  'angularMoment',
  'ngSanitize'
])

  .controller('AppCtrl', function AppCtrl($state) {
    var app = this;
  })
;