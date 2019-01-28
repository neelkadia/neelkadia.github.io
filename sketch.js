/// LISCENCE: Creative Commons Attribution 4.0 International (CC BY 4.0)
/// DATE: 24-02-2018

////////////////////////////////////////////////////////

var num = 30;
var angle = 360;
var cnv;

// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }

function setup() {
 cnv = createCanvas((windowWidth - width) / 2, (windowHeight - height) / 2);
 cnv.parent('sketch1');

 //centerCanvas(); cnv = createCanvas(800, 500);
 frameRate(60);
}

function draw() {


	//background(0);
  background(0);
	translate(width/2, height/2);

	for(var i =0;i<360;i+=0.5){
		//angle = cos(radians(i*click+num))*220;
    //var x = i*sin(i);
		//var y = i*cos(i);

		var x =40+ sin(radians(angle))*i;
    var y =40+ cos(radians(angle))*i;
	  noStroke();
		fill(255);
	  ellipse(x,y,3, 3);
		rotate(tan(radians(num)));

	}

//  num++;
	angle++;
	textSize(10);
}

// function windowResized() {
//   centerCanvas();
// }

	function mouseClicked() {
		//angle++;
		 num++;
}
