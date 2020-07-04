//rota do Servidor (WS)
//nome da Função
projeto.controller(
	 'ConsultaAnualController',
	  function ($scope,$http){
		 //quando ele chamar o formulario de cadastro vem vazio
		 //estou passando as váriaveis para o webService ou resgatar
		 
		 $scope.consultarMediaAnual= function() {
		 var url="http://localhost:8089/prjAnbima/webservice/taxa-selic-service/media-taxa-anual/"; 
		
		 $http.get(url)
		.success(
            function(msg){
            	//mensagem deve estar em cadastro(gravado com sucesso ou erro)
            	$scope.listagem =msg; 
            }				
		)
		.error(
	            function(e){
	            	//capturo o Erro
	            	$scope.mensagem =e; 
	            }				
			);
		 }
		 
		 $scope.consultarAnual= function() {
			 var url="http://localhost:8089/prjAnbima/webservice/taxa-selic-service/taxa-anual/"; 
			
			 $http.get(url)
			.success(
	            function(msg){
	            	//mensagem deve estar em cadastro(gravado com sucesso ou erro)
	            	$scope.listagemAnual =msg; 
	            }				
			)
			.error(
		            function(e){
		            	//capturo o Erro
		            	$scope.mensagemErrorConsultaAnual =e; 
		            }				
				);
			 }
	 }
);