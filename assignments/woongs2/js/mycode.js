var width = 1920, height = 1280

//create a canvas to put the force directed graph
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

var color = d3.scaleOrdinal(d3.schemeCategory10)

var numNodes = 800
var nodes = d3.range(numNodes).map(function(d) {
  return {radius: Math.random() * 100}
})

//set up the simulation
var simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(10))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(function(d) {
    return d.radius
  }))
  .on('tick', ticked);

  var node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes_data)
    .enter().append("circle")
    .attr("r", 10)
    .attr("fill", function(d) { return color(d.group); })

  //draw lines for the links 
  var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links_data)
    .enter().append("line") //링크의 개수만큼 선을 추가
    .style("stroke-width", function(d) { return Math.sqrt(d.value) });

function ticked() {
  var u = d3.select('svg')
    .selectAll('circle')
    .data(nodes)

  u.enter()
    .append('circle')
    .attr('r', function(d) {
      return d.radius
    })
		.style("fill", function(d, i) { return color(i) })
    .merge(u)
    //update circle position to reflect node updates on each tick of the simulation
    .attr('cx', function(d) {
      return d.x
    })
    .attr('cy', function(d) {
      return d.y
    })

  u.exit().remove()
}