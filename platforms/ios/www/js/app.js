// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
.state('home', {
  url: '/home',
  templateUrl: 'templates/home.html',
  controller: 'HomeCtrl'
  })

.state('step1', {
url:'/step1',
templateUrl: 'templates/step1.html',
controller: 'Step1Ctrl'
})

.state('step2', {
url:'/step2',
templateUrl: 'templates/step2.html',
controller: 'Step2Ctrl'
})
.state('step2-1', {
url:'/step2-1',
templateUrl: 'templates/step2-1.html',
controller: 'Step2-1Ctrl'
})
.state('step3', {
url:'/step3',
templateUrl: 'templates/step3.html',
controller: 'Step3Ctrl'
})

.state('step4', {
url:'/step4',
templateUrl: 'templates/step4.html',
controller: 'Step4Ctrl'
})

.state('step5', {
url:'/step5',
templateUrl: 'templates/step5.html',
controller: 'Step5Ctrl'
})

.state('step6', {
url:'/step6',
templateUrl: 'templates/step6.html',
controller: 'Step6Ctrl'
})

.state('step7', {
url:'/step7',
templateUrl: 'templates/step7.html',
controller: 'Step7Ctrl'
})
.state('step8', {
url:'/step8',
templateUrl: 'templates/step8.html',
controller: 'Step8Ctrl'
})

.state('step9', {
url:'/step9',
templateUrl: 'templates/step9.html',
controller: 'Step9Ctrl'
})

.state('step10', {
url:'/step10',
templateUrl: 'templates/step10.html',
controller: 'Step10Ctrl'
})

.state('step11', {
url:'/step11',
templateUrl: 'templates/step11.html',
controller: 'Step11Ctrl'
})

.state('step12', {
url:'/step12',
templateUrl: 'templates/step12.html',
controller: 'Step12Ctrl'
})

.state('step13', {
url:'/step13',
templateUrl: 'templates/step13.html',
controller: 'Step13Ctrl'
})

.state('step14', {
url:'/step14',
templateUrl: 'templates/step14.html',
controller: 'Step14Ctrl'
})

.state('step15', {
url:'/step15',
templateUrl: 'templates/step15.html',
controller: 'Step15Ctrl'
})

.state('step16', {
url:'/step16',
templateUrl: 'templates/step16.html',
controller: 'Step16Ctrl'
})

.state('step17', {
url:'/step17',
templateUrl: 'templates/step17.html',
controller: 'Step17Ctrl'
})

.state('step18', {
url:'/step18',
templateUrl: 'templates/step18.html',
controller: 'Step18Ctrl'
})

.state('step19', {
url:'/step19',
templateUrl: 'templates/step19.html',
controller: 'Step19Ctrl'
})

.state('step20', {
url:'/step20',
templateUrl: 'templates/step20.html',
controller: 'Step20Ctrl'
})

.state('step21', {
url:'/step21',
templateUrl: 'templates/step21.html',
controller: 'Step21Ctrl'
})

.state('step22', {
url:'/step22',
templateUrl: 'templates/step22.html',
controller: 'Step22Ctrl'
})
.state('step23', {
url:'/step23',
templateUrl: 'templates/step23.html',
controller: 'Step23Ctrl'
})
.state('step24', {
url:'/step24',
templateUrl: 'templates/step24.html',
controller: 'Step24Ctrl'
})
.state('step25', {
url:'/step25',
templateUrl: 'templates/step25.html',
controller: 'Step25Ctrl'
})
.state('step26', {
url:'/step26',
templateUrl: 'templates/step26.html',
controller: 'Step26Ctrl'
})
.state('step27', {
url:'/step27',
templateUrl: 'templates/step27.html',
controller: 'Step27Ctrl'
})
.state('step28', {
url:'/step28',
templateUrl: 'templates/step28.html',
controller: 'Step28Ctrl'
})
.state('step29', {
url:'/step29',
templateUrl: 'templates/step29.html',
controller: 'Step29Ctrl'
})
.state('stopIVG', {
url:'/stopIVG',
templateUrl: 'templates/stopIVG.html',
controller: 'stopIVGCtrl'
})
.state('dateIVG', {
url:'/dateIVG',
templateUrl: 'templates/dateIVG.html',
controller: 'dateIVGCtrl'
})

.state('step0', {
      url: '/step0',
          templateUrl: 'templates/step0.html',
          controller: 'Step0Ctrl'
    })
.state('step00', {
      url: '/step00',
          templateUrl: 'templates/step00.html',
          controller: 'Step00Ctrl'
    })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
