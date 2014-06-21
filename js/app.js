
(function(){
	var app = angular.module('foobar', []);
	app.controller('PopulationDisplayer', function(){
		this.population = populationData;
	});	

	var populationData = [
		{
			countryName: "Canada",
			population: 34342780
		},
		{
			countryName: "United States of America",
			population: 318246000
		}
	]
})();
