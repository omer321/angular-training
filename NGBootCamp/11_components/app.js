angular.module('prosper-workshop', [])
  .controller('AppCtrl', function AppCtrl($http, $scope) {
    var appCtrl = this;
    appCtrl.message = "Hello.";

    appCtrl.itemClicked = function(item) {
      console.log(item);
    };
    appCtrl.thingClicked = function(thing) {
      console.log('-----'+thing);
    };

    appCtrl.config = {
      data: [
        1,2,3,4
      ],
      data2: [
        'a','b','c'
      ]
    }
  })

  .directive('prComponent', function() {
    return {
      restrict: 'E',
      template: '<div>Component: {{message}} ' +
      '<ul><li ng-click="action({thing:item})" ng-repeat="item in items">{{item}}</li></ul>' +
      '</div>',
      scope: {
        message: '@',
        items: '=',
        action: '&'
      },
      link: function(scope, elem, attrs) {
        console.log(scope,elem,attrs);

        scope.selected = false;
      }
    }
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

