# sierpinski-triangle

JavaScript code that draws a [Sierpinski Triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle) fractal in the browser using HTML canvas. The code first defines the three vertices of the triangle, and then begins to create the fractal through a series of (pseudo) random choices. The fractal is created by drawing a dot halfway between the previous dot and one of the three vertices (the first dot is chosen to be a random point on the canvas to begin the simulation). A "three-sided die" is "rolled", and the resulting number represents which vertex to head towards. If the simulation is allowed to run for a sufficient amount of time, a nice triangular fractal is produced:

![Example fractal](https://github.com/sam-olson/sierpinski-triangle/blob/master/assets/example.png)

Sliders for changing rate of the simulation and the distance between the vertices of the triangle are provided. 
