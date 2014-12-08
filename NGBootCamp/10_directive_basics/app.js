angular.module('prosper-workshop', [])
  .controller('AppCtrl', function AppCtrl($http, $scope) {
    var appCtrl = this;
    appCtrl.message = "Hello."
  })

  .directive('prSimple', function() {
    return function postLink(scope, elem, attrs) {
      scope.$watch('appCtrl.message', function(newVal, oldVal) {
        elem.append(newVal);
      });

      elem.on('click', function() {
        console.log('HI!!!');
        scope.appCtrl.message = "NEW MESSAGE!!";
        scope.$apply();
      })

    }
  })
;

