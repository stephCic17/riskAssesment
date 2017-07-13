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

.controller('PsychoHomeCtrl', function($scope, $state, $http , $rootScope){
  $scope.data = {};
  $scope.test =
  url = ""
  $scope.goPsycho = function(){
    $state.go('psycho1');
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
    if ($scope.yesc==true)
      $rootScope.PregnantGood = 1;
    else
      $rootScope.PregnantBad = 0;
    if ($scope.yesc == true )
      $state.go('step3');
    if ($scope.noc == true)
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
      if ($scope.yesc==true){
        $rootScope.BigChild = 1;
        $rootScope.score += 50;
        }
      else 
        $rootScope.BigChild = 0;
      if ($scope.yesc == true || $scope.noc == true ) {
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
      if ($scope.yesc==true){
        $rootScope.LessChild = 1;
        $rootScope.score += 50;
        $state.go('step9');
      }
      else {
        $rootScope.LessChild = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true) {
        $rootScope.Prema = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.Prema = 0;
       if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true) {
        $rootScope.PreEclamp = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.PreEclamp = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true) {
        $rootScope.PregnantDiabete = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.PregnantDiabete = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true){
        $rootScope.Miscarriage= 1;
        $rootScope.score += 2;
      if ($scope.yesc == true)
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
      if ($scope.yesc==true) {
        $rootScope.IMG = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.IMG = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true) {
        $rootScope.score += 200;
        $rootScope.Epilepsy = 1;
      }
      else
        $rootScope.Epilepsy = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true) {
        $rootScope.Phlebitis = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.Phlebitis = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true){
        $rootScope.HighBloodPresure = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.HighBloodPresure = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true) {
        $rootScope.diabetesH = 1;
        $rootScope.score += 50;
      }
      else
        $rootScope.diabetesH = 0;
      if ($scope.yesc == true || $scope.noc == true )
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
      if ($scope.yesc==true){
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
      if ($scope.yesc==true){
        $rootScope.Work= 1;
        $state.go('step26');
      }
      else {
        $rootScope.Work= 0;
      if ($scope.yesc == true || $scope.noc == true )
        $state.go('app.step00');
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
      $state.go('app.step00');
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
      if ($scope.yesc==true) {
        $rootScope.StandingWork = 1;
        $rootScope.score += 2;
      }
      else
        $rootScope.StandingWork = 0;
      $state.go('app.step00');
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
    $state.go('app.step00');
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
    if ( $rootScope.Age < 35 )
      $scope.profil1 = $rootScope.RAgeA;
    else if ( $rootScope.Age < 38 )
      $scope.profil1 = $rootScope.RAgeB;
    else if ( $rootScope.Age < 42 )
      $scope.profil1 = $rootScope.RAgeC;
   else if ( $rootScope.Age >= 42 )
      $scope.profil1 = $rootScope.RAgeD; 
    if ($rootScope.Pregnant == 1 && $rootScope.Smoke == 1)
      $scope.profil2 = $rootScope.RSmokeA;
    else if ($rootScope.Smoke == 1)
      $scope.profil2 = $rootScope.RSmokeB;
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
    if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0)
      $scope.profil8 = $rootScope.AlcoolAnswerHighoZero;
    else if ($rootScope.Alcool >= 10)
      $scope.profil8 = $rootScope.AlcoolAnswerHighoTen;
   if ($rootScope.Epilepsy == 1)
      $scope.profil9 = $rootScope.EpilepsyAnswer;
    if ($rootScope.Phlebitis == 1)
      $scope.profil10 = $rootScope.PhlebitisAnswer;
    if ($rootScope.HighBloodPresure == 1)
      $scope.profil11 = $rootScope.HighBloodPresureAnswer;
    if ($rootScope.diabetesH == 1)
      $scope.profil12 = $rootScope.diabetesHAnswer;
    if ($rootScope.IMC < 17)
      $scope.profil13 = $rootScope.IMCLessAnswer;
    else if ($rootScope.IMC > 22 && $rootScope.diabetesH == 1)
      $scope.profil13 = "surpoid+diabete";
    else if ($rootScope.IMC > 22 && $rootScope.IMC <= 28)
      $scope.profil14 = $rootScope.IMCHighAnswer;
    else if ($rootScope.IMC > 28)
      $scope.profil14 = $rootScope.IMCMoreHighAnswer;
    if ($rootScope.Work == 1) {
      if ($rootScope.NbWork > 10 && $rootScope.NbWork <= 12)
        $scope.profil15 = $rootScope.NbWorkTenAnswer;
      else if ($rootScope.NbWork > 12)
        $scope.profil15 = $rootScope.NbWorkTwelveAnswer;
      if ($rootScope.TimeTravel > 90)
        $scope.profil16 = $rootScope.TimeTravelAnswer;
      if ($rootScope.StandingWork == 1)
        $scope.profil17 = $rootScope.StandingWorkAnswer;
  }
  else{
      $scope.profil18 = $rootScope.WorkNoAnswer;
    }

    $scope.changeview = function() {
      $state.go('app.step00');
    }
    $scope.continue = function() {
        $state.go('app.launch');
      }
})
.controller('Step00Ctrl', function($scope, $state, $http, $rootScope) {
      $scope.data = {};
  $scope.test = 
    url = ""
    if ($rootScope.PregnantGood == 1) 
      $scope.Positif = "Félicitation vous êtes enceinte !";
    else if ($rootScope.Child == 0)
     $scope.Positif = "Félicitation vous allez avoir votre premier enfant"; 
    else if ($rootScope.Age < 38)
      $scope.Positif = "Vous avez le bon l'âge optimal pour faire un enfantt";
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
    if ( $rootScope.Age < 35 )
      $scope.profil1 = $rootScope.RAgeA;
    else if ( $rootScope.Age < 38 )
      $scope.profil1 = $rootScope.RAgeB;
    else if ( $rootScope.Age < 42 )
      $scope.risk1 = " - A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale";
    else if ( $rootScope.Age >= 42 )
      $scope.risk1 = " - A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale";
    if ($rootScope.Pregnant == 1 && $rootScope.Smoke == 1)
      $scope.risk2 = " - Vous fumez, ce qui peut entrainer de nombreuses complications.";
    else if ($rootScope.Smoke == 1)
      $scope.risk2 = "- Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse.";
    if ($rootScope.BigChild == 1)
      $rootScope.risk3 = "- Vous avez eus un enfant de  + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse";

    if ($rootScope.Prema == 0 && $rootScope.LessChild == 1)
      $rootScope.risk4 =  "Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 % ";
    if ($rootScope.NbMiacarriage >= 3)
      $rootScope.risk6 = "- Vous avez eu un nombre élevé de fausse couches";
    if ($rootScope.IMG == 1)
      $rootScope.risk7 = " - Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive";
    if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0){
      $scope.risk8 = " - Vous consommez de l'alcool";
    }
    else if ($rootScope.Alcool >= 10)
      $scope.risk8 = " - Vous consommez une quantité d'alcool importante";
   if ($rootScope.Epilepsy == 1)
      $scope.risk9 = " - Votre épilepsie.";
    if ($rootScope.Phlebitis == 1)
      $scope.risk10 = " - Votre antécédent de phlébite";
    if ($rootScope.HighBloodPresure == 1)
      $scope.risk11 = " -Votre hypertension";
    if ($rootScope.diabetesH == 1)
      $scope.risk12 = "- Votre diabète";
    if ($rootScope.IMC < 17)
      $scope.risk13 = "- Votre Poids ";
    else if ($rootScope.IMC > 22 && $rootScope.diabetesH == 1) 
      $scope.risk13 = " - Votre Poids ";
    else if ($rootScope.IMC > 22 && $rootScope.IMC <= 28)
      $scope.risk14 = " - Votre poids ";
    else if ($rootScope.IMC > 28)
      $scope.risk14 = " - Votre Poids ";
    if ($rootScope.Work == 1){
      if ($rootScope.NbWork > 10 && $rootScope.NbWork <= 12)
        $scope.risk15 = " - Votre nombre d'heure de travail est élevé.";
      else if ($rootScope.NbWork > 12)
        $scope.risk15 = " - Votre nombre d'heure de travail est vraiment très élevé";
      if ($rootScope.TimeTravel > 90)
        $scope.risk16 = " - Votre temps de trajet pour aller au travail est élevé";
      if ($rootScope.StandingWork == 1)
        $scope.risk17 = " - Vous travaillez debout plus de 6 heures par jour";
    }



///////////////////////////////////////////////////////////Conseil

    if ($rootScope.Pregnant == 1 && $rootScope.Smoke == 1)
      $scope.conseil2 = " - Arrêtez de fumer !";
    else if ($rootScope.Smoke == 1)
      $scope.conseil2 = "- Arrêtez de fumer avant d'entammer une grossesse ! ";
    if ($rootScope.BigChild == 1 && $rootScope.diabetesH == 0)
      $rootScope.conseil3 = "- Effectuez un dépistage de diabète de grossesse";
    if ($rootScope.Pregnant == 0 )
      $rootScope.conseil4 = "- Puisque vous n' êtes pas encore enceinte, vous avez le temps d'anticiper. En particulier, vous devez prendre de acide folique au dosage de 0,4 mg par jour avant la conception et jusqu'au 3 ème mois de grossesse.";
    else 
       $rootScope.conseil4 = "- Vous devez prendre de acide folique au dosage de 0,4 mg par jour avant la conception et jusqu'au 3 ème mois de grossesse.";
      
    if ($rootScope.NbMiacarriage >= 3)
      $rootScope.conseil6 = " - Effectuez un bilan de fausse couche à répétition et bénéficiez d'une prise en charge adaptée en fonction des résultats de ce bilan.";
    if ($rootScope.IMG == 1)
      $rootScope.conseil7 = " - Prenez rendez-vous pour une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale.";
    if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0 && $rootScope.Pregnant == 1)
      $scope.conseil8 = " - Stoppez votre consommation d'alcool !";
    else if ($rootScope.Alcool < 10 && $rootScope.Alcool > 0 && $rootScope.Pregnant == 0)
      $scope.conseil8 = " - Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!";
    else if ($rootScope.Alcool >= 10)
      $scope.conseil8 = " - Prenez rendez-vous dans un centre spécialisée pour vous aider à arrêter l'alcool ";
   if ($rootScope.AntiepilepsyAnswer == 1)
    $scope.conseil9 = " - Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";
    if ($rootScope.AntiCoagulentAnswer == 1)
      $scope.conseil10 = " - Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";


    if ($rootScope.AntiHighBloodAnswer == 1)
      $scope.conseil11 = " - Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";
    if ($rootScope.InsulineAnswer == 1)
      $scope.conseil12 = " -Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée. ";
    if ($rootScope.IMC < 17)
      $scope.conseil13 = "- Alimentez-vous correctement ";
    else if ($rootScope.IMC > 22 && $rootScope.diabetesH == 1) 
      $scope.conseil13 = " - Attention à ne pas prendre trop de poids ";
    if ($rootScope.Work == 1) {
      if ($rootScope.NbWork > 10 && $rootScope.NbWork <= 12)
        $scope.conseil15 = " - Essayer d'aménager vos heures de travail";
      else if ($rootScope.NbWork > 12)
        $scope.conseil15 = " - Essayer d'aménager vos heures de travail";
      if ($rootScope.TimeTravel > 90)
        $scope.conseil16 = " - Essayer d'aménager vos heures de présence au travail pour diminuer les temps de trajets.";
      if ($rootScope.StandingWork == 1)
        $scope.conseil17 = " - Nous vous conseillons de discuter dès à présent avec votre employeur de la possibilité d'aménager vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour.";
      }




///////////////////////////////////////////////////////////positif
  
  if ($rootScope.Age < 38)
    $scope.positif1 = " - Vous avez l'âge optimal pour faire un enfant";
  if ($rootScope.Smoke == 0)
      $scope.positif2 = "- Vous ne fumez pas ";
    if ($rootScope.BigChild == 0 && $rootScope.LessChild == 0 && $rootScope.Prema == 0 && $rootScope.PreEclamp == 0 && $rootScope.Child == 1 && $rootScope.IMG == 0 && $rootScope.Miscarriage == 0)
      $rootScope.positif3 = "- Vos précédentes grossesses se sont bien passées, donc vous avez les meilleurs chances que les grossesse suivantes se passent bien !";
    if ($rootScope.IMG == 1)
      $scope.profil4 = " - La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare";
    if ($rootScope.Alcool == 0)
      $scope.positif8 = " - Vous ne buvez pas !";
   if ($rootScope.HighBloodPresure == 0 && $rootScope.epilepsy == 0 && $rootScope.Phlebitis == 0 && $rootScope.diabetesH == 0)
    $scope.positif9 = " - Vous ne présentez pas de problème de santé ayant un impac sur la grossesse";
 if  ($rootScope.IMC <= 22 && $rootScope.IMC >= 17 ) 
      $scope.positif13 = " - Votre poids est idéal ";
    if ($rootScope.Work == 0)
      $scope.profil18 = " - Vous ne travaillez pas, vous pouvez donc prendre le temps de vous occuper de vous et préparer la venue de votre enfant ";

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
  
  }
})


.controller('Psycho1Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.Submit = function(AngoisseCriseAnswer,BoulimieAnswer, AnorexieAnswer, TocAnswer, DepressionAnswer, PhobieAnswer, BipolaireAnswer, HPAnswer){
        $rootScope.scorePsy1Add = 0;
        $rootScope.scorePsy1 = 0;
    $rootScope.AngoisseCriseAnswer = AngoisseCriseAnswer;
    if ($rootScope.AngoisseCriseAnswer == 1) {
        $rootScope.scorePsy1 += 1;
        $rootScope.scorePsy1Add += 1;
      }
    $rootScope.BoulimieAnswer = BoulimieAnswer;
    if ($rootScope.BoulimieAnswer == 1) {
        $rootScope.scorePsy1 += 2;
        $rootScope.scorePsy1Add += 1;
      }
    $rootScope.AnorexieAnswer = AnorexieAnswer;
    if ($rootScope.AnorexieAnswer == 1) {
        $rootScope.scorePsy1 += 2;
        $rootScope.scorePsy1Add += 1;
      }
    $rootScope.TocAnswer = TocAnswer;
    if ($rootScope.TocAnswer == 1) {
        $rootScope.scorePsy1 += 1;
        $rootScope.scorePsy1Add += 1;
      }
    $rootScope.DepressionAnswer = DepressionAnswer;
    if ($rootScope.DepressionAnswer == 1) {
        $rootScope.scorePsy1 += 2;
        $rootScope.scorePsy1Add += 1;
      }
    $rootScope.PhobieAnswer = PhobieAnswer;
    if ($rootScope.PhobieAnswer == 1) {
        $rootScope.scorePsy1 += 1;
        $rootScope.scorePsy1Add += 1;
      }
    $rootScope.BipolaireAnswer = BipolaireAnswer;
    if ($rootScope.BipolaireAnswer == 1) {
        $rootScope.scorePsy1 += 2;
        $rootScope.scorePsy1Add += 1;
      }
        $rootScope.HPAnswer = HPAnswer;
    if ($rootScope.HPAnswer == 1) {
        $rootScope.scorePsy1 += 2;
        $rootScope.scorePsy1Add += 1;
      }
      console.log($rootScope.BoulimieAnswer);
    $state.go('psycho2');
  }
})

.controller('Psycho2Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $rootScope.scorePsy2 = 0;
  $scope.procreation = 0;
  $scope.Submit = function(procreation, yearsProcreation, NbProcreation, OocyteDonation, spermDonation){
    $rootScope.procreation = procreation;
    if ($rootScope.procreation == 1) 
        $rootScope.scorePsy2 += 1;
    $rootScope.yearsProcreation = yearsProcreation;
    if ($rootScope.yearsProcreation <= 2)
        $rootScope.scorePsy2 += 1;
    else if ($rootScope.yearsProcreation >= 3)
        $rootScope.scorePsy2 += 2;

    $rootScope.NbProcreation = NbProcreation;
    if ($rootScope.NbProcreation <= 2)
        $rootScope.scorePsy2 += 1;
    else if ($rootScope.NbProcreation > 2)
        $rootScope.scorePsy2 += 2;
    $rootScope.OocyteDonation = OocyteDonation;
    if ($rootScope.OocyteDonation == 1)
        $rootScope.scorePsy2 += 2;
    $rootScope.spermDonation = spermDonation;
    if ($rootScope.spermDonation == 1)
        $rootScope.scorePsy2 += 2;
    if ($rootScope.Child == 1)
      $state.go('psycho3');
    else 
      $state.go('psycho4');
  }
})

.controller('Psycho3Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.Submit = function(forceps, ventouse, urgenceCesa, generalAnest, hemorragie, babySeparation, dieDelevery, dieBaby, traumaDelevery){
    $rootScope.scorePsy3 = 0;
    $rootScope.forceps = forceps;
    if ($rootScope.forceps == 1)
        $rootScope.scorePsy3 += 1;
    $rootScope.ventouse = ventouse;
    if ($rootScope.ventouse == 1)
        $rootScope.scorePsy3 += 2;
    $rootScope.urgenceCesa = urgenceCesa;
    if ($rootScope.urgenceCesa == 1)
        $rootScope.scorePsy3 += 2;
    $rootScope.generalAnest = generalAnest;
    if ($rootScope.generalAnest == 1)
        $rootScope.scorePsy3 += 1;
    $rootScope.hemorragie = hemorragie;
    if ($rootScope.hemorragie == 1)
        $rootScope.scorePsy3 += 2;
    $rootScope.babySeparation = babySeparation;
    if ($rootScope.babySeparation == 1)
        $rootScope.scorePsy3 += 5;
    $rootScope.dieDelevery = dieDelevery;
    if ($rootScope.dieDelevery == 1)
        $rootScope.scorePsy3 += 5;
        $rootScope.dieBaby = dieBaby;
    if ($rootScope.dieBaby == 1)
        $rootScope.scorePsy3 += 5;
      $rootScope.traumaDelevery = traumaDelevery;
    if ($rootScope.traumaDelevery == 1)
        $rootScope.scorePsy3 += 5;

    $state.go('app.psychoResult');
  }
})
.controller('Psycho4Ctrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
  $scope.FCPsy = 0;
  $scope.IVGPsy = 0;
  $scope.GEUPsy = 0;
  $scope.DieIV = 0;
  $scope.IMGPsy = 0;
  $scope.ISGPsy = 0;
  $scope.ChildHand = 0;
  $scope.ChildPrema = 0;
  $scope.ChildChronique = 0;
  $scope.DieBabyPsy = 0;
  $rootScope.scorePsy4 = 0;
  $scope.Submit = function(FCPsy, IVGPsy, GEUPsy, DieIV, IMGPsy, ISGPsy, ChildHand, ChildPrema, ChildChronique, DieBabyPsy, PregnantTraumaPsy, TraumaExperiencePsy){
    $rootScope.FCPsy = FCPsy;
    if ($rootScope.FCPsy == 1)
        $rootScope.scorePsy4 += 1;
    $rootScope.IVGPsy = IVGPsy;
    if ($rootScope.IVGPsy == 1)
        $rootScope.scorePsy4 += 1;
    $rootScope.GEUPsy = GEUPsy;
    if ($rootScope.GEUPsy == 1)
        $rootScope.scorePsy4 += 1;
    $rootScope.DieIV = DieIV;
    if ($rootScope.DieIV == 1)
        $rootScope.scorePsy4 += 2;
    $rootScope.IMGPsy = IMGPsy;
    if ($rootScope.IMGPsy == 1)
        $rootScope.scorePsy4 += 2;
    $rootScope.ISGPsy = ISGPsy;
    if ($rootScope.ISGPsy == 1)
        $rootScope.scorePsy4 += 3;
    $rootScope.ChildHand = ChildHand;
    if ($rootScope.ChildHand == 1)
        $rootScope.scorePsy4 += 3;
        $rootScope.ChildPrema = ChildPrema;
    if ($rootScope.ChildPrema == 1)
        $rootScope.scorePsy4 += 1;
        $rootScope.ChildChronique = ChildChronique;
    if ($rootScope.ChildChronique == 1)
        $rootScope.scorePsy4 += 3;
            $rootScope.DieBabyPsy = DieBabyPsy;
    if ($rootScope.DieBabyPsy == 1)
        $rootScope.scorePsy4 += 3;
            $rootScope.PregnantTraumaPsy = PregnantTraumaPsy;
    if ($rootScope.PregnantTraumaPsy == 1)
        $rootScope.scorePsy4 += 10;
        $rootScope.TraumaExperiencePsy = TraumaExperiencePsy;
    if ($rootScope.TraumaExperiencePsy == 1)
        $rootScope.scorePsy4 += 10;
    $state.go('app.psychoResult');
  }
})

.controller('PsychoResultCtrl', function($scope, $state,  $http, $rootScope) {
  $scope.data = {};
  $scope.test = 
  url = ""
        $scope.profilPsy1 = ""; 
        $scope.profilPsy2 = ""; 
        $scope.profilPsy3 = ""; 
        $scope.profilPsy4 = ""; 


       if ($rootScope.scorePsy1Add > 0) {
            $scope.profilPsy1 = "Vos antécédents psychiatriques augmentent votre risque de dépression du post partum. Votre accouchement pourrait aggraver ";
         $rootScope.profil1Psy1End = " ";
      
        if ($rootScope.AngoisseCriseAnswer == 1) {
          $rootScope.profil1Psy1End += "vos crise d'angoisses";
         if ($rootScope.scorePsy1Add > 1){
          $rootScope.profil1Psy1End += ", ";
          $rootScope.scorePsy1Add -= 1;   
          }
        }
        if ($rootScope.BoulimieAnswer == 1) {
          $rootScope.profil1Psy1End += "votre boulimie";
          if ($rootScope.scorePsy1Add > 1){
            $rootScope.profil1Psy1End += ", ";
            $rootScope.scorePsy1Add -= 1;   
          }
        }
        if ($rootScope.TocAnswer == 1) {
          $rootScope.profil1Psy1End += "votre anorexie";
          if ($rootScope.scorePsy1Add > 1){
            $rootScope.profil1Psy1End += ", ";
            $rootScope.scorePsy1Add -= 1;   
          }
        }
        if ($rootScope.DepressionAnswer == 1) {
          $rootScope.profil1Psy1End += "vos TOC";
          if ($rootScope.scorePsy1Add > 1){
           $rootScope.profil1Psy1End += ", ";
           $rootScope.scorePsy1Add -= 1;   
          }
        }
        if ($rootScope.AnorexieAnswer == 1) {
          $rootScope.profil1Psy1End += "votre dépression";
          if ($rootScope.scorePsy1Add > 1){
            $rootScope.profil1Psy1End += ", ";
            $rootScope.scorePsy1Add -= 1;   
          }
        }
        if ($rootScope.PhobieAnswer == 1) {
          $rootScope.profil1Psy1End += "vos phobies";
          if ($rootScope.scorePsy1Add > 1){
            $rootScope.profil1Psy1End += ", ";
            $rootScope.scorePsy1Add -= 1;   
          }
        }
        if ($rootScope.BipolaireAnswer == 1) {
          $rootScope.profil1Psy1End += "vos troubles bipolaires";
          if ($rootScope.scorePsy1Add > 1){
            $rootScope.profil1Psy1End += ", ";
            $rootScope.scorePsy1Add -= 1;   
          }
        }
        if ($rootScope.HpAnswerAnswer == 1) {
          $rootScope.profil1Psy1End += "vos troubles bipolaires";
          if ($rootScope.scorePsy1Add > 1){
            $rootScope.profil1Psy1End += ", ";
            $rootScope.scorePsy1Add -= 1;   
          }
        }
        $rootScope.profil1Psy1End += ".";
        $scope.profilPsy1 += $rootScope.profil1Psy1End;
        }

        if ($rootScope.scorePsy2 > 2)
          $scope.profilPsy2 = "Votre parcours d'infertilité augmente votre risque de présenter une dépression du post partum.";
        if ($rootScope.scorePsy3 >= 5)
          $scope.profilPsy3 = "vos antécédents obstétricaux augmentent votre risque de survenue de syndrome de stress post traumatique. Ils augmentent aussi votre risuqe de dpéression du post partum. ";
        if ($rootScope.scorePsy4 >= 5 && $rootScope.scorePsy4 <= 10)
          $scope.profilPsy4 = "Vous mérité une consultation complémentairepour évaluer votre risque réel de stress post traumatique.";
        if ($rootScope.scorePsy4 > 10 )
          $scope.profilPsy4 = "Vos antécédent obstétricaux augmente votre risque de dépression ou de syndrome de stress post traumatique.";

          console.log('1 =');
          console.log($scope.profilPsy1);
          console.log('2 =');
          console.log($scope.profilPsy1);
          console.log('3 =');
          console.log($scope.profilPsy1);
          console.log('4 =');
          console.log($scope.profilPsy1);

          if ($scope.profilPsy1 == "" && $scope.profilPsy2 == "" && $scope.profilPsy3 == "" && $scope.profilPsy4 == "")
            $scope.profilPsy1 = "Vous n'avez pas de disposition partiuliere a la depression";
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
