angular.module('prosper-workshop', [])
  .controller('FirstCtrl', function FirstCtrl() {
    var firstCtrl = this;

    firstCtrl.message = "message from ctrl";

    firstCtrl.update = function(message) {
      firstCtrl.message = message;
    }
  })
;

