/*
* development data 
* 1. https://docs.google.com/spreadsheets/d/1J8RfmzBB6yID1W2shnsqkSAQCiOH_z6B6_l9e5tgaKc/pubhtml 
* 2. https://docs.google.com/spreadsheets/d/1fAt25b1_K4g4NWwnrT6D--ylyRHFg045YVyi6_Zea9A/pubhtml
*/
	
(function(){
	
	function testCallBack(){
		alert("hi");
	}
	
	var drawPie = angular.module('EasyAsPie', []);
	
	drawPie.controller('GoogleAppsKey', ['$scope', function($scope) {
	}]);

	drawPie.directive('pieChart', function(){
	
		function link(scope, element, attr){	
	
			console.log(scope.data);
			
			var w = window.innerWidth/2;
			var h = window.innerHeight/2;
			
			var dataset = someData[0].value;
			var color = d3.scale.category20c(); 
			var outerRadius = w / 5;		
			var svg = d3.select("section")
				.append("svg")
				.attr({
					"width":w,
					"height":h
				});
			
			//draw wedges
			var arc = d3.svg.arc()
				.innerRadius(50) 
				.outerRadius(outerRadius);
		
			// define default pie layout
			var pie = d3.layout.pie();
	
			var arcs = svg.selectAll("g.arc") 
				.data(pie(dataset)) 
				.enter()
				.append("g")
				.attr("transform", "translate(" + outerRadius + "," + outerRadius + ")"); 
				
			//Draw arc paths
			arcs.append("path")
				.attr("d", arc)
				.attr("fill", function(d) {
			  		return color(Math.floor(d.value)); 
				});
				
			//Labels
			arcs.append("text")
				.attr("transform", function(d) {
					return "translate(" + arc.centroid(d) + ")";
				})
				.text(function(d) {
					return d.value;
				});
		
			/*
			scope.$watch('data', function(data){
				console.log(scope.text);
			}, true);
			*/
			
		
		}
	
		return {
			link: link,
			restrict: 'A',
		    controller: function($scope,$element){
		    	 $scope.text = "1J8RfmzBB6yID1W2shnsqkSAQCiOH_z6B6_l9e5tgaKc";
		    	 $scope.data = [];
	     		 $scope.submitKey = function(value) {
	        		if ($scope.text) {
	        			var foobar = [];
	         			Tabletop.init( 
							{ 
								key: this.text,
								callback: function(userData, tabletop) { 
									for (var obj in userData){
										if(userData.hasOwnProperty(obj)){
											for (var key in userData[obj]){
												if(key == "value"){
													foobar.push(parseFloat(userData[obj][key]));
												}
											}
											}					
									}
									$scope.data = foobar;
									console.log($scope.data);
								
								},
							simpleSheet: true }
						);
	        		}
	      		}; 
		    }
        };

	
	});

	
	/* to replace with user input */
	var someData = [
		{
			label: ["cats","dogs","elephants","anteaters","dolphins"],
			value: [1,2,3,4,5]
		}
	];

			
})();



