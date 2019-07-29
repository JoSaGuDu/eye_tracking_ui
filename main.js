var svg = d3.select("body").append("svg");
const initialRadius = 5;
// svg
//   .append("circle")
//   .attr("fill", "blue")
//   .attr("r", 10)
//   .attr("cx", "100")
//   .attr("cy", "100");

// svg
//   .append("circle")
//   .attr("fill", "cyan")
//   .attr("r", 6)
//   .attr("cx", "120")
//   .attr("cy", "140");

// svg
//   .append("circle")
//   .attr("fill", "red")
//   .attr("r", 16)
//   .attr("cx", "160")
//   .attr("cy", "140");

drawCircle(10, 100, 100, "magenta", svg);
drawCircle(6, 120, 140, "cyan", svg);
drawCircle(16, 160, 140, "yellow", svg);

function drawCircle(radiusMultiplier, cx, cy, fill, context) {
  context
    .append("circle")
    .attr("fill", fill)
    .attr("r", initialRadius * radiusMultiplier) //This is not cool!!! NEVER TOUCH THE DATA!!!
    .attr("cx", cx)
    .attr("cy", cy);
}
s;
