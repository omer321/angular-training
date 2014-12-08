angular.module('prosper-workshop', [])
  .controller('AppCtrl', function AppCtrl() {
    var appCtrl = this;

    appCtrl.message = "This is an AppCtrl message."
  })

  .controller('AdminCtrl', function AdminCtrl() {
    var adminCtrl = this;

    adminCtrl.message = "This is an AdminCtrl message";
  })

  .controller('DashCtrl', function DashCtrl() {
    var dashCtrl = this;

    dashCtrl.message = "This is an DashCtrl message";
  })
;

