projeto.controller(
	 'HistoricoController',
	  function ($scope,$http){
		 $scope.historico= function() {
		 var url="http://localhost:8089/prjAnbima/webservice/taxa-selic-service/historico";	 
     
	      $http.get(url)
	      .success(
	            function(dados){
	    	      $scope.listagem =dados; 
	           } 				
	        )
	       .error(
	        function(e){
	        	$scope.mensagem =e; 
	         }				
		    );
	      
      }
	}	 
);