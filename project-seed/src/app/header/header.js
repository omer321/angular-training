angular.module('project-seed.header', [])
  .controller('HeaderCtrl', function() {
    var headerCtrl = this;

    headerCtrl.textMessage = "HEADER!!!1!";
    console.log('HELLO FROM HEADER CONTROLLER')

  })
;