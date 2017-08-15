View :

	- home
	- stopIVG
	- step00
	- GynécoTest :	- step1 
					- step2 
					- step2-1
					- step3
					- step4
					- step5
					- step6
					- step8
					- step9
					- step10
					- step11
					- step12
					- step14
					- step16
					- step17
					- step19
					- step20
					- step21
					- step22
					- step23
					- step24
					- step25
					- step26
					- step27
					- step28
					- dateMenstruation

	- PsychoTest :	- psycho1
					- psycho2
					- psycho3
					- psycho4


Controller :

	- HomeCtrl
	- Step1 
	- Step2 
	- Step2-1
	- Step3
	- Step4
	- Step5
	- Step6
	- Step8
	- Step9
	- Step10
	- Step11
	- Step12
	- Step14
	- Step16
	- Step17
	- Step19
	- Step20
	- Step21
	- Step22
	- Step23
	- Step24
	- Step25
	- Step26
	- Step27
	- Step28
	- dateMenstruation
	- Psycho1Ctrl
	- Psycho2Ctrl
	- Psycho3Ctrl
	- Psycho4Ctrl
	- PsychoResultCtrl
	- Step00Ctrl
	- StopIVGCtrl

Value : ( $rootScope.[valueName] ) 
	
	# Define in Step*
		- score

	# Define in Step1Ctrl:
		- Age

	# Define in Step2Ctrl:
		- Pregnant

	# Define in Step2-1Ctrl:
		- PregnantGood
	
	# Define in Step3Ctrl :
		- Smoke
	
	# Define in Step4Ctrl :
		- Child	
	
 	# Define in Step5Ctrl :
		- HChild

	# Define in Step6Ctrl :
		- BigChild

 	# Define in Step8Ctrl :
		- LessChild

	# Define in Step9Ctrl :
		- Prema

	# Define in Step10Ctrl :
		- preEclamp

	# Define in Step11Ctrl :
		- PregnantDiabete

	# Define in Step12Ctrl :
		- NbCesa

	# Define in Step14Ctrl :
		- miscarriage

	# Define in Step16Ctrl :
		- Alcool

	# Define in Step17Ctrl :
		- Epilepsy

	# Define in Step19Ctrl :
		- HighBloodPresure

	# Define in Step20Ctrl :
		- diabetesH

	# Define in Step21Ctrl :
		- Medicament

	# Define in Step22Ctrl :
		- AntiEpilepsyAnswer
		- AntiiCoagulentAnswer
		- AntiHighBloodAnswer
		- AntiDepressantAnswer
		- InsulineAnswer

	# Define in Step23Ctrl:
		- Size

	# Define in Step24Ctrl :
		- Weight
		- IMC

	# Define in Step25Ctrl :
		- Work

	# Define in Step26Ctrl :
		- NbWork

	# Define in Step27Ctrl :
		- TimeTravel

	# Define in Step28Ctrl :
		- StandingWork

	# Define in dateMenstruationCtrl :
		- LastMenstruation
		- WeekPregnant


	# Define in Psycho1Ctrl :
		- AngoisseCriseAnswer
		- BoulimieAnswer
		- AnorexieAnswer
		- TocAnswer
		- DepressionAnswer
		- PhobieAnswer
		- BipolaireAnswer
		- HPAnswer
		- ScorePsy1

	# Define in Psycho2Ctrl :
		- procreation
		- yearsProcreation
		- NbProcreation
		- OocyteDonation
		- spermDonation
		- scorePsy2


	# Define in Psycho3Ctrl :
		- forceps
		- ventouse
		- urgenceCesa
		- generalAnest
		- hemorragie
		- babySeparation
		- dieDelivery
		- dieBaby
		- traumaDelivery
		- scorePsy3


	# Define in Psycho4Ctrl :
		- FC
		- IVG
		- GEU
		- DieInUtero
		- IMG
		- ISG
		- ChildHandicap
		- ChildPrema
		- ChildChroniqueSeek
		- DieBabyP
		- PregnantTraumaPsy
		- TraumaExperiencePsy
		- scorePsy4


Question Type :
	Yes or No :
		- Step3
		- Step4
		- Step6		
		- Step8
		- Step9
		- Step10
		- Step11		
		- Step12
		- Step14
		- Step17
		- Step19		
		- Step20
		- Step21
		- Step25
		- Step28		

	Yes, No, I Don't No
		- Step2
		- Step2-1
		
	Enter a number
		- Step1
		- Step5
		- Step12		
		- Step14
		- Step23
		- Step24
		- Step26		
		- Step27

	Multiple Selection
		- Step22
		- Psycho1
		- Psycho2	
		- Psycho3
		- Psycho4

	Date :
		- dateMenstruation

