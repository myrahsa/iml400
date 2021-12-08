function setup() {
	createCanvas(windowWidth, windowHeight);
	g = createGraphics(windowWidth, windowHeight);
	ctx = drawingContext;
	noCursor();
}

function draw() {
	clear();
	colorMode(HSB);
	fill(mouseX / 7 + mouseY / 5, 60, 80);
	ellipse(mouseX, mouseY, 110);
	ctx.filter = "blur(80px)";
}
