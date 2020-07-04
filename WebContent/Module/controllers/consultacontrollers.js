projeto
		.controller(
				'ConsultaController',
				function($scope, $http) {

					$scope.modelConsulta = {
						mes : null,
						ano : null
					};

					$scope.consultarTaxa = function() {
						$scope.mensagem = null;
						$scope.listagem = null;
						if ($scope.modelConsulta.mes == null
								&& $scope.modelConsulta.ano == null) {
							$scope.mensagem = "Por favor Preenchar o ano (campo obrigatorio)";
							return;
						} else if ($scope.modelConsulta.mes != null) {
							var url = "http://localhost:8089/prjAnbima/webservice/taxa-selic-service/exbirTaxaSelic/"
									+ $scope.modelConsulta.ano
									+ "/"
									+ $scope.modelConsulta.mes;
						} else {
							var url = "http://localhost:8089/prjAnbima/webservice/taxa-selic-service/exbirTaxaSelic/"
									+ $scope.modelConsulta.ano;
						}

						$http.get(url).success(function(dados) {
							$scope.listagem = dados;
							$scope.modelConsulta.mes = null;
							$scope.modelConsulta.ano = null;
						}).error(function(e) {
							$scope.mensagem = e;
						});

					}
				}

		);