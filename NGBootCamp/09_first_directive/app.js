angular.module('prosper-workshop', [])
  .controller('AppCtrl', function AppCtrl() {
    var appCtrl = this;

  })

  .directive('prSimple', function() {
    return function() {
      console.log('I am a lame directive.');
    }
  })
;

