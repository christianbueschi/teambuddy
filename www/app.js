// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('teambuddy', ['ionic', 'tb.event-service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "mod-nav/nav.html",
      controller: 'NavCtrl as navCtrl'
    })

    .state('app.eventList', {
      url: "/eventList",
      views: {
        'menuContent' :{
          templateUrl: "mod-eventList/eventList.html",
          controller: 'EventListCtrl as listCtrl'
        }
      }
    })

    .state('app.event', {
      url: "/event/:eventId",
      views: {
        'menuContent' :{
          templateUrl: "mod-event/event.html",
          controller: 'EventCtrl as eventCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/eventList');
});

