angular.module('starter.controllers', [])

.config( function( $ionicConfigProvider ) 
	{
		$ionicConfigProvider.backButton.text('').icon('ion-chevron-left custom-icon');
	})

.controller('Step1Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.InputNumber = function( age )
		{
			$rootScope.Age = age;
			if ( $rootScope.Age > 0 )
			{
				if ( $rootScope.Age > 42 )
					$rootScope.score = 50;
				else if ( $rootScope.Age == 42 )
					$rootScope.score = 20;
				else if ( $rootScope.Age > 38 )
					$rootScope.score = 2;
				else 
					$rootScope.score = 0;
				$state.go('step2');
			}
		}
	})

.controller('Step5Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.InputNumber = function( child ) 
		{
			$rootScope.HChild = child;
			if ( $rootScope.HChild > 0 )
				$state.go('step6');
		}
	})

.controller('Step14Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
	
		$scope.nb = function( NbMiacariage ) 
		{
			$rootScope.miscarriage = NbMiacariage;
			if ( $rootScope.miscarriage > 0 )
				$state.go('step16');
		}
	})

.controller('Step16Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.data.nb = 0;

		$scope.nb = function() 
		{
			$rootScope.Alcool = $scope.data.nb;
			if ( $rootScope.Alcool >= 0 )
			{
				if ( $rootScope.Alcool > 10 )
					$rootScope.score == 400;
				$state.go('step17');
			}
		}
	})

.controller('Step22Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};

		$scope.Submit = function( AntiepilepsyAnswer, AntiCoagulentAnswer, AntiHighBloodAnswer, AntidepressantAnswer, InsulineAnswer)
		{
			$rootScope.AntiepilepsyAnswer = AntiepilepsyAnswer;
			if ( $rootScope.AntiepilepsyAnswer == 1 )
				$rootScope.score += 200;

			$rootScope.AntiCoagulentAnswer = AntiCoagulentAnswer;
			if ( $rootScope.AntiCoagulentAnswer == 1 )
				$rootScope.score += 200;
	
			$rootScope.AntiHighBloodAnswer = AntiHighBloodAnswer;
			if ( $rootScope.AntiHighBloodAnswer == 1 )
				$rootScope.score += 2;
		
			$rootScope.AntidepressantAnswer = AntidepressantAnswer;
			if ( $rootScope.AntidepressantAnswer == 1 )
				$rootScope.score += 2;
			
			$rootScope.InsulineAnswer = InsulineAnswer;
			if ( $rootScope.InsulineAnswer == 1 )
				$rootScope.score += 200;

			$state.go('step23');
		}
	})

.controller('Step23Ctrl', function( $scope, $state, $http, $rootScope )
	{
		$scope.data = {};
	
		$scope.nb = function( Size )
		{
			$rootScope.Size = Size;
			$state.go('step24');
		}
	})

.controller('Step24Ctrl', function( $scope, $state, $http, $rootScope )
	{
		$scope.data = {};

		$scope.nb = function( Weight )
		{
			$rootScope.Weight = Weight;
			$rootScope.IMC = $rootScope.Weight / Math.pow( $rootScope.Size/100, 2 );
			
			if ( $rootScope.IMC > 28 )
				$rootScope.score += 50;
			else if ( $rootScope.IMC > 22 )
				$rootScope.score += 20;     
			else if ( $rootScope.IMC > 17 )
				$rootScope.score += 0;      
			else if ( $rootScope.IMC < 17 )
				$rootScope.score += 50;     
			
			$state.go('step25');
		}
	})


.controller('Step26Ctrl', function( $scope, $state, $http, $rootScope )
	{
		$scope.data = {};
		$scope.nb = function( NbWork )
		{
			$rootScope.NbWork = NbWork;
			if ( $rootScope.NbWork > 10 )
				$rootScope.score += 2;      
			$state.go('step27');
		}
	})

.controller('Step27Ctrl', function( $scope, $state, $http, $rootScope )
	{
		$scope.data = {};

		$scope.nb = function( TimeTravel )
		{
			$rootScope.TimeTravel = TimeTravel;
			if ( $rootScope.TimeTravel > 90 )
				$rootScope.score += 2; 
			if ( $rootScope.NbWork <= 6 )     
				$state.go('app.step00');
			else
				$state.go('step28');
		}
	})

.controller('Step30Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.Submit = function(AngoisseCriseAnswer,BoulimieAnswer, AnorexieAnswer, TocAnswer, DepressionAnswer, PhobieAnswer, BipolaireAnswer, HPAnswer)
		{
			$rootScope.AngoisseCriseAnswer = AngoisseCriseAnswer;
			if ( $rootScope.AngoisseCriseAnswer == 1 )
				$rootScope.scorePsy += 1;

			$rootScope.BoulimieAnswer = BoulimieAnswer;
			if ( $rootScope.BoulimieAnswer == 1 )
				$rootScope.scorePsy += 2;
	
			$rootScope.AnorexieAnswer = AnorexieAnswer;
			if ( $rootScope.AnorexieAnswer == 1 )
				$rootScope.scorePsy += 2;
	
			$rootScope.TocAnswer = TocAnswer;
			if ( $rootScope.TocAnswer == 1 )
				$rootScope.scorePsy += 1;
		
			$rootScope.DepressionAnswer = DepressionAnswer;
			if ( $rootScope.DepressionAnswer == 1 )
				$rootScope.scorePsy += 2;
			
			$rootScope.PhobieAnswer = PhobieAnswer;
			if ( $rootScope.PhobieAnswer == 1 )
				$rootScope.scorePsy += 1;
			
			$rootScope.BipolaireAnswer = BipolaireAnswer;
			if ( $rootScope.BipolaireAnswer == 1 )
				$rootScope.scorePsy += 2;
		
			$rootScope.HPAnswer = HPAnswer;
			if ( $rootScope.HPAnswer == 1 )
				$rootScope.scorePsy += 2;
		
			$state.go('app.step00');
		}
	})

.controller('Psycho1Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};

		$scope.Submit = function( AngoisseCriseAnswer,
									BoulimieAnswer,
									AnorexieAnswer, 
									TocAnswer, 
									DepressionAnswer, 
									PhobieAnswer, 
									BipolaireAnswer, 
									HPAnswer )
		{
			$rootScope.scorePsy1 = 0;

			$rootScope.AngoisseCriseAnswer = AngoisseCriseAnswer;
		
			$rootScope.BoulimieAnswer = BoulimieAnswer;
			if ( $rootScope.BoulimieAnswer == 1 ) 
				$rootScope.scorePsy1 += 2;
		
			$rootScope.AnorexieAnswer = AnorexieAnswer;
			if ( $rootScope.AnorexieAnswer == 1 ) 
				$rootScope.scorePsy1 += 2;
		
			$rootScope.TocAnswer = TocAnswer;
			if ( $rootScope.TocAnswer == 1 ) 
				$rootScope.scorePsy1 += 1;
		
	 		$rootScope.DepressionAnswer = DepressionAnswer;
				if ( $rootScope.DepressionAnswer == 1 ) 
					$rootScope.scorePsy1 += 2;
		
			$rootScope.PhobieAnswer = PhobieAnswer;
			if ( $rootScope.PhobieAnswer == 1 ) 
				$rootScope.scorePsy1 += 1;
			
			$rootScope.BipolaireAnswer = BipolaireAnswer;
			if ( $rootScope.BipolaireAnswer == 1 ) 
				$rootScope.scorePsy1 += 2;
		
			$rootScope.HPAnswer = HPAnswer;
			if ( $rootScope.HPAnswer == 1 ) 
				$rootScope.scorePsy1 += 2;
		
			$state.go('app.step00');
		}
	})

.controller('Psycho2Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
		$rootScope.scorePsy2 = 0;
		$scope.procreation = 0;
	
		$scope.Submit = function( procreation, 
									yearsProcreation,
								NbProcreation,
									OocyteDonation,
									spermDonation )
		{
			$rootScope.procreation = procreation;
			if ( $rootScope.procreation == 1 ) 
			$rootScope.scorePsy2 += 1;
		
			$rootScope.yearsProcreation = yearsProcreation;
			if ( $rootScope.yearsProcreation <= 2)
				$rootScope.scorePsy2 += 1;
			else if ( $rootScope.yearsProcreation >= 3)
				$rootScope.scorePsy2 += 2;
		
			$rootScope.NbProcreation = NbProcreation;
			if ( $rootScope.NbProcreation <= 2)
				$rootScope.scorePsy2 += 1;
			else if ( $rootScope.NbProcreation > 2)
				$rootScope.scorePsy2 += 2;
		
			$rootScope.OocyteDonation = OocyteDonation;
			if ( $rootScope.OocyteDonation == 1 )
				$rootScope.scorePsy2 += 2;
	 	
			$rootScope.spermDonation = spermDonation;
			if ( $rootScope.spermDonation == 1 )
 				$rootScope.scorePsy2 +=  2 ;
		
			$state.go('step3') ;
		 }
	})

.controller('Psycho3Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
	
		 $scope.Submit = function( forceps,
									ventouse,
						 			urgenceCesa,
									generalAnest,
									hemorragie,
									babySeparation,
									dieDelevery, 
 									dieBaby, 
									traumaDelevery )
		{
			$rootScope.scorePsy3 = 0;
			$rootScope.forceps = forceps;
			if ( $rootScope.forceps == 1 )
				$rootScope.scorePsy3 += 1;
		
			$rootScope.ventouse = ventouse;
			if ( $rootScope.ventouse == 1 )
				$rootScope.scorePsy3 += 2;
			
			$rootScope.urgenceCesa = urgenceCesa;
			if ( $rootScope.urgenceCesa == 1 )
				$rootScope.scorePsy3 += 2;
		
			$rootScope.generalAnest = generalAnest;
			if ( $rootScope.generalAnest == 1 )
				$rootScope.scorePsy3 += 1;
		
			$rootScope.hemorragie = hemorragie;
			if ( $rootScope.hemorragie == 1 )
				$rootScope.scorePsy3 += 2;
		
			$rootScope.babySeparation = babySeparation;
			if ( $rootScope.babySeparation == 1 )
				$rootScope.scorePsy3 += 5;
	
			$rootScope.dieDelevery = dieDelevery;
			if ( $rootScope.dieDelevery == 1 )
				$rootScope.scorePsy3 += 5;
	
			$rootScope.dieBaby = dieBaby;
			if ( $rootScope.dieBaby == 1 )
				$rootScope.scorePsy3 += 5;
	
			$rootScope.traumaDelevery = traumaDelevery;
			if ( $rootScope.traumaDelevery == 1 )
				$rootScope.scorePsy3 += 5;

		$state.go('step11');
		}
	})

.controller('Psycho4Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};

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

		$scope.Submit = function( FCPsy,
									IVGPsy, 
									GEUPsy, 
									DieIV, 
									IMGPsy, 
									ISGPsy, 
									ChildHand, 
									ChildPrema, 
									ChildChronique, 
									DieBabyPsy, 
									PregnantTraumaPsy, 
									TraumaExperiencePsy )
		{
			$rootScope.FCPsy = FCPsy;
			if ( $rootScope.FCPsy == 1 )
				$rootScope.scorePsy4 += 1;

			$rootScope.IVGPsy = IVGPsy;
			if ( $rootScope.IVGPsy == 1 )
				$rootScope.scorePsy4 += 1;

			$rootScope.GEUPsy = GEUPsy;
			if ( $rootScope.GEUPsy == 1 )
				$rootScope.scorePsy4 += 1;

			$rootScope.DieIV = DieIV;
			if ( $rootScope.DieIV == 1 )
				$rootScope.scorePsy4 += 2;

			$rootScope.IMGPsy = IMGPsy;
			if ( $rootScope.IMGPsy == 1 )
				$rootScope.scorePsy4 += 2;
	
			$rootScope.ISGPsy = ISGPsy;
			if ( $rootScope.ISGPsy == 1 )
				$rootScope.scorePsy4 += 3;
		
			$rootScope.ChildHand = ChildHand;
			if ( $rootScope.ChildHand == 1 )
				$rootScope.scorePsy4 += 3;
		
			$rootScope.ChildPrema = ChildPrema;
			if ( $rootScope.ChildPrema == 1 )
				$rootScope.scorePsy4 += 1;
		
			$rootScope.ChildChronique = ChildChronique;
			if ( $rootScope.ChildChronique == 1 )
				$rootScope.scorePsy4 += 3;
		
			$rootScope.DieBabyPsy = DieBabyPsy;
			if ( $rootScope.DieBabyPsy == 1 )
				$rootScope.scorePsy4 += 3;
			
			$rootScope.PregnantTraumaPsy = PregnantTraumaPsy;
			if ( $rootScope.PregnantTraumaPsy == 1 )
				$rootScope.scorePsy4 += 10;
			
			$rootScope.TraumaExperiencePsy = TraumaExperiencePsy;
			if ( $rootScope.TraumaExperiencePsy == 1 )
				$rootScope.scorePsy4 += 10;
			
			if ( $rootScope.FCPsy == 1 )
				$state.go('step14');
			else
				$state.go('step16'); 
		}
	})

.controller('Step2Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.yesc = false;
		$scope.noc = false;
		$scope.IDNc = false;
		$scope.checked = function( yes, no, IDN )
		{
			if ( yes == false && $scope.yesc == true 
				|| no == false && $scope.noc == true 
				|| IDN == false && $scope.IDNc == true )
			{
				yes = false;
				no = false;
				IDN = false;
				$scope.yesc = false;
				$scope.noc = false; 
				$scope.IDNc = false;
				document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
				document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
				document.getElementById("IDNCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && $scope.yesc == false )
			{
				yes = true;
				no = false;
				IDN = false;
				$scope.yesc = true;
				$scope.noc = false; 
				$scope.IDNc = false;
				document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
				document.getElementById("IDNCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && $scope.noc == false )
			{
				no = true;
				yes=false;
				IDN = false;
				$scope.yesc = false;
				$scope.noc = true;
				$scope.IDNc = false;
				document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("IDNCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( IDN == true && $scope.IDNc == false )
			{
				no = false;
				yes = false;
				IDN = true;
				$scope.noc = false;
				$scope.yesc = false;
				$scope.IDNc = true; 
				document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("IDNCheck").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
			else
			{
				yes = false;
				no = false;
				IDN = false;
				$scope.yesc = false;
				$scope.noc = false; 
				$scope.IDNc = false;
				document.getElementById("yesCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
				document.getElementById("noCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
				document.getElementById("IDNCheck").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
		}
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc == true )
			{
				$rootScope.Pregnant = 1;
				$state.go('dateMenstruation');
			}
			else if ( $scope.IDNc == 1 )
			{
				$rootScope.Pregnant = 2;
				$state.go('dateMenstruation');
			}
			else
			{
				$rootScope.Pregnant = 0;
				$state.go('step3');
			}
		}
	})

.controller('Step2-1Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		yes = false;
		no = false;
		$scope.yesc = false;
		$scope.noc = false;
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false;
				document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true )
				$rootScope.PregnantGood = 1;
			else
				$rootScope.PregnantGood = 0;
			if ( $scope.yesc == true )
				$state.go('psycho2');
			if ( $scope.noc == true )
				$state.go('stopIVG');
		}
	})

.controller('Step3Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck2").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck2").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck2").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck2").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck2").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck2").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		$scope.Submit = function( yes, no )
		{
			if ( yes==true )
			{
				$rootScope.Smoke = 1;
				$rootScope.score += 2;
			}
			else
				$rootScope.Smoke = 0;
			if ( yes == true || no == true )
				$state.go('step4');
		}
	})


.controller('Step4Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck3").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck3").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck3").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck3").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if (no == true && !yes || $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck3").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck3").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc == true )
			{
				$rootScope.Child = 1;
				$state.go('step5');
			}
			else 
			{
				$rootScope.Child = 0;
				if ( yes == true || no == true )
					$state.go('psycho4');
			}
		}
	})



.controller('Step6Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck4").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck4").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck4").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck4").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck4").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck4").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}

		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true )
			{
				$rootScope.BigChild = 1;
				$rootScope.score += 50;
			}
			else 
				$rootScope.BigChild = 0;
			
			if ( $scope.yesc == true 
					|| $scope.noc == true ) 
			{
				if ( $rootScope.HChild == 1 && $rootScope.BigChild == 1 )
					$state.go('step9');
				else
					$state.go('step8');
			}
		}
	})

.controller('Step8Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck5").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck5").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck5").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck5").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck5").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck5").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true )
			{
				$rootScope.LessChild = 1;
				$rootScope.score += 50;
				$state.go('step9');
			}
			else 
			{
				$rootScope.LessChild = 0;
				if ( $scope.yesc == true 
						|| $scope.noc == true )
					$state.go('step10');
			}
		}
	})

.controller('Step9Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck6").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck6").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck6").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck6").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
					no = true;
					yes=false;
					$scope.yesc = false;
					$scope.noc = true;
					document.getElementById("yesCheck6").setAttribute('style','border : 2px solid rgb(218,218,218)');
					document.getElementById("noCheck6").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}	
		}
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true ) 
			{
				$rootScope.Prema = 1;
				$rootScope.score += 50;
			}
			else
				$rootScope.Prema = 0; 
			if ( $scope.yesc == true 
					|| $scope.noc == true )
				$state.go('step10');
		}
	})

.controller('Step10Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck7").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck7").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck7").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck7").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck7").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck7").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true ) 
			{
				$rootScope.PreEclamp = 1;
				$rootScope.score += 50;
			}
			else
				$rootScope.PreEclamp = 0;
			
			if ( $scope.yesc == true 
					|| $scope.noc == true )
				if ( $rootScope.Child == 1 )
					$state.go('psycho3');
		}
	})


.controller('Step11Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck8").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck8").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 	
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck8").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck8").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck8").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck8").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}

		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true ) 
			{
				$rootScope.PregnantDiabete = 1;
				$rootScope.score += 2;
			}
			else
				$rootScope.PregnantDiabete = 0;
			
			$state.go('step12');
		}
	})


.controller('Step12Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.checked = function(yes, no)
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false;
				document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck1").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck1").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		
		$scope.nb = function( NbCesa ) 
		{
			$rootScope.NbCesa = NbCesa;
			if ( $rootScope.NbCesa > 0 )
			{
				$rootScope.score += 2;
				$state.go('psycho4');
			}

			$state.go('psycho4');  
		}
	})


.controller('Step15Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
	
		$scope.checked = function(yes, no)
		{
			if (yes == false && $scope.yesc == true
				 	|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck10").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck10").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if (yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;	
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck10").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck10").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if (no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck10").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck10").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
	
		$scope.Submit = function(yes, no)
		{
			if ( $scope.yesc ==true ) 
			{
				$rootScope.IMG = 1;
				$rootScope.score += 2;
			}
			else
				$rootScope.IMG = 0;
			$state.go('step16');
		}
	})


.controller('Step17Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
	
		$scope.checked = function(yes, no)
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck11").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck11").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck11").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck11").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck11").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck11").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}	
		}
		$scope.Submit = function(yes, no)
		{
			if ( $scope.yesc ==true ) 
			{
				$rootScope.score += 200;
				$rootScope.Epilepsy = 1;
			}
			else
				$rootScope.Epilepsy = 0;
			$state.go('step18');
		}
	})


.controller('Step18Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};

		$scope.checked = function(yes, no)
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck12").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck12").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck12").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck12").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck12").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck12").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
	
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true ) 
			{
				$rootScope.Phlebitis = 1;
				$rootScope.score += 2;
			}
			else
				$rootScope.Phlebitis = 0;
			$state.go('step19');
		}
	})

.controller('Step19Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
	
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck13").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck13").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck13").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck13").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck13").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck13").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}

		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true )
			{
				$rootScope.HighBloodPresure = 1;
				$rootScope.score += 2;
			}
			else
				$rootScope.HighBloodPresure = 0;
			$state.go('step20');
		}
	})



.controller('Step20Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};

		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck14").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck14").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}	
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck14").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck14").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck14").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck14").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
	
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc ==true ) 
			{
				$rootScope.diabetesH = 1;
				$rootScope.score += 50;
			}
			else
				$rootScope.diabetesH = 0;
			$state.go('step21');
		}
	})

.controller('Step21Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
	
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck15").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck15").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck15").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck15").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes = false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck15").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck15").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc == true )
			{
				$rootScope.Medicament = 1;
				$state.go('step22');
			}
			else 
			{
				$rootScope.Medicament = 0;
				$state.go('step23');
			}
		}
	})



.controller('Step25Ctrl', function( $scope, $state,  $http, $rootScope ) 
	{
		$scope.data = {};
	
		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck16").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck16").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck16").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck16").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck16").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck16").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}
		}
		
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc == true )
			{
				$rootScope.Work= 1;
				$state.go('step26');
			}
			else 
			{
				$rootScope.Work= 0;
				$state.go('psycho1');
			}
		}
	})


.controller('Step28Ctrl', function( $scope, $state, $http, $rootScope )
	{
		$scope.data = {};

		$scope.checked = function( yes, no )
		{
			if ( yes == false && $scope.yesc == true 
					|| no == false && $scope.noc == true )
			{
				yes = false;
				no = false;
				$scope.yesc = false;
				$scope.noc = false;
				document.getElementById("yesCheck17").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck17").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( yes == true && !no 
						|| $scope.noc == true && yes == true )
			{
				yes = true;
				no = false;
				$scope.yesc = true;
				$scope.noc = false; 
				document.getElementById("yesCheck17").setAttribute('style','border : 2px solid rgb(106,144,149)');
				document.getElementById("noCheck17").setAttribute('style','border : 2px solid rgb(218, 218, 218)');
			}
			else if ( no == true && !yes 
						|| $scope.yesc == true && no == true )
			{
				no = true;
				yes=false;
				$scope.yesc = false;
				$scope.noc = true;
				document.getElementById("yesCheck17").setAttribute('style','border : 2px solid rgb(218,218,218)');
				document.getElementById("noCheck17").setAttribute('style','border : 2px solid rgb(106,144,149)');
			}	
		}
		
		$scope.Submit = function( yes, no )
		{
			if ( $scope.yesc == true ) 
			{
				$rootScope.StandingWork = 1;
				$rootScope.score += 2;
			}
			else
				$rootScope.StandingWork = 0;
			$state.go('psycho1');
		}
	})

.controller('Step00Ctrl', function( $scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		if ( $rootScope.PregnantGood == 1 ) 
			$scope.Positif = "Félicitation vous êtes enceinte !";
		else if ( $rootScope.Child == 0 )
			$scope.Positif = "Félicitation vous allez avoir votre premier enfant"; 
		else if ( $rootScope.Age < 38)
			$scope.Positif = "Vous avez le bon l'âge optimal pour faire un enfant";
		document.getElementById("Positif").setAttribute('style','color : green');
		if ( $rootScope.score >= 200 ) 
		{
			document.getElementById("cresultProfil").setAttribute('style','color : red');
			$scope.cresultProfil = "D'après vos réponse vous présentez une grossesse à haut et devez être suivi dans une maternité de type 3.";
		}   
		else if ( $rootScope.score >= 50 ) 
		{
			document.getElementById("cresultProfil").setAttribute('style','color : red');
			$rootScope.cresultProfil = "D'apres vos réponse vous présentez une grossesse à haut risque mais qui ne necessite pas un suivi dans une maternité de type 3";
		}
		else if ( $rootScope.score >= 20 ) 
		{
			document.getElementById("cresultProfil").setAttribute('style','color : orange');
			$rootScope.cresultProfil = "D'apres vos réponses vous présentez une grossesse à risque ";
		}
		else 
		{
			document.getElementById("cresultProfil").setAttribute('style','color : green');
			$rootScope.cresultProfil = "D'apres vos réponses vous ne présentez pas de risque particulier pour votre grossesse";
		}

		if ( $rootScope.Age < 35 ) 
		{
			$scope.profil1 = $rootScope.RAgeA;
			$scope.positif1 = " - Vous avez l'âge optimal pour faire un enfant";
		}
		else if ( $rootScope.Age < 38 ) 
		{
			$scope.profil1 = $rootScope.RAgeB;
			$scope.positif1 = " - Vous avez l'âge optimal pour faire un enfant";
		}
		else if ( $rootScope.Age < 42 )
		{
			$scope.risk1 = " - A votre Age, vous présentez un risque élevé d'anomalie chromosomique foetale";
			$scope.positif1 = " - Être plus âgée pour élever ses enfants est ausi un gage de maturité ! ";
		}
		else if ( $rootScope.Age >= 42 )
		{
			$scope.risk1 = " - A votre Age, vous présentez un risque très élevé d'anomalie chromosomique foetale";
			$scope.positif1 = " - Être plus âgée pour élever ses enfants est ausi un gage de maturité ! ";
		}

		if ( $rootScope.Pregnant == 1 && $rootScope.Smoke == 1 ) 
		{
			$scope.risk2 = " - Vous fumez, ce qui peut entrainer de nombreuses complications.";
			$scope.conseil2 = " - Arrêtez de fumer !";
		}
		else if ( $rootScope.Smoke == 1 ) 
		{
			$scope.risk2 = "- Vous fumez, ce qui va entrainer de nombreuses complications lors d'une future grossesse.";
			$scope.conseil2 = "- Arrêtez de fumer avant d'entammer une grossesse ! ";
		} 

		if ( $rootScope.BigChild == 1 )
			$rootScope.risk3 = "- Vous avez eus un enfant de  + de 4kg, ce qui peut favoriser l'apparition du vous place dans un groupe à risque de développer un diabète de grossesse";
		if ( $rootScope.BigChild == 1 
				&& $rootScope.diabetesH == 0 )
			$rootScope.conseil3 = "- Effectuez un dépistage de diabète de grossesse";

		if ( $rootScope.Prema == 0 && $rootScope.LessChild == 1 )
			$rootScope.risk4 =  "Vous avez eu un enfant de - de 2kg200 qui n'était pas prématuré, il s'agit donc d'un antécédent de retard de croissance intra-utérin qui vous expose à un risque de récidive d'environ 10 % ";

		if ( $rootScope.NbMiacarriage >= 3 )
			$rootScope.risk5 = "- Vous avez eu un nombre élevé de fausse couches";
		if ( $rootScope.NbMiacarriage >= 3 )
			$rootScope.conseil5 = " - Effectuez un bilan de fausse couche à répétition et bénéficiez d'une prise en charge adaptée en fonction des résultats de ce bilan.";

		if ( $rootScope.IMG == 1 ) 
		{
			$rootScope.risk6 = " - Vous avez déjà effectué une IMG et vous pourriez avoir un risque de récidive";
			$rootScope.conseil6 = " - Prenez rendez-vous pour une consultation spécialisée afin d'évaluer le risque de récidive de malformation foetale.";
			$scope.profil6 = " - La plus grande partie des anomalies foetales sont des accidents et leur récidive est rare";
		}

		if ( $rootScope.Alcool < 10 
				&& $rootScope.Alcool > 0 )
			$scope.risk7 = " - Vous consommez de l'alcool";
		else if ( $rootScope.Alcool >= 10 ) 
		{
			$scope.risk7 = " - Vous consommez une quantité d'alcool importante";
			$scope.conseil7 = " - Prenez rendez-vous dans un centre spécialisée pour vous aider à arrêter l'alcool ";
		}
		if ( $rootScope.Alcool < 10 
				&& $rootScope.Alcool > 0 
				&& $rootScope.Pregnant == 1 )
			$scope.conseil7 = " - Stoppez votre consommation d'alcool !";
		else if ($rootScope.Alcool < 10 
					&& $rootScope.Alcool > 0 
					&& $rootScope.Pregnant == 0 )
			$scope.conseil7 = " - Il sera nécessaire de stopper votre consommation d'alcool lorsque vous serez enceinte!";

		if ( $rootScope.Epilepsy == 1 )
			$scope.risk8 = " - Votre épilepsie.";
		
		if ( $rootScope.AntiepilepsyAnswer == 1 )
			$scope.conseil8 = " - Vous devez être prise en charge par une équipe spécialisée pour le choix des antiépileptiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

		if ( $rootScope.Phlebitis == 1 )
			$scope.risk9 = " - Votre antécédent de phlébite";
		
		if ( $rootScope.AntiCoagulentAnswer == 1 )
			$scope.conseil9 = " - Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

		if ( $rootScope.HighBloodPresure == 1 )
			$scope.risk10 = " -Votre hypertension";
		
		if ( $rootScope.AntiHighBloodAnswer == 1 )
			$scope.conseil10 = " - Vous devez être prise en charge par une équipe spécialisée pour le choix des antihypertenseurs et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée.";

		if ( $rootScope.diabetesH == 1 )
			$scope.risk11 = "- Votre diabète";
		if ( $rootScope.InsulineAnswer == 1 )
			$scope.conseil11 = " -Vous devez être prise en charge par une équipe spécialisée pour le choix des antidiabetiques et leur dosage ainsi que pour la mise en place d'une surveillance foetale adaptée. ";

		if ( $rootScope.IMC < 18.5) 
		{
			$scope.risk12 = "- Votre MAIGREUR ";
			$scope.conseil12 = "- Alimentez-vous correctement ";
		}
		else if ( $rootScope.IMC > 35 
					&& $rootScope.IMC < 40 )
			$scope.risk12 = " - Votre obésité ";
		else if ( $rootScope.IMC > 40 ) 
		{
			$scope.risk12 = " - Votre obésité massive ";
			$scope.conseil12 = " - Vous devez être prise en charge dans un centre spécialisé. ";
		}

		if ( $rootScope.Work == 1 )
		{
			if ( $rootScope.NbWork > 10 
					&& $rootScope.NbWork <= 12 ) 
			{
				$scope.risk13 = " - Votre nombre d'heure de travail est élevé.";
				$scope.conseil13 = " - Essayer d'aménager vos heures de travail";
			}
			else if ( $rootScope.NbWork > 12 ) 
			{
				$scope.risk13 = " - Votre nombre d'heure de travail est vraiment très élevé";
				$scope.conseil13 = " - Essayer d'aménager vos heures de travail";
			}
			if ( $rootScope.TimeTravel > 90 ) 
			{
				$scope.risk14 = " - Votre temps de trajet pour aller au travail est élevé";
				$scope.conseil14 = " - Essayer d'aménager vos heures de présence au travail pour diminuer les temps de trajets.";
			}
			if ( $rootScope.StandingWork == 1 ) 
			{
				$scope.risk15 = " - Vous travaillez debout plus de 6 heures par jour";
				$scope.conseil15 = " - Nous vous conseillons de discuter dès à présent avec votre employeur de la possibilité d'aménager vos conditions de travail. Vous risquez d'être en difficulté pendant votre grossesse si vous restez debout plus de 6 heures par jour.";
			}
		}
		else
			$scope.profil16 = " - Vous ne travaillez pas, vous pouvez donc prendre le temps de vous occuper de vous et préparer la venue de votre enfant ";

		if ( $rootScope.scorePsy1 >= 2 ) 
		{
			if ( $rootScope.AngoisseCriseAnswer == 1 ) 
				$rootScope.profilPsy1A = "- Vos crise d'angoisses";

			if ( $rootScope.BoulimieAnswer == 1 )
				$rootScope.profilPsy1B = "- Votre boulimie";

			if ( $rootScope.TocAnswer == 1 )  
				$rootScope.profilPsy1C = "- Votre anorexie";

			if ( $rootScope.DepressionAnswer == 1 ) 
				$rootScope.profilPsy1D += "- Vos TOC";

			if ( $rootScope.AnorexieAnswer == 1 ) 
				$rootScope.profilPsy1E = "- Votre dépression";

			if ( $rootScope.PhobieAnswer == 1 ) 
				$rootScope.profilPsy1F = "- Vos phobies";

			if ( $rootScope.BipolaireAnswer == 1 ) 
				$rootScope.profilPsy1G = "- Vos troubles bipolaires";

			if ( $rootScope.HpAnswerAnswer == 1 ) 
				$rootScope.profilPsy1H = "- Votre séjour en hopital psychiatrique";
		} 

		if ( $rootScope.scorePsy1 >= 2 
				|| $rootScope.scorePsy2 > 2 
				|| $rootScope.scorePsy3 >= 5 )
		{
			$scope.profilPsyFacteur = "Vos facteurs agravant sont :"
			$scope.profilPsyResult = "- Risque de dépression du post partum.";
			
			if ( $rootScope.scorePsy2 > 2 )
				$scope.profilPsyFacteur1 = "- Votre parcours d'infertilité";
			
			if ( $rootScope.scorePsy3 >= 5 )
				$scope.profilPsyFacteur2 = "- Vos antécédents obstétricaux";
			$scope.conseilPsy = "- Vous devriez consulter un professionel";

		}

	})

.controller('stopIVGCtrl', function( $scope, $state,$http,$rootScope )
	{
		$scope.data = {};
		$scope.nbReste = 14 - $rootScope.WeekPregnant;
		$scope.submit = function()
		{
			$state.go('step3');
		}
	})

.controller('dateMenstruationCtrl', function( $scope, $state,$http,$rootScope )
	{

		$scope.submit = function( menstruation ) 
		{
			// Date des dernieres regles //
			$rootScope.LastMenstruation = new Date( menstruation );
			$rootScope.WeekPregnant = Math.round((( new Date().getTime() - $rootScope.LastMenstruation.getTime() ) / (1000 * 60 * 60 * 24 ) ) / 7);
			if ( $rootScope.Pregnant == 1 )
				$state.go('step2-1');
			else
				$state.go('step3');
		}
	})

.controller('HomeCtrl', function($scope, $state, $http, $rootScope ) 
	{
		$scope.data = {};
		$scope.launch = function()
		{
			$state.go('step1');
		}
	});
