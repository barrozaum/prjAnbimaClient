//juncao do html
//juncao do Servlet do javascript
var projeto = angular.module('projeto',['ngRoute']);
projeto.config(
		 function($routeProvider){
			 $routeProvider
			 .when(
			   '/consultaanual',
			   {
				   templateUrl : "Module/consultaanual.html",
				   controller  : "ConsultaAnualController"
			   }
			 )
			 .when(
			   '/historico',
			   {
				   templateUrl : "Module/historico.html",
				   controller  : "HistoricoController"
			   }
			 )
			 .when(
			   '/consulta',
					   {
						   templateUrl : "Module/consulta.html",
						   controller  : "ConsultaController"
					   }
		     );
			 
		 }
);