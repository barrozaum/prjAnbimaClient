<!doctype html>
<html ng-app="projeto">
<head>

<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="https://code.angularjs.org/1.5.8/angular-route.js"></script>  <script src="Modulo/app.js"></script>

<script src="Module/app.js"></script>
<script src="Module/controllers/consultaanualcontrollers.js"></script>
<script src="Module/controllers/consultacontrollers.js"></script>
<script src="Module/controllers/historicocontrollers.js"></script>
</head>
<body>


<!-- navbar -->
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Anbima</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="index.jsp">Home</a></li>
      <li><a href="#consulta">Consulta</a></li> 
      <li><a href="#consultaanual">Consulta Anual</a></li>
      <li><a href="#historico">Histórico</a></li> 
       
    </ul>
  </div>
</nav>


<div class="container">
	 <div ng-view></div>
</div>

 
 
 

</body>
</html>

