angular.module('prosper-workshop', [])
  .controller('AppCtrl', function AppCtrl() {
    var appCtrl = this;

    var same = {name: 'Dixie'}

    appCtrl.people = [
      {name: 'Fred'},
      {name: 'Gomer'},
      {name: 'Gomer'},
      {name: 'Linda'}
    ];

    appCtrl.morePeople = [
      same,
      same,
      {name: 'Jasper'},
      {name: 'Flo'},
      {name: 'Reggie'}
    ]
  })
;

