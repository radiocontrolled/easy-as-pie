
(function(){
	var app = angular.module('EasyAsPie', [])
	
	.controller('Controller', function(){
		this.someData = someData;
	})	

	.directive('pieChart', function(){
		
		var dataset = [25,10,40,12.5, 12.5];
		var color = d3.scale.category20c(); 
		var outerRadius = 500 / 2;		
		var svg = d3.select("section")
			.append("svg")
			.attr({
				"width":500,
				"height":500
			});
		
		//draw wedges
		var arc = d3.svg.arc()
			.innerRadius(100) 
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
				})
			
		//Labels
		arcs.append("text")
			.attr("transform", function(d) {
				return "translate(" + arc.centroid(d) + ")";
			})
			.text(function(d) {
				return d.value;
			});
			

			
		return{
			restrict: 'E'
		}
	});

	/* to replace with user input */
	var someData = [
		{
			label: ["cats","dogs","elephants","anteaters","dolphins"],
			value: [1,2,3,4,5]
		}
	];		
})();

/* ad longdesc text */ 




