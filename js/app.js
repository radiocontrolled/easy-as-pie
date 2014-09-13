
(function(){
	var app = angular.module('EasyAsPie', [])
	
	.controller('Controller', function(){
		this.someData = someData;
	})	

	.directive('pieChart', function(){
	
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
			
		return{
			restrict: 'E'
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

/* ad longdesc text */ 




