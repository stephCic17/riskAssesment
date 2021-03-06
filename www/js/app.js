// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

 })
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
		.state( 'app',
			{
				url: '/app',
				abstract: true,
				templateUrl: 'templates/menu.html',
				controller: 'AppCtrl'
  			})
	
		.state('app.home', 
			{
				url: '/home',
  				views: 
  				{
					'menuContent': 
					{
						templateUrl: 'templates/home.html',
						controller: 'HomeCtrl'
					}
				}
  			})

		.state('app.step00',
			{
				url: '/step00',
				views: 
				{
					'menuContent': 
					{
						templateUrl: 'templates/step00.html',
						controller: 'Step00Ctrl'
					}
  				}
 			})
 
		.state('app.video', 
			{
  				url: '/video',
  				views: 
  				{
					'menuContent': 
					{
					  templateUrl: 'templates/video.html',
					}
				}
			})

		.state('psycho1', 
			{
				url:'/psycho1',
				templateUrl: 'templates/psychoTest/psycho1.html',
				controller: 'Psycho1Ctrl'
			})

		.state('psycho2', 
			{
				url:'/psycho2',
				templateUrl: 'templates/psychoTest/psycho2.html',
				controller: 'Psycho2Ctrl'
			})

		.state('psycho3', 
			{
				url:'/psycho3',
				templateUrl: 'templates/psychoTest/psycho3.html',
				controller: 'Psycho3Ctrl'
			})

		.state('psycho4', 
			{
				url:'/psycho4',
				templateUrl: 'templates/psychoTest/psycho4.html',
				controller: 'Psycho4Ctrl'
			})

		.state('step1', 
			{
				url:'/step1',
				templateUrl: 'templates/gynecoTest/step1.html',
				controller: 'Step1Ctrl'
			})

		.state('step2', 
			{
				url:'/step2',
				templateUrl: 'templates/gynecoTest/step2.html',
				controller: 'Step2Ctrl'
			})

		.state('step2-1', 
			{
				url:'/step2-1',
				templateUrl: 'templates/gynecoTest/step2-1.html',
				controller: 'Step2-1Ctrl'
			})

		.state('step3', 
			{
				url:'/step3',
				templateUrl: 'templates/gynecoTest/step3.html',
				controller: 'Step3Ctrl'
			})

		.state('step4', 
			{
				url:'/step4',
				templateUrl: 'templates/gynecoTest/step4.html',
				controller: 'Step4Ctrl'
			})

		.state('step5', 
			{
				url:'/step5',
				templateUrl: 'templates/gynecoTest/step5.html',
				controller: 'Step5Ctrl'
			})

		.state('step6', 
			{
				url:'/step6',
				templateUrl: 'templates/gynecoTest/step6.html',
				controller: 'Step6Ctrl'
			})

		.state('step7', 
			{
				url:'/step7',
				templateUrl: 'templates/gynecoTest/step7.html',
				controller: 'Step7Ctrl'
			})

		.state('step8', 
			{
				url:'/step8',
				templateUrl: 'templates/gynecoTest/step8.html',
				controller: 'Step8Ctrl'
			})

		.state('step9', 
			{
				url:'/step9',
				templateUrl: 'templates/gynecoTest/step9.html',
				controller: 'Step9Ctrl'
			})

		.state('step10', 
			{
				url:'/step10',
				templateUrl: 'templates/gynecoTest/step10.html',
				controller: 'Step10Ctrl'
			})

		.state('step11', 
			{
				url:'/step11',
				templateUrl: 'templates/gynecoTest/step11.html',
				controller: 'Step11Ctrl'
			})

		.state('step12', 
			{
				url:'/step12',
				templateUrl: 'templates/gynecoTest/step12.html',
				controller: 'Step12Ctrl'
			})

		.state('step14', 
			{
				url:'/step14',
				templateUrl: 'templates/gynecoTest/step14.html',
				controller: 'Step14Ctrl'
			})

		.state('step16', 
			{
				url:'/step16',
				templateUrl: 'templates/gynecoTest/step16.html',
				controller: 'Step16Ctrl'
			})

		.state('step17', 
			{
				url:'/step17',
				templateUrl: 'templates/gynecoTest/step17.html',
				controller: 'Step17Ctrl'
			})

		.state('step18', 
			{
				url:'/step18',
				templateUrl: 'templates/gynecoTest/step18.html',
				controller: 'Step18Ctrl'
			})

		.state('step19', 
			{
				url:'/step19',
				templateUrl: 'templates/gynecoTest/step19.html',
				controller: 'Step19Ctrl'
			})

		.state('step20', 
			{
				url:'/step20',
				templateUrl: 'templates/gynecoTest/step20.html',
				controller: 'Step20Ctrl'
			})

		.state('step21', 
			{
				url:'/step21',
				templateUrl: 'templates/gynecoTest/step21.html',
				controller: 'Step21Ctrl'
			})

		.state('step22', 
			{
				url:'/step22',
				templateUrl: 'templates/gynecoTest/step22.html',
				controller: 'Step22Ctrl'
			})
		
		.state('step23', 
			{
				url:'/step23',
				templateUrl: 'templates/gynecoTest/step23.html',
				controller: 'Step23Ctrl'
			})
	
		.state('step24', 
			{
				url:'/step24',
				templateUrl: 'templates/gynecoTest/step24.html',
				controller: 'Step24Ctrl'
			})
		
		.state('step25', 
			{
				url:'/step25',
				templateUrl: 'templates/gynecoTest/step25.html',
				controller: 'Step25Ctrl'
			})

		.state('step26', 
			{
				url:'/step26',
				templateUrl: 'templates/gynecoTest/step26.html',
				controller: 'Step26Ctrl'
			})
		
		.state('step27', 
			{
				url:'/step27',
				templateUrl: 'templates/gynecoTest/step27.html',
				controller: 'Step27Ctrl'
			})

		.state('step28', 
			{
				url:'/step28',
				templateUrl: 'templates/gynecoTest/step28.html',
				controller: 'Step28Ctrl'
			})

		.state('stopIVG', 
			{
				url:'/stopIVG',
				templateUrl: 'templates/stopIVG.html',
				controller: 'stopIVGCtrl'
			})

		.state('dateMenstruation', 
			{
				url:'/dateMenstruation',
				templateUrl: 'templates/gynecoTest/dateMenstruation.html',
				controller: 'dateMenstruationCtrl'
			});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});
