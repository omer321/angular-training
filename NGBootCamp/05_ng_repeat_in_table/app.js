angular.module('prosper-workshop', [])
  .controller('AppCtrl', function AppCtrl() {
    var appCtrl = this;

    appCtrl.people = [
      {name: 'Fred', job: 'Clerk'},
      {name: 'Gomer', job: 'Lawyer'},
      {name: 'Suzanne', job: 'Developer'},
      {name: 'Linda', job: 'Job'}
    ];

  })
;

