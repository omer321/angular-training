angular.module('project-seed.components.footer', [])
  .directive('psFooter', function($http) {
    return {
      template: '<hr/><h1>FOOTER!!!1!</h1>',
      link: function(scope, elem, attrs) {

      }
    }
  })
;
