angular.module('starter.controllers', [])

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.text('').icon('ion-chevron-left custom-icon');
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

    })

.controller('RecordCtrl', function($scope, $state,  $http, $rootScope) {
    $scope.continue = function() {
      $state.go('record');
    }
})

.controller('Step1Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.nb = function(HAge) {
    $rootScope.Age = HAge;
    if ($rootScope.Age > 0){
      if ($rootScope.Age > 42)
        $rootScope.score = 50;
      else if ($rootScope.Age == 42)
        $rootScope.score = 20;
      else if ($rootScope.Age > 38)
        $rootScope.score = 2;
      else 
        $rootScope.score = 0;
      $state.go('step2');
    }
  }
})

.controller('Step2Ctrl', function($scope, $state, $http, $rootScope) {
    $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true)
        $rootScope.Pregnant = 1;
      else
        $rootScope.Pregnant = 0;
      if ($rootScope.Pregnant == 1)
       $state.go('step2-1');
      else if (no == true)
     $state.go('step3');
    }
})
.controller('Step2-1Ctrl', function($scope, $state, $http, $rootScope) {
    $scope.data = {};
  $scope.test = 
    url = ""
   yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true ){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false;
        document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true)
        $rootScope.PregnantGood = 1;
      else
        $rootScope.PregnantBad = 0;
      if (yes == true )
          $state.go('step3');
      if (no == true)
        $state.go('dateIVG');
    }
})

.controller('Step3Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck2").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck2").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck2").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck2").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck2").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck2").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Smoke = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.Smoke = 0;
      if (yes == true || no == true )
      $state.go('step4');
    }
})


.controller('Step4Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck3").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck3").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck3").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck3").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck3").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck3").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if ($scope.yesc == true){
        $rootScope.Child = 1;
        $state.go('step5');
      }
      else {
        $rootScope.Child = 0;
        if (yes == true || no == true )
        $state.go('step13');
      }
    }
})


.controller('Step5Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.nb = function(HChild) {
    $rootScope.HChild = HChild;
    if ($rootScope.HChild > 0){
      $state.go('step6');
    }
  }
})

.controller('Step6Ctrl', function($scope, $state, $http, $rootScope) {
    $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck4").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck4").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck4").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck4").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck4").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck4").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.BigChild = 1;
        $rootScope.score += 50;
        }
      else 
        $rootScope.BigChild = 0;
      if (yes == true || no == true ) {
        if ($rootScope.HChild == 1 && $rootScope.BigChild == 1)
          $state.go('step9');
       else
        $state.go('step8');
      }
    }
})

.controller('Step8Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck5").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck5").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck5").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck5").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck5").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck5").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.LessChild = 1;
        $rootScope.score += 50;
        $state.go('step9');
      }
      else {
        $rootScope.LessChild = 0;
      if (yes == true || no == true )
        $state.go('step10');
      }
    }
})

.controller('Step9Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck6").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck6").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck6").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck6").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck6").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck6").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.Prema = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.Prema = 0;
       if (yes == true || no == true )
      $state.go('step10');
    }
})

.controller('Step10Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck7").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck7").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck7").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck7").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck7").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck7").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.PreEclamp = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.PreEclamp = 0;
      if (yes == true || no == true )
      $state.go('step11');
    }
})


.controller('Step11Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck8").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck8").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck8").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck8").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck8").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck8").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.PregnantDiabete = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.PregnantDiabete = 0;
      if (yes == true || no == true )
      $state.go('step13');
    }
})


.controller('Step12Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
  $scope.nb = function(NbCesa) {
    $rootScope.NbCesa = NbCesa;
    if ($rootScope.NbCesa > 0){
      $rootScope.score += 2;
      $state.go('step13');
    }
    else if ($rootScope.nbCesa == 0)
      $state.go('step13');  
  }
})

.controller('Step13Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck9").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck9").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck9").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck9").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck9").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck9").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Miscarriage= 1;
        $rootScope.score += 2;
      if (yes == true)
        $state.go('step14');
      }
      else {
        $rootScope.Miscarriage= 0;
        $state.go('step15');
      }
    }
})
.controller('Step14Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.nb = function(NbMiacariage) {
      $rootScope.miscarriage = NbMiacariage;
      if ($rootScope.miscarriage > 0){
        $state.go('step15');
      }
    }
})

.controller('Step15Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck10").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck10").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck10").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck10").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck10").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck10").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.IMG = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.IMG = 0;
      if (yes == true || no == true )
      $state.go('step16');
    }
})

.controller('Step16Ctrl', function($scope, $state, $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.data.nb = 0;
  $scope.nb = function() {
    $rootScope.Alcool = $scope.data.nb;
    if ($rootScope.Alcool >= 0){
      if ($rootScope.Alcool > 10){
        $rootScope.score == 400;
      }
      $state.go('step17');
    }
  }
})


.controller('Step17Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck11").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck11").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck11").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck11").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck11").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck11").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.score += 200;
        $rootScope.Epilepsy = 1;
      }
      else
        $rootScope.Epilepsy = 0;
      if (yes == true || no == true )
      $state.go('step18');
    }
})


.controller('Step18Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck12").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck12").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck12").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck12").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck12").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck12").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.Phlebitis = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.Phlebitis = 0;
      if (yes == true || no == true )
      $state.go('step19');
    }
})

.controller('Step19Ctrl', function($scope, $state,  $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck13").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck13").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck13").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck13").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck13").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck13").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.HighBloodPresure = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.HighBloodPresure = 0;
      if (yes == true || no == true )
      $state.go('step20');
    }
})



.controller('Step20Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
    url = ""
    $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck14").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck14").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck14").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck14").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck14").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck14").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.diabetesH = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.diabetesH = 0;
      if (yes == true || no == true )
      $state.go('step21');
    }
})

.controller('Step21Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck15").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck15").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck15").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck15").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck15").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck15").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Medicament= 1;
        $state.go('step22');
      }
      else {
        $rootScope.Medicament= 0;
        $state.go('step23');
      }
    }
})


.controller('Step22Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.Submit = function(AntiepilepsyAnswer, AntiCoagulentAnswer, AntiHighBloodAnswer, AntidepressantAnswer, InsulineAnswer){
    $rootScope.AntiepilepsyAnswer = AntiepilepsyAnswer;
    if ($rootScope.AntiepilepsyAnswer == 1)
        $rootScope.score += 200;
    $rootScope.AntiCoagulentAnswer = AntiCoagulentAnswer;
    if ($rootScope.AntiCoagulentAnswer == 1)
        $rootScope.score += 200;
    $rootScope.AntiHighBloodAnswer = AntiHighBloodAnswer;
    if ($rootScope.AntiHighBloodAnswer == 1)
        $rootScope.score += 2;
    $rootScope.AntidepressantAnswer = AntidepressantAnswer;
    if ($rootScope.AntidepressantAnswer == 1)
        $rootScope.score += 2;
    $rootScope.InsulineAnswer = InsulineAnswer;
    if ($rootScope.InsulineAnswer == 1)
        $rootScope.score += 200;

    $state.go('step23');
  }
})

.controller('Step23Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(Size){
    $rootScope.Size = Size;
    $state.go('step24');
  }
})


.controller('Step24Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(Weight){
    $rootScope.Weight = Weight;
    $rootScope.IMC = $rootScope.Weight / Math.pow($rootScope.Size/100, 2);
    if ($rootScope.IMC > 28)
      $rootScope.score += 50;
    else if ($rootScope.IMC > 22)
      $rootScope.score += 20;     
    else if ($rootScope.IMC > 17)
      $rootScope.score += 0;      
    else if ($rootScope.IMC < 17)
      $rootScope.score += 50;     
    $state.go('step25');
  }
})

.controller('Step25Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck16").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck16").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck16").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck16").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck16").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck16").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
    $scope.Submit = function(yes, no){
      if (yes==true){
        $rootScope.Work= 1;
        $state.go('step26');
      }
      else {
        $rootScope.Work= 0;
      if (yes == true || no == true )
        $state.go('step00');
      }
    }
})

.controller('Step26Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(NbWork){
    $rootScope.NbWork = NbWork;
    if ($rootScope.NbWork > 10)
      $rootScope.score += 2;      
    
    $state.go('step27');
  }
})

.controller('Step27Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nb = function(TimeTravel){
    $rootScope.TimeTravel = TimeTravel;
    if ($rootScope.TimeTravel > 90)
      $rootScope.score += 2; 
    if ($rootScope.NbWork <= 6)     
      $state.go('step00');
    else
      $state.go('step28');
  }
})

.controller('Step28Ctrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.checked = function(yes, no){
     if (yes == false && $scope.yesc == true || no == false && $scope.noc == true){
        yes = false;
        no=false;
        $scope.yesc=false;
        $scope.noc=false;
        document.getElementById("yesCheck17").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck17").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (yes == true && !no || $scope.noc == true && yes == true){
        yes = true;
        no=false;
        $scope.yesc=true;
        $scope.noc=false; 
        document.getElementById("yesCheck17").setAttribute('style','border : 2px solid rgb(106,144,149)');
        document.getElementById("noCheck17").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
     }
     else if (no == true && !yes || $scope.yesc == true && no == true){
        no = true;
        yes=false;
        $scope.yesc=false;
        $scope.noc=true;
        document.getElementById("yesCheck17").setAttribute('style','border : 2px solid rgb(218,218,218)');
        document.getElementById("noCheck17").setAttribute('style','border : 2px solid rgb(106,144,149)');
     }
    }
      $scope.Submit = function(yes, no){
      if (yes==true) {
        $rootScope.StandingWork = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.StandingWork = 0;
      if (yes == true || no == true )
      $state.go('step00');
    }
})
.controller('Step29Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.Submit = function(AngoisseCriseAnswer,BoulimieAnswer, AnorexieAnswer, TocAnswer, DepressionAnswer, PhobieAnswer, BipolaireAnswer, HPAnswer){
    $rootScope.AngoisseCriseAnswer = AngoisseCriseAnswer;
    if ($rootScope.AngoisseCriseAnswer == 1)
        $rootScope.scorePsy += 1;
    $rootScope.BoulimieAnswer = BoulimieAnswer;
    if ($rootScope.BoulimieAnswer == 1)
        $rootScope.scorePsy += 2;
    $rootScope.AnorexieAnswer = AnorexieAnswer;
    if ($rootScope.AnorexieAnswer == 1)
        $rootScope.scorePsy += 2;
    $rootScope.TocAnswer = TocAnswer;
    if ($rootScope.TocAnswer == 1)
        $rootScope.scorePsy += 1;
    $rootScope.DepressionAnswer = DepressionAnswer;
    if ($rootScope.DepressionAnswer == 1)
        $rootScope.scorePsy += 2;
    $rootScope.PhobieAnswer = PhobieAnswer;
    if ($rootScope.PhobieAnswer == 1)
        $rootScope.scorePsy += 1;
    $rootScope.BipolaireAnswer = BipolaireAnswer;
    if ($rootScope.BipolaireAnswer == 1)
        $rootScope.scorePsy += 2;
        $rootScope.HPAnswer = HPAnswer;
    if ($rootScope.HPAnswer == 1)
        $rootScope.scorePsy += 2;
    $state.go('step00');
  }
})

.controller('Step30Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.Submit = function(AngoisseCriseAnswer,BoulimieAnswer, AnorexieAnswer, TocAnswer, DepressionAnswer, PhobieAnswer, BipolaireAnswer, HPAnswer){
    $rootScope.AngoisseCriseAnswer = AngoisseCriseAnswer;
    if ($rootScope.AngoisseCriseAnswer == 1)
        $rootScope.scorePsy += 1;
    $rootScope.BoulimieAnswer = BoulimieAnswer;
    if ($rootScope.BoulimieAnswer == 1)
        $rootScope.scorePsy += 2;
    $rootScope.AnorexieAnswer = AnorexieAnswer;
    if ($rootScope.AnorexieAnswer == 1)
        $rootScope.scorePsy += 2;
    $rootScope.TocAnswer = TocAnswer;
    if ($rootScope.TocAnswer == 1)
        $rootScope.scorePsy += 1;
    $rootScope.DepressionAnswer = DepressionAnswer;
    if ($rootScope.DepressionAnswer == 1)
        $rootScope.scorePsy += 2;
    $rootScope.PhobieAnswer = PhobieAnswer;
    if ($rootScope.PhobieAnswer == 1)
        $rootScope.scorePsy += 1;
    $rootScope.BipolaireAnswer = BipolaireAnswer;
    if ($rootScope.BipolaireAnswer == 1)
        $rootScope.scorePsy += 2;
        $rootScope.HPAnswer = HPAnswer;
    if ($rootScope.HPAnswer == 1)
        $rootScope.scorePsy += 2;
    $state.go('step00');
  }
})
.controller('Step0Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    if ($rootScope.PregnantGood == 1) {
      $scope.ProfilPregnant = "Félicitation vous êtes enceinte !";
    }
    else if ($rootScope.Pregnant == 1){
     $scope.ProfilPregnant = "Vous avez le choix de l' IVG , prenez le temps de la réflexion, et pour se faire surfez sur www.ivg.org ."; 
    }
    if ($rootScope.score >= 200) {

      document.getElementById("resultProfil").setAttribute('style','color : red');
      $scope.resultProfil = "D'après vos réponse vous présentez une grossesse à haut et devez être suivi dans une maternité de type 3.";
    }   
    else if ($rootScope.score >= 50) {
      document.getElementById("resultProfil").setAttribute('style','color : red');
      $rootScope.resultProfil = "D'apres vos réponse vous présentez une grossesse à haut risque mais qui ne necessite pas un suivi dans une maternité de type 3";
    }
    else if ($rootScope.score >= 20) {
            document.getElementById("resultProfil").setAttribute('style','color : orange');
      $rootScope.resultProfil = "D'apres vos réponses vous présentez une grossesse à risque ";
    }
    else {
            document.getElementById("resultProfil").setAttribute('style','color : green');
      $rootScope.resultProfil = "D'apres vos réponses vous ne présentez pas de risque particulier pour votre grossesse";
    }
    if ( $rootScope.Age < 35 ){
      $scope.profil1 = $rootScope.RAgeA;
    }
    else if ( $rootScope.Age < 38 ){
      $scope.profil1 = $rootScope.RAgeB;
    }
    else if ( $rootScope.Age < 42 ){
      $scope.profil1 = $rootScope.RAgeC;
    }
    else if ( $rootScope.Age >= 42 ){
      $scope.profil1 = $rootScope.RAgeD; 
    }
    
    if ($rootScope.Pregnant == 1 && $rootScope.Smoke == 1){
      $scope.profil2 = $rootScope.RSmokeA;
    }
    else if ($rootScope.Smoke == 1){
      $scope.profil2 = $rootScope.RSmokeB;
    }

    if ($rootScope.BigChild == 1)
      $rootScope.profil3 = $rootScope.BigChildAnswer;

    if ($rootScope.Prema == 0 && $rootScope.LessChild == 1)
      $rootScope.profil4 =  "Vous avez eu un enfant de -2k200 qui n'était pas prématuré, Il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 % pour la prochaine grossesse (si la femme a répondu pas encore enceinte) pour cette grossesse (si la dame a répondu oui je suis déjà enceinte)";
    else if ($rootScope.Prema == 0)
      $rootScope.profil4 = $rootScope.PremaNo;
    

    if ($rootScope.NbCesa >= 2)
      $rootScope.profil5 = $rootScope.NbCesaAnswer;

    if ($rootScope.NbMiacarriage >= 3)
      $rootScope.profil6 = $rootScope.NbMiacarriageAnswer;

    if ($rootScope.IMG == 1)
      $rootScope.profil7 = $rootScope.IMGYesAnswer;

    if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0){
      $scope.profil8 = $rootScope.AlcoolAnswerHighoZero;
    }
    else if ($rootScope.Alcool >= 10){
      $scope.profil8 = $rootScope.AlcoolAnswerHighoTen;
    }
   if ($rootScope.Epilepsy == 1)
      $scope.profil9 = $rootScope.EpilepsyAnswer;

    if ($rootScope.Phlebitis == 1)
      $scope.profil10 = $rootScope.PhlebitisAnswer;

    if ($rootScope.HighBloodPresure == 1)
      $scope.profil11 = $rootScope.HighBloodPresureAnswer;
    if ($rootScope.diabetesH == 1)
      $scope.profil12 = $rootScope.diabetesHAnswer;

    if ($rootScope.IMC < 17){
      $scope.profil13 = $rootScope.IMCLessAnswer;
    }
    else if ($rootScope.IMC > 22 && $rootScope.diabetesH == 1) {
      $scope.profil13 = "surpoid+diabete";
    }
    else if ($rootScope.IMC > 22 && $rootScope.IMC <= 28){
      $scope.profil14 = $rootScope.IMCHighAnswer;
    }
    else if ($rootScope.IMC > 28){
      $scope.profil14 = $rootScope.IMCMoreHighAnswer;
    }

 
    if ($rootScope.Work == 1){
      if ($rootScope.NbWork > 10 && $rootScope.NbWork <= 12){
        $scope.profil15 = $rootScope.NbWorkTenAnswer;
      }
      else if ($rootScope.NbWork > 12){
        $scope.profil15 = $rootScope.NbWorkTwelveAnswer;
      }
      if ($rootScope.TimeTravel > 90){
        $scope.profil16 = $rootScope.TimeTravelAnswer;
      }
      if ($rootScope.StandingWork == 1){
        $scope.profil17 = $rootScope.StandingWorkAnswer;
      }
    }
    else{
      $scope.profil18 = $rootScope.WorkNoAnswer;
    }

    $scope.changeview = function() {
      $state.go('step00');
    }
    $scope.continue = function() {
        $state.go('app.launch');
      }
})
.controller('Step00Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    if ($rootScope.PregnantGood == 1) {
      $scope.Positif = "Félicitation vous êtes enceinte !";
    }
    else if ($rootScope.Child == 1){
     $scope.Positif = "Félicitation vous allez avoir votre premier enfant"; 
    }
    else if ($rootScope.Age < 38)
      $scope.Positif = "Vous avez le bon age pour faire un enfant";
    document.getElementById("Positif").setAttribute('style','color : green');
    if ($rootScope.score >= 200) {

      document.getElementById("cresultProfil").setAttribute('style','color : red');
      $scope.cresultProfil = "D'après vos réponse vous présentez une grossesse à haut et devez être suivi dans une maternité de type 3.";
    }   
    else if ($rootScope.score >= 50) {
      document.getElementById("cresultProfil").setAttribute('style','color : red');
      $rootScope.cresultProfil = "D'apres vos réponse vous présentez une grossesse à haut risque mais qui ne necessite pas un suivi dans une maternité de type 3";
    }
    else if ($rootScope.score >= 20) {
            document.getElementById("cresultProfil").setAttribute('style','color : orange');
      $rootScope.cresultProfil = "D'apres vos réponses vous présentez une grossesse à risque ";
    }
    else {
            document.getElementById("cresultProfil").setAttribute('style','color : green');
      $rootScope.cresultProfil = "D'apres vos réponses vous ne présentez pas de risque particulier pour votre grossesse";
    }
    if ( $rootScope.Age < 35 ){
      $scope.profil1 = $rootScope.RAgeA;
    }
    else if ( $rootScope.Age < 38 ){
      $scope.profil1 = $rootScope.RAgeB;
    }
    else if ( $rootScope.Age < 42 ){
      $scope.risk1 = " - Votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale";
    }
    else if ( $rootScope.Age >= 42 ){
      $scope.risk1 = " - Votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale";
    }
    
    if ($rootScope.Pregnant == 1 && $rootScope.Smoke == 1){
      $scope.risk2 = " - Vous fumez, ce qui peut entrainer de nombreuse complication.";
    }
    else if ($rootScope.Smoke == 1){
      $scope.risk2 = "- Vous fumez, ce qui va entrainer de nombreuse complication lors d'une futur grossesse.";
    }

    if ($rootScope.BigChild == 1)
      $rootScope.risk3 = "- Vous avez eus un enfant de  + de 4kg, ce qui peut favoriser l'apparition du diabete de grossesse";

    if ($rootScope.Prema == 0 && $rootScope.LessChild == 1)
      $rootScope.risk4 =  "Vous avez eu un enfant de -2k200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 % ";
    if ($rootScope.NbMiacarriage >= 3)
      $rootScope.risk6 = "- Vous avez eus un nombre élevé de fausse couches";
    if ($rootScope.IMG == 1)
      $rootScope.risk7 = " - Vous avez déjà effectué une IMG vous avez donc un risque de récidive";
    if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0){
      $scope.risk8 = " - Vous consommez de l'alcool";
    }
    else if ($rootScope.Alcool >= 10){
      $scope.risk8 = " - Vous consommez une quantité d'alcool importante";
    }
   if ($rootScope.Epilepsy == 1)
      $scope.risk9 = " - Votre épilepsie.";

    if ($rootScope.Phlebitis == 1)
      $scope.risk10 = " - Votre antécédent de phlébite";

    if ($rootScope.HighBloodPresure == 1)
      $scope.risk11 = " -Votre hypertension";
    if ($rootScope.diabetesH == 1)
      $scope.risk12 = "Votre diabète";
    if ($rootScope.IMC < 17){
      $scope.risk13 = "- Votre Poids ";
    }
    else if ($rootScope.IMC > 22 && $rootScope.diabetesH == 1) {
      $scope.risk13 = " - Votre Poids ";
    }
    else if ($rootScope.IMC > 22 && $rootScope.IMC <= 28){
      $scope.risk14 = " - Votre poids ";
    }
    else if ($rootScope.IMC > 28){
      $scope.risk14 = " - Votre Poids ";
    }
    if ($rootScope.Work == 1){
      if ($rootScope.NbWork > 10 && $rootScope.NbWork <= 12){
        $scope.risk15 = " - Votre nombre d'heure de travail est élevé.";
      }
      else if ($rootScope.NbWork > 12){
        $scope.risk15 = " - Votre nombre d'heure de travail est vraiment très élevé";
      }
      if ($rootScope.TimeTravel > 90){
        $scope.risk16 = " - Votre temps de trajet pour aller au travail est élevé";
      }
      if ($rootScope.StandingWork == 1){
        $scope.risk17 = " - Vous travaillez debout plus de 6 heures par jour";
      }
    }










///////////////////////////////////////////////////////////Conseil

    if ($rootScope.Pregnant == 1 && $rootScope.Smoke == 1){
      $scope.conseil2 = " - Arretez de fumer !";
    }
    else if ($rootScope.Smoke == 1){
      $scope.conseil2 = "- Arretez de fumer avant d'entammer une grossesse ! ";
    }

    if ($rootScope.BigChild == 1 && $rootScope.diabetesH == 0)
      $rootScope.conseil3 = "- Effectuez un dépistage de diabète de grossesse";

    if ($rootScope.NbMiacarriage >= 3)
      $rootScope.conseil6 = " - Effectuer un bilan de fausse couche à répétition et bénéficier d'une prise en charge adaptée en fonction des résultats de ce bilan.";
    if ($rootScope.IMG == 1)
      $rootScope.conseil7 = " - Prennez rendez-vous pour une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale.";
    if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0 && $rootScope.Pregnant == 1){
      $scope.conseil8 = " - Stopper votre consommation d'alcool !";
    }
    else if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0 && $rootScope.Pregnant == 0){
      $scope.conseil8 = " - Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!";
    }
    
    else if ($rootScope.Alcool >= 10){
      $scope.conseil8 = " - Prennez rendez-vous dans un centre spécialisée pour vous aider à arreter l'alcool ";
    }
   if ($rootScope.AntiepilepsyAnswer == 1)
    $scope.conseil9 = " - Vous devez bénéficier d'une prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";
    if ($rootScope.Phlebitis == 1)
      $scope.conseil10 = " - Porter des bas de contention durant toute la grossesse et les 6 semaines après l'accouchement.  Il peut également être nécessaire de vous prescrire de l'héparine durant votre  grossesse et / ou après l'accouchement.  Discutez-en avec votre gynécologue.";

    if ($rootScope.AntiHighBloodAnswer == 1)
      $scope.conseil11 = " - Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";
    if ($rootScope.InsulineAnswer == 1)
      $scope.conseil12 = " -Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée. ";
    if ($rootScope.IMC < 17){
      $scope.conseil13 = "- Alimentez-vous correctement ";
    }
    else if ($rootScope.IMC > 22 && $rootScope.diabetesH == 1) {
      $scope.conseil13 = " - Attention à ne pas prendre trop de poids ";
    }
    if ($rootScope.Work == 1){
      if ($rootScope.NbWork > 10 && $rootScope.NbWork <= 12){
        $scope.conseil15 = " - Essayer d'aménager vos heures de travail";
      }
      else if ($rootScope.NbWork > 12){
        $scope.conseil15 = " - Essayer d'aménager vos heures de travail";
      }
      if ($rootScope.TimeTravel > 90){
        $scope.conseil16 = " - Essayer d'aménager vos heures de présence au travail pour éviter les trajets";
      }
      if ($rootScope.StandingWork == 1){
        $scope.conseil17 = " - Discuter dès à présent avec votre employeur d'aménager vos conditions de travail, vous allez être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour.";
      }
    }




///////////////////////////////////////////////////////////positif
  
  if ($rootScope.Age < 38)
    $scope.positif1 = " - Vous avez le bon age";
  if ($rootScope.Smoke == 0){
      $scope.positif2 = "- Vous ne fumez pas ";
    }

    if ($rootScope.BigChild == 0 && $rootScope.LessChild == 0 && $rootScope.Prema == 0 && $rootScope.PreEclamp == 0 && $rootScope.Child == 1 && $rootScope.IMG == 0 && $rootScope.Miscarriage == 0)
      $rootScope.positif3 = "- Vos précédente grossesse se sont bien passé .";
    if ($rootScope.Alcool == 0){
      $scope.positif8 = " - Vous ne buvez pas !";
    }
   if ($rootScope.HighBloodPresure == 0 && $rootScope.epilepsy == 0 && $rootScope.Phlebitis == 0 && $rootScope.diabetesH == 0)
    $scope.positif9 = " - Vous ne présentez pas de problème de santé ayant un impac sur la grossesse";
 if  ($rootScope.IMC <= 22 && $rootScope.IMC >= 17 ) {
      $scope.positif13 = " - Votre poids est idéal ";
    }
    if ($rootScope.Work == 0){
      $scope.profil18 = " - Vous ne travaillez pas vous pourrez donc prendre tout le temps pour vous occuper de vous et pre2parer la venu de votre enfant";
      }

    $scope.changeview = function() {
      $state.go('step0');
    }
    $scope.continue = function() {
        $state.go('app.launch');
      }
})
.controller('stopIVGCtrl', function($scope, $state,$http,$rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.nbReste = 14 - $rootScope.WeekPregnant;
  console.log($rootScope.WeekPregnant);
  console.log($rootScope.LastMenstruation);
  $scope.submit = function(){

  }

})
.controller('dateIVGCtrl', function($scope, $state,$http,$rootScope){

 $scope.submit = function(gros) {
  
      // Date des dernieres regles //
      $rootScope.LastMenstruation = new Date(gros);
      $rootScope.WeekPregnant = Math.round(((new Date().getTime() - $rootScope.LastMenstruation.getTime()) / (1000 * 60 * 60 * 24)) / 7);
    $state.go('stopIVG');
    }
})

.controller('CongratsCtrl', function($scope, $state, $http, $rootScope){
  $scope.data = {};
  $scope.test = 
  $scope.url = ""
  $scope.submit = function(){

  }
})
.controller('HomeCtrl', function($scope, $state, $http, $rootScope) {

    $scope.data = {};
  $scope.test = 
    url = ""
    
    $scope.login = function() {
      $state.go('app.launch');
    }
    $scope.create = function() {
      $state.go('step1');
    }
    $scope.french = function(){
      $rootScope.langage = 1;
      //home
      $rootScope.account = "Je possède déjà un compte";
      $rootScope.begin = "Commençons l'aventure!";

      // launch
      $rootScope.hello = "Bonjour, aujourd\'hui vous en êtes à votre ";
      $rootScope.numberOfWeek = "ème semaine de grossesse";

      $rootScope.helloFirst = "Vous avez choisi de continuer votre aventure avec nous et nous vous en remercions.";
      
      //Bilan Gratuit
      $rootScope.HelloFree = " Bonjour "; 
      $rootScope.QAge = "Quel âge avez vous ?";
      $rootScope.RAgeA = "Vous présentez un faible risque d'anomalie chromosomique foetale.";
      $rootScope.RAgeB = "Vous présentez un risque modéré d'anomalie chromosomique foetale.";
      $rootScope.RAgeC = "Vous présentez un risque élevé d'anomalie chromosomique foetale.";
      $rootScope.RAgeD = "Vous présentrez un risque très élevé d'anomalie chromosomique foetale.";

      $rootScope.QPregnant = "Etes vous enceinte?";
      $rootScope.Pregnant = "Félication !";

      $rootScope.QSmoke = "Fumez-vous?";
      $rootScope.RSmokeA = "Vous devez vous fixer l'objectif d'arrêter de fumer !";
      $rootScope.RSmokeB = "Vous devez vous fixer l'objectif d'arrêter de fumer !";

      $rootScope.QChild = "Avez-vous des enfants?";

      $rootScope.QHChild = "Combien?";

      $rootScope.QBigChild = "Avez-vous accouché d'un enfant de plus de 4 kilos ? ";
      $rootScope.BigChildAnswer = "Vous devrez effectuer un dépistage du diabète de grossesse dès le premier trimestre";

      $rootScope.QLessChild = "Avez-vous accouché d'un enfant de moins de 2kg200 ?";

      $rootScope.QPrema = "Votre enfant était il prématuré ?";
      $rootScope.PremaNo =  "Il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 % ";

      $rootScope.QPreEclamp = "Avez-vous eu une pré-éclampsie ? ";

      $rootScope.QPregnantDiabete = "Avez-vous un diabète de grossesse (diabète gestationnel) ?";

      $rootScope.QNbCesa = "Combien de césarienne avez-vous eu ?";
      $rootScope.NbCesaAnswer = "Le mode d'accouchement le plus probable pour cette grossesse sera donc la césarienne.";

      $rootScope.QMiscarriage = "Avez-vous fait des fausses couches ?";

      $rootScope.QNbMiscarriage = "Combien de fausse couche avez-vous fait ?";
      $rootScope.NbMiacarriageAnswer = "Vous devez effectuer un bilan de fausse couche à répétition et bénéficier d'une prise en charge adaptée en fonction des résultats de ce bilan.";

      $rootScope.QIMG = "Avez-vous fait une ou des IMG ?";
      $rootScope.IMGYesAnswer = "Nous vous conseillons une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale.";

      $rootScope.QAlcool = "Combien de verres d'alcool buvez-vous par semaine ?";
      $rootScope.AlcoolAnswerHighoZero = "Pendant la grossesse la seule façon de protéger votre foetus est de stopper toute consommation d'alcool.";

      $rootScope.AlcoolAnswerHighoTen = "Vous avez peut être un problème de dépendance avec l'alcool, nous vous conseillons une consultation spécialisée afin de faire le point.";

      $rootScope.QEpilepsy = "Avez-vous une épilepsie ? ";
      $rootScope.EpilepsyAnswer = "Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QPhlebitis = "Avez-vous déjà eu une phlébite ?";
      $rootScope.PhlebitisAnswer = "Votre condition de femme enceinte augmente votre risque de récidive de phlébite et ce jusqu'à 6 semaines après l'accouchement. Vous devez porter des bas de contention durant toute la grossesse et les 6 semaines après l'accouchement. Il peut être nécessaire de vous prescrire de l'héparine durant la grossesse et ou après l'accouchement. Vous devrez en discuter avec votre gynécologue.";

      $rootScope.QHighBloodPresure = "Avez-vous de l'hypertension artérielle ?";
      $rootScope.HighBloodPresureAnswer = "A cause de votre hypertension, vous présentez une grossesse à risque. Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QdiabetesH = "Avez-vous du diabète ?";
      $rootScope.diabetesHAnswer = "A cause de votre diabète, vous présentez une grossesse à risque. Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QMedicament = "Prennez-vous des médicaments ?";

      $rootScope.QTypeMedicament = "Selectionnez les médicaments que vous prennez ";
      $rootScope.EpileptiqueMed = "Anti-Epileptique";
      $rootScope.AntiCoagulentMed = "Anticoagulent";
      $rootScope.AntiHighBloodMed = "Antihypertenseur";
      $rootScope.InsulineMed = "Insuline";
      $rootScope.AntiDepressantMed = "Antidepresseur";

      $rootScope.QSize = "Quelle est votre taille ?";

      $rootScope.QWeight = "Quel est votre poids ?";

      $rootScope.IMCLessAnswer =  "Votre sous poids vous expose à un risque de menace d'accouchement prématuré et de bébé avec un retard de croissance intra-utérin.";
      $rootScope.IMCHighAnswer =  "Votre poids vous expose à un risque de diabète pendant la grossesse et donc de gros bébé à terme.";
      $rootScope.IMCMoreHighAnswer = "Votre surpoids vous expose à un risque important de diabète, de malformation foetale. Votre accouchement peut être compliqué par une phlébite ou une embolie pulmonaire en particulier si il a eu lieu par césarienne.";

      $rootScope.QWork = "Travaillez-vous ?";
      $rootScope.WorkNoAnswer = "Vous ne travaillez pas, profitez-en pour prendre le temps de prendre soin de vous, de préparer vous même vos repas, organiser votre préparation à l'accouchement et la venue de votre bébé.";

      $rootScope.QNbWork = "Combien d'heures de travail effectuez-vous par jour ?";
      $rootScope.NbWorkTenAnswer = "Vos heures de présence au travail sont élevées.";
      $rootScope.NbWorkTwelveAnswer = "Vos heures de présence au travail sont très élevées, vous devez essayer d'aménager vos heures de présence au travail, ce qui sera de toute façon indispensable lorsque votre bébé sera né :-).";

      $rootScope.QTimeTravel = "Quel est votre temps de trajet par jour (en minute) ?";
      $rootScope.TimeTravelAnswer =  "Votre temps de transport est très élevé, vous devez essayer d'aménager vos heures de présence au travail, ce qui sera de toute façon indispensable lorsque votre bébé sera né :-)." ;

      $rootScope.QStandingWork = "Travaillez-vous debout plus de 6 heures par jour ? ";
      $rootScope.StandingWorkAnswer = "Vous risquez d'être en difficulté pour mener votre grossesse à terme sans vous épuiser et sans menace d'accouchement prématuré. Il serait utile de discuter dès à présent avec votre employeur d'aménager vos conditions de travail.";

      //Calendar Medical
      $rootScope.NumberCalendar = "Félicitation vous en êtes à votre ";
      $rootScope.Weeks = "eme semaines de grossesse aujourd'hui !";
      $rootScope.delivery = "Vous devriez accoucher le ";
      $rootScope.calendar = "Votre calendrier";

      $rootScope.DateOfMenstruation = "Commencez par rentrer la date de vos dernieres regles";

      $rootScope.LastM = "La date de vos dernieres règles est le:";
      $rootScope.LastMenstruationDetail = "L'aménorrhée signifie l'absence de règles. Les professionnels de santé calculent le stade d'évolution de la grossesse en semaines d'aménorrhée à partir du premier jour des dernières règles. ";

      $rootScope.BeginOfP = "Votre Grossesse a débuté le:";
      $rootScope.BeginOfPregnancyDetail = "Cette date sera déterminée avec précision par votre médecin à partir des résultats de la 1ère échographie et de la date de vos dernières règles.";

      $rootScope.ReliabilityT = "Fiabilité du test de grossesse à partir du:";
      $rootScope.ReliabilityTPast = "Fiabilité du test de grossesse depuis le:";
      $rootScope.ReliabilityTestDetail = "Il est recommandé de confirmer les résultats du test de grossesse par une prise de sang en laboratoire, afin de mesurer avec plus de précision le taux d'hormone hCG.";
      
      $rootScope.FirstC = "Votre première consultation doit être réalisé entre le ";
      $rootScope.FirstCPast = "Votre première consultation à été réalisé le inserer la date quand on stock les données";
      $rootScope.FirstConsultDetail = "Votre grossesse est suivie par un médecin ou une sage-femme (libérale, en hôpital ou en PMI). A ce titre, vous bénéficiez de 7 consultations médicales prénatales. Lors de la 1ère consultation, vous allez établir les principales étapes de votre suivi de grossesse. Il est nécessaire de retracer avec votre médecin votre passé médical.";

      $rootScope.FirstE = "Votre première echographie doit être réalisé entre le ";
      $rootScope.FirstEPast = "Votre première echographie à été réalisé le ";
      $rootScope.FirstEchoDetail = "L'échographie de datation doit être réalisée entre la 11ème et la 13ème semaine d'aménorrhée. Elle permet de confirmer le terme de la grossesse, de déterminer le nombre d'embryons, de mesurer la clarté nucale et de rechercher certains signes de malformation. ";
      
      $rootScope.FirstPC = "Votre premier entretien prenatal doit être réalisé entre le ";
      $rootScope.FirstPCPast = "Votre premiere entretien prenatal à été réalisé le ";
      $rootScope.FirstPrenatalCareDetail = "Cet entretien individuel ou en couple est réalisé par une sage-femme ou un médecin et permet d'exprimer vos besoins et vos attentes, de répondre à vos interrogations et d'échanger sur votre projet de naissance.";

      $rootScope.SecondPC = "Votre second entretien prenatal doit être réalisé entre le ";
      $rootScope.SecondPCPast = "Votre second entretien prenatal à été réalisé le";
      $rootScope.SecondPrenatalCareDetail = "Votre médecin peut vous proposer d'effectuer le Triple Test, il s'agit d'un examen médical non obligatoire qui permet de dépister la trisomie 21 par le biais d'un dosage de marqueurs effectué sur votre sang. Si vous avez plus de 38 ans, il vous sera systématiquement proposé d'effectuer une amiocentèse. Votre médecin peut également vous recommander deffectuer un examen médical du père - cet examen pris en charge à 100% a pour objectif de compléter votre dossier médical.";

      $rootScope.BilanB = "Bilan buccodentaire";
      $rootScope.BilanBuccoDetail = "Vous pouvez bénéficier d'un bilan bucco-dentaire pris en charge à 100% et sans avance de frais de votre part. Prenez soin de vos dents car les modifications hormonales notamment peuvent fragiliser vos dents et vos gencives, ce qui peut augmenter le risque d'accouchement prématuré.";
      
      $rootScope.SecondE = "Votre seconde echographie doit être réalisé entre le ";
      $rootScope.SecondEPAst = "Votre seconde echographie à été réalisé le ";
      $rootScope.SecondEchoDetail = "L'échographie morphologique doit être réalisée entre la 21ème et la 23ème semaine d'aménorrhée. Elle permet d'analyser la morphologie du foetus, de vérifier la croissance foetale, de localiser le placenta et de dépister d'autres anomalies. Vous pouvez, si vous le souhaitez, connaître le sexe de votre bébé !";

      $rootScope.ThirdPC = "Votre troisième entretien prenatal doit être réalisé entre le ";
      $rootScope.ThirdPCPast = "Votre troisième entretien prenatal à été réalisé le ";
      $rootScope.ThirdPrenatalCareDetail = "Votre médecin interprète et vous explique l'échographie morphologique.";

      $rootScope.diabete = "Votre depistage diabete doit être réalisé entre le ";
      $rootScope.diabetePast = "Votre depistage diabete à été réalisé le ";
      $rootScope.diabetePregnant = "Le diabète gestationnel également appelé hyperglycémie ou diabète de grossesse, est une élévation du taux de sucre dans le sang qui survient pendant la grossesse. Il s'agit d'une forme bénigne de diabète qui concerne entre 6% et 12% des grossesses et nécessite la mise en place d'un suivi adapté.";

      $rootScope.FourPC = "Votre quatrieme entretien prenatal doit être réalisé entre le ";
      $rootScope.FourPCPast = "Votre quatrieme entretien prenatal à été réalisé le ";
      $rootScope.FourPrenatalCareDetail = "Consultation médicale de votre 6ème mois de grossesse.";
    
      $rootScope.FivePC = "Votre cinquieme entretien prenatal doit être réalisé entre le ";
      $rootScope.FivePCPast = " Votre cinquieme entretien prenatal à été réalisé le ";
      $rootScope.FivePrenatalCareDetail = "Consultation médicale de votre 7ème mois de grossesse.";

      $rootScope.ThirdE = "Votre troisieme echographie doit être réalisé entre le ";
      $rootScope.ThirdEPast = "Votre troisieme echographie à été réalisé le";
      $rootScope.ThirdEchoDetail = "L'échographie de croissance foetale doit être réalisée entre la 31ème et la 33ème semaine d'aménorrhée. Elle permet de vérifier la croissance foetale, la présentation et la localisation placentaire.";

      $rootScope.SixthPC = "Votre sixieme entretien prenatal doit être réalisé entre le ";
      $rootScope.SixthPCPast = " Votre sixieme entretien prenatal à été réalisé le ";
      $rootScope.SixthPrenatalCareDetail = "Votre médecin interprète et vous explique l'échographie de croissance. C'est également l'occasion pour lui de vous informer sur votre mode d'accouchement.";

      $rootScope.AnesthetistC = "Votre consultation avec l'anesthesiste doit être réalisé entre le ";
      $rootScope.AnesthetistCPast = " Votre consultation avec l'anesthesiste à été réalisé le ";
      $rootScope.AnesthetistConsultDetail = "Cette consultation permet d'assurer la sécurité d'une éventuelle anesthésie et est obligatoire.";

      $rootScope.SeventhPC = "Votre septieme entretien prenatal doit être réalisé entre le ";
      $rootScope.SeventhPCPast = " Votre septieme entretien prenatal à été réalisé le ";
      $rootScope.SeventhPrenatalCareDetail = "Votre médecin vous confirmera le lieu et les modalités de votre accouchement. Il vous informera également des différents signes qui doivent attirer votre attention et vous faire venir à la maternité en urgence (contractions, perte de liquide, perte de sang, etc.)";

      $rootScope.DateOfT = "Votre date de terme théorique est le: " 
      $rootScope.DateOfTermDetail = "Vous devez consulter votre médecin ou sage-femme.";
      
      $rootScope.PregnantPC = "Vous devez effectuer votre déclaration de grassesse avant le ";
      $rootScope.PregnantPCPast = "Vous avez effectuer votre déclaration de grossesse le ";
      $rootScope.PregnantDeclarationDetail = "Demandez à votre gynécologue ou votre sage femme de remplir votre déclaration de grossesse. Remplissez ensuite votre partie.  Adressez le volet rose à la Caisse d'Allocations Familiales et le volet bleu à votre organisme d'assurance-maladie avant le [.... calcul de date à J+106 au plus tard.] Cela permet le remboursement des soins à 100% et le déclenchement de votre congé de maternité. En cas de litige, cela permet également de faire valoir vos droits et votre protection au travail. Enfin, pensez à mettre à jour votre carte vitale ! ";
      
      $rootScope.EmployerInformationPC = "Information Employeur N/A";
      $rootScope.EmployerInformationDetail = "Aucune obligation légale, mais cela est utile notamment si un aménagement de votre temps de travail s'avère nécessaire";

      $rootScope.YourMaternityPC = "Vous devez choisir votre maternité avant le ";
      $rootScope.YourMaternityPCPast = "Vous avez effectué votre choix de maternité le ";
      $rootScope.YourMaternityDetail = "Il est recommandé de s'inscrire dans une maternité le plus tôt possible. Vous avez le choix entre les hôpitaux publics ou les cliniques privées (conventionnées ou non). Pensez à vous renseigner auprès de votre complémentaire santé sur la prise en charge de votre séjour en maternité. Il existe trois types de maternité : Type I (adapté à la plupart des accouchements) qui accueillent tous les enfants de poids normal et non prématurés.  Type II (comporte une unité de néonatalogie) et prend en charge les enfants à partir de 32 SA et 1,5kg, Type III (comporte une unité de néonatalogie et un service de réanimation néonatale) et prend en charge les enfants à partir de 25 SA et de 500g. ";

      $rootScope.childcarInformationPC = "Renseignement sur les mode de de gardes";
      $rootScope.childcarInformationDetail = "En collectivité publique ou privé, auxiliaire parentale ou profesionnelle, avec un ou 2 autres enfants, en garde partagée, seul à la maison ou chez une nourrice aggrée. De nombreux choix s'offrent à vous.";

      $rootScope.InformationAidPC = "Renseignement sur les aides: Prestation d'acceuil du jeune enfant (PAJE) / Allocation parent isolé";
      $rootScope.InformationAidDetail = "Nous vous invitons à consulter le site : www.caf.fr";

      $rootScope.VitaleCardPC = "Vous pouvez mettre à jour votre carte vital à partir du ";
      $rootScope.VitaleCardPCPast = "Vous avez mis à jour votre carte vital le ";
      $rootScope.VitalCardDetail = "Pensez à mettre à jour votre carte vitale afin que vos dépenses de santé soient prises en charge à 100% à partir du 1er jour du 6e mois et jusqu'à 12 jours après votre accouchement.";

      $rootScope.PaternityRecognitionPC = " Vous pouvez effectuer la Reconnaissance de paternité à parir du ";
      $rootScope.PaternityRecognitionPCPast = "Vous pouvez effectuer la reconnaissance de paternité depuis le ";
      $rootScope.PaternityRecognitionDetail = "Cette démarche concerne exclusivement les couples non mariés. Cela permet au père de l'enfant d'être reconnu comme tel par l'adminstration. ";
      
      $rootScope.MaternityLeavePC = "Votre congé maternité ";
      $rootScope.MaternityLeaveDetail = "Pour une femme salariée : début du congé prénatal qui commence à la 35e SA (soit 6 semaines avant l'accouchement) s'il s'agit du premier ou deuxième enfant, le congé postnatal dure 10 semaines : soit un congé maternité de 16 semaines en tout. Le congé prénatal débute à la 33e SA (8 semaines avant) s'il s'agit du 3ème enfant, le congé postnatal dure 18 semaines : soit un congé maternité de 26 semaines en tout. Le congé prénatal débute à la 29e SA (12 semaines avant) s'il s'agit de jumeaux, le congé postnatal dure 22 semaines : soit un congé maternité de 34 semaines en tout. Le congé prénatal débute à la 17e SA (24 semaines avant) s'il s'agit de triplés ou plus, le congé postnatal dure 22 semaines : soit un congé maternité de 46 semaines en tout. Pour une femme en profession libérale : le congé maternité dure 16 semaines en tout.";

      $rootScope.InscriptionNurseryPC = "Vous pouvez effectuer l'inscription sur la liste d'une crèche à partir du ";
      $rootScope.InscriptionNurseryPCPast = "Vous pouvez effectuer l'inscription sur la liste d'une crèche depuis le ";
      $rootScope.InscriptionNurseryDetail = "N'hésitez pas à demander une attestation de grossesse à votre gynécologue ou votre sage femme et n'oubliez pas de reconfirmer votre inscription à la naissance de votre enfant.";

      $rootScope.MaternityInsurancePC = "Mon régime d'assurance maladie ";
      $rootScope.MaternityInsuranceDetail = "L'assurance maternité prend en charge à 100% (sur la base du tarif de la SS) : les 7 consultations prénatales et la consultation postnatale obligatoires,  l'entretien prénatal et les 7 séances de préparation à la naissance, les honoraires de l'accouchement, les frais de séjour à l'hôpital ou en clinique conventionnée (dans la limite de 12 jours), tous les soins en lien avec la grossesse à partir du 1er jour du 6ème mois de grossesse, l'hospitalisation éventuelle du nouveau-né au cours de ses 30 premiers jours de vie et l'échographie de 32 SA. Les échographies de 12 et 22 SA  sont remboursées à 70%.";
      
      $rootScope.DeadlineAirTravelPC = "Vous pouvez voyager en avion jusqu'au ";
      $rootScope.DeadlineAirTravelPCPast = "Vous ne pouvez plus voyager en avion depuis le ";
      $rootScope.DeadlineAirTravelDetail = "";
      
      $rootScope.DeclarationBirthPC = "Declaration de naissance";
      $rootScope.DeclarationBirthDetail = "A faire en mairie dans les 3 jours ouvrables de votre accouchement. Ce délai devrait passer à 5 jours ouvrables courant 2017.";

      $rootScope.BirthRegistrationPC = "Déclaration de naissance auprès des organismes (caisse d'assurance maladie, mutuelle, etc.)";
      $rootScope.BirthRegistrationDetail = "Pensez à mettre à jour votre carte Vitale et à renvoyer votre imprimé de rattachement rempli à votre caisse d'assurance maladie.";
      
      $rootScope.EndMaternityLeavePC = "Fin de votre congé maternité";
      $rootScope.EndMaternityLeaveDetail = " Si vous allaitez, sachez qu'il n'existe pas de congé allaitement mais vous avez le droit de vous libérer une heure par jour pour allaiter votre enfant. Cette heure n'est généralement pas rémunérée. Vous pouvez vous renseigner auprès de votre employeur.";
      
      $rootScope.PaternityLeavePC = "Congé Paternité";
      $rootScope.PaternityLeaveDetail = "Le père peut prendre un congé paternité. Afin d'en bénéficier, il doit en faire la demande à son employeur au moins un mois avant la date souhaitée du début de congé. Sa durée est de 11 jours consécutifs (y compris samedis, dimanches et jours fériés) pour un enfant ou de 18 jours pour une naissance multiple. Le congé doit débuter dans les 4 mois suivant la naissance de l'enfant mais peut être reporté en cas d'hospitalisation de l'enfant. Ce congé s'ajoute aux 3 jours accordés par l'employeur lors de la naissance de l'enfant. ";
      

      // Toxo
      $rootScope.QToxo = "Etes-vous immunisé contre la toxoplasmose?";

      //Menu
      $rootScope.Menu = "Menu";
      $rootScope.MCalendar = "Calendrier médical";
      $rootScope.ACalendar = "Calendrier Administratif";
      $rootScope.ECalendar = "Examen Biologique";
      $rootScope.MPsycho = "Psycho";
      $rootScope.MToday = "Aujourd'hui";
      $rootScope.MToxo = "Toxoplasmose";


      // Divers
      $rootScope.And = " et le ";
      $rootScope.ToxoYes = "Oui";
      $rootScope.ToxoNo = "Non";
      $rootScope.ToxoIDontKnow = "Je ne sais pas";
      $rootScope.CreateAccount = "Créer un compte"; 
      $rootScope.OK = "OK";
      $rootScope.Yes = "Oui";
      $rootScope.No = "Non";
      $rootScope.ModifDatePregnant = "Bonjour, rentrer votre date de début de grossesse corrigé"
      $rootScope.DeliveryDatePregnant = "Rentrez votre date d'accouchement";


      $state.go('step1');
    }
    $scope.english = function(){
      $rootScope.langage = 2;
      //home
      $rootScope.account = "I already have an account";
      $rootScope.begin = "Start adventure";
      
      //Launch
      $rootScope.hello = "Hello, today you are at your ";
      $rootScope.numberOfWeek = "Th week of pregnancy"
      $rootScope.helloFirst = "You have chosen to continue your adventure with us and we thank you for it. ";

      //Bilan Gratuit
      $rootScope.HelloFree = " Hello "; 
      $rootScope.QAge = "How old are you?";
      $rootScope.RAgeB = "You have a moderate risk of fetal chromosomal abnormality.";
      $rootScope.RAgeC = "You have a high risk of fetal chromosomal abnormality.";
      $rootScope.RAgeD = "You have a very high risk of fetal chromosomal abnormality.";

      $rootScope.QPregnant = "Are you pregnant?";
      $rootScope.Pregnant = "Congratulations !";

      $rootScope.QSmoke = "Do you smoke?";
      $rootScope.RSmokeA = "Smoking during pregnancy is likely to cause complications for the fetus";
      $rootScope.RSmokeB = "Smoking increases the risk of infertility, miscarriage, ectopic pregnancy, preterm delivery, intrauterine growth retardation, and sudden infant death syndrome";

      $rootScope.QChild = "Do you have children?";

      $rootScope.QHChild = "How many?";

      $rootScope.QBigChild = "Did you give birth to a child over 4 kilograms?";     $rootScope.BigChildAnswer = "Vous devrez effectuer un dépistage du diabète de grossesse dès le premier trimestre";

      $rootScope.QLessChild = "Have you given birth to a child under 2kg200?";

      $rootScope.QPrema = "Was your child premature?";
      $rootScope.PremaNo =  "This is a history of intrauterine growth retardation which exposes you to a risk of recurrence of about 10% for the next pregnancy (if the woman has not yet been pregnant) for this pregnancy (if Lady answered yes I am already pregnant) ";

      $rootScope.QPreEclamp = "Have you had a preeclampsia?";

      $rootScope.QPregnantDiabete = "Do you have pregnancy diabetes (gestational diabetes)?";

      $rootScope.QNbCesa = "How many caesarean sections have you had?";
      $rootScope.NbCesaAnswer = "The most likely mode of delivery for this pregnancy will be the caesarean section.";

      $rootScope.QMiscarriage = "Did you miscarry?";

      $rootScope.QNbMiscarriage = "How many miscarriages have you done?";
      $rootScope.NbMiacarriageAnswer = "You must carry out a repeat miscarriage assessment and receive appropriate care according to the results of this assessment.";

      $rootScope.QIMG ="Have you done one or more IMGs?";
      $rootScope.IMGYesAnswer = "We recommend a specialized consultation to assess the risk of recurrence of fetal malformation.";

      $rootScope.QAlcool ="How many glasses of alcohol do you drink per week?";
      $rootScope.AlcoolAnswerHighoZero = "During pregnancy the only way to protect your fetus is to stop all alcohol consumption.";
      $rootScope.AlcoolAnswerHighoTen = "You may have an addiction problem with alcohol, we advise you to have a specialized consultation in order to take stock.";

      $rootScope.QEpilepsy = "Do you have epilepsy?";
      $rootScope.EpilepsyAnswer = "Because of your epilepsy, you have a risky pregnancy. You have to be taken care of by a specialized team for the choice of anti-epileptics and their dosage and for the setting up of a suitable fetal monitoring.";
      $rootScope.QPhlebitis = "Have you ever had a phlebitis?";
      $rootScope.PhlebitisAnswer = "Your condition as a pregnant woman increases your risk of recurrence of phlebitis until 6 weeks after delivery, and you should wear compression stockings throughout pregnancy and 6 weeks after delivery. You should prescribe heparin during pregnancy and / or after delivery and discuss it with your gynecologist. ";

      $rootScope.QHighBloodPresure = "Do you have high blood pressure?";
      $rootScope.HighBloodPresureAnswer = "A cause de votre hypertension, vous présentez une grossesse à risque. Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

      $rootScope.QdiabetesH = "Avez-vous du diabète ?";
      $rootScope.diabetesHAnswer = "Because of your diabetes, you have a risky pregnancy. You have to be taken care of by a specialized team for the choice of antidiabetics and their dosage as well as for the setting up of a suitable fetal monitoring.";

      $rootScope.QMedicament = "Do you take medicine?";

      $rootScope.QTypeMedicament = "Select medicines you take";
      $rootScope.EpileptiqueMed = "Anti-Epileptic";
      $rootScope.AntiCoagulentMed = "Anticoagulant";
      $rootScope.AntiHighBloodMed = "Antihypertensive";
      $rootScope.InsulineMed = "Insulin";
      $rootScope.AntiDepressantMed = "Antidepressant";

      $rootScope.QSize = "What is your size ?";

      $rootScope.QWeight = "What is your weight ?";

      $rootScope.IMCLessAnswer =  "Your leanness exposes you to a risk of threatening preterm delivery and baby with intrauterine growth retardation.";     
      $rootScope.IMCHighAnswer =  "Your overweight exposes you to a risk of diabetes during pregnancy and therefore big baby in the long run.";
      $rootScope.IMCMoreHighAnswer = "Your significant obesity exposes you to a very high risk of diabetes, fetal malformation, phlebitis or even pulmonary embolism, as well as difficulty giving birth including caesarean section.";

      $rootScope.QWork = "Do you work?";
      $rootScope.WorkNoAnswer = "Take advantage of it to take the time to take care of yourself, prepare yourself your meals, organize your preparation for the birth and the arrival of your baby.";

      $rootScope.QNbWork = "How many hours do you work per day?";
      $rootScope.NbWorkTenAnswer = "Your hours at work are high.";
      $rootScope.NbWorkTwelveAnswer = "Your hours of presence at work are very high, we propose to arrange your hours of presence at work, which will in any case be essential when your baby will be born :-).";

      $rootScope.QTimeTravel = "What is your journey time per day (in minutes)?";
      $rootScope.TimeTravelAnswer =  "Your transport time is very high, we offer to arrange your hours of presence at work, which will in any case be essential when your baby will be born :-)." ;

      $rootScope.QStandingWork = "Do you work more than 6 hours a day?";
      $rootScope.StandingWorkAnswer = "You may be in trouble to get your pregnancy to an end without the threat of premature birth, so we advise you to discuss your working conditions now with your employer.";

      
      //Calendar Medical
      $rootScope.NumberCalendar = "Congratulations to your";
      $rootScope.Weeks = "th weeks of pregnancy today!";
      $rootScope.delivery = "You should give birth to ";
      $rootScope.calendar = "Your calendar";

      $rootScope.LastM = "The date of your last menstruation is: ";
      $rootScope.DateOfMenstruation = "Start by entering the date of your last rules ";
      $rootScope.LastMenstruationDetail = "Amenorrhea means no rules. Health professionals calculate the stage of pregnancy in weeks of amenorrhea from the first day of the last menstrual period. ";

      $rootScope.BeginOfP = "Your Pregnancy started on: ";
      $rootScope.BeginOfPregnancyDetail = "This date will be determined precisely by your doctor from the results of the first ultrasound and the date of your last menstruation.";

      $rootScope.ReliabilityT = "Reliability of the pregnancy test from: ";
      $rootScope.ReliabilityTPast = "Reliability of the pregnancy test since: ";
      $rootScope.ReliabilityTestDetail = "It is recommended to confirm the results of the pregnancy test with a laboratory blood test in order to more accurately measure hCG hormone levels.";

      $rootScope.FirstC = "Your first consultation must be made between the ";
      $rootScope.FirstCPast = "Your first consultation was carried out the insert the date when we store the data";
      $rootScope.FirstConsultDetail = "Your pregnancy is followed by a doctor or a midwife (liberal, hospital or PMI). As such, you benefit from 7 prenatal medical consultations. During the first consultation, you will establish the main steps of your pregnancy follow-up. It is necessary to trace with your doctor your medical history.";

      $rootScope.FirstE = "Your first ultrasound should be performed between ";
      $rootScope.FirstEPast = "Your first ultrasound was carried out on ";
      $rootScope.FirstEchoDetail = "The dating ultrasound should be performed between the 11th and 13th week of amenorrhea. It allows to confirm the term of pregnancy, to determine the number of embryos, to measure nuchal translucency and to look for certain signs of malformation.";


      $rootScope.FirstPC = "Your first prenatal care must be made between the ";
      $rootScope.FirstPCPast = "Your first prenatal care was conducted in the ";
      $rootScope.FirstPrenatalCareDetail = "This individual or couple interview is carried out by a midwife or a doctor and allows to express your needs and your expectations, to answer your questions and to exchange on your project of birth.";
      

      $rootScope.SecondPC = "Your second prenatal interview should be ";
      $rootScope.SecondPCPast = "Your second prenatal interview was carried out on ";
      $rootScope.SecondPrenatalCareDetail = "Your physician may suggest that you perform the Triple-Test, which is a non-mandatory medical examination that allows you to screen Down Trisomy 21 through a marker assay performed on your blood. If you are over 38 years old, you will be systematically offered to perform an asbestosis test. Your doctor may also recommend that you perform a medical examination of the father - this 100% supported examination is intended to supplement your medical record. ";

      $rootScope.BilanB = "Oral assessment from ";
      $rootScope.BilanBuccoDetail = "You can benefit from a 100% oral health check-up and no advance fees from you. Take care of your teeth as hormonal changes in particular can weaken your teeth and gums, which can increase the risk of premature delivery.";

      $rootScope.SecondE = "Your second ultrasound should be ";
      $rootScope.SecondEPAst = "Your second ultrasound was performed on ";
      $rootScope.SecondEchoDetail = "The morphological ultrasound should be performed between the 21st and 23rd week of amenorrhea. It allows to analyze the morphology of the fetus, to check the fetal growth, to locate the placenta and to detect other anomalies. You can, if you wish, know the sex of your baby!";

      $rootScope.ThirdPC = "Your third prenatal interview should be ";
      $rootScope.ThirdPCPast = "Your third prenatal interview was carried out on ";
      $rootScope.ThirdPrenatalCareDetail = "Your doctor interprets and explains the morphological ultrasound.";

      $rootScope.diabete = "Your diabete screening should be done between the ";
      $rootScope.diabetePast = "Your diabete screening was completed on";
      $rootScope.diabeteDetail = "Gestational diabetes also called hyperglycemia or pregnancy diabetes, is an elevation of blood sugar that occurs during pregnancy. It is a benign form of diabetes which affects between 6% and 12% of pregnancies and requires the setting up of an adapted follow-up.";


      $rootScope.FourPC = "Your fourth prenatal interview should be done between ";
      $rootScope.FourPCPast = "Your fourth prenatal interview was";
      $rootScope.FourPrenatalCareDetail = "Medical consultation of your 6th month of pregnancy.";


      $rootScope.FivePC = "Your fifth prenatal interview should be ";
      $rootScope.FivePCPast = "Your fifth prenatal interview was carried out on ";
      $rootScope.FivePrenatalCareDetail = "Medical consultation of your 7th month of pregnancy.";
      
      $rootScope.ThirdE = "Your third ultrasound should be";
      $rootScope.ThirdEPAst = "Your third ultrasound was performed on";
      $rootScope.ThirdEchoDetail = "Fetal growth ultrasound should be performed between the 31st and 33rd week of amenorrhea. It allows to check fetal growth, presentation and placental location.";

      $rootScope.SixthPC = "Your sixth prenatal interview should be";
      $rootScope.SixthPCPast = "Your sixth prenatal interview was completed on ";
      $rootScope.SixthPrenatalCareDetail = "Your doctor interprets and explains to you the ultrasound of growth. It is also the occasion for him to inform you about your mode of delivery.";

      $rootScope.AnesthetistC = "Your consultation with the anesthetist must be done between ";
      $rootScope.AnesthetistCPast = "Your consultation with the anesthetist was carried out on ";
      $rootScope.AnesthetistConsultDetail = "This consultation ensures the safety of any anesthesia and is mandatory.";

      $rootScope.SeventhPC = "Your seventh prenatal maintenance should be performed between ";
      $rootScope.SeventhPCPast = " Your seventh prenatal maintenance was performed on ";
      $rootScope.SeventhPrenatalCareDetail = "Your doctor will confirm the place and the modalities of your delivery. It will also inform you of the different signs that should attract your attention and bring you to emergency maternity (contractions, loss of fluid, loss of blood, etc.)";

      $rootScope.DateOfT = "Your theoretical term date is: " 
      $rootScope.DateOfTermDetail = "You should consult your doctor or midwife.";

      //Calendar Administratif

      $rootScope.PregnantD = "";


      // Toxo
      $rootScope.QToxo = "Are you immunized against toxoplasmosis?";

      //Menu
      $rootScope.Menu = "Menu";
      $rootScope.MCalendar = "Medical calendar";
      $rootScope.ACalendar = "Administrative calendar";
      $rootScope.ECalendar = "Organic Review";
      $rootScope.MPsycho = "Psycho";
      $rootScope.MToday = "Today";
      $rootScope.MToxo = "Toxoplasmosis";


      //Divers
      $rootScope.And = " and the ";
      $rootScope.ToxoYes = "Yes";
      $rootScope.ToxoNo = "No";
      $rootScope.ToxoIDontKnow = "I don't know";
      $rootScope.CreateAccount = "Create an Account"; 
      $rootScope.OK = "OK";

      $state.go('step1');
    }

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
