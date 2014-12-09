angular.module('prosper-workshop', [])
  .controller('AppCtrl', function AppCtrl() {
    var appCtrl = this;

  })

  .controller('TabsCtrl', function() {
    var tabsCtrl = this;

    tabsCtrl.tabs = [];

    tabsCtrl.selectedTab = null;

    tabsCtrl.addTab = function(tab) {
      tabsCtrl.tabs.push(tab);

      if(!tabsCtrl.selectedTab) {
        tabsCtrl.selectedTab = tab;
        tab.selected = true;
      }
    };

    tabsCtrl.selectTab = function(tab) {
      tabsCtrl.tabs.forEach(function(tab) {
        tab.selected = false;
      });

      tab.selected = true;
    };

    console.log('HI!!')
  })

  .directive('tabset', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'tabset.html',
      controller: 'TabsCtrl as tabsCtrl'
    }
  })

  .directive('tab', function() {
    return {
      restrict: 'E',
      transclude: true,
      require: '^tabset',
      scope: {
        label: '@'
      },
      template: '<div ng-if="selected">{{label}}<div ng-transclude></div></div>',
      link: function(scope, elem, attrs, ctrl) {
        ctrl.addTab(scope);
      }
    }
  })

;

