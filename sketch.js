var myData;
var astronauts = [];
var d = dist(x, y, mouseX, mouseY);


function preload() {
	myData = loadJSON('assets/peopleinspace.json');
}

function setup() {
 
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < myData.people.length; i++) {

		var astroData = myData.people[i];

		var newAstronaut = new Astronaut(astroData.name, astroData.country, astroData.launchdate);
		astronauts.push(newAstronaut);
	}
}

function draw() {
	background(26,0,58);

	for (var i = 0; i < astronauts.length; i++) {
		var astro = astronauts[i];
		astro.move();
		astro.display();
	}

}

function Astronaut(name, country, date) {

	this.name = name;
	this.country = country;
	this.launchDate = date;

	var daysInSpace = (Date.now() - Date.parse(this.launchDate)) / 1000 / 60 / 60 / 24;

	this.radius = daysInSpace;

	this.x = random(this.radius, width - this.radius);
	this.y = random(this.radius, height - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;

	this.display = function() {
		
		console.log('display ' + this.radius)
		noStroke();
		fill(255,255,255);
		textAlign(CENTER);

		if (mouseButton) {
		ellipse(this.x, this.y, this.radius * 0.6)
		text(this.name, this.x, this.y + this.radius/2)
		} else {
		ellipse(mouseX, mouseY, this.radius * 0.6)
		
		}
		
		if(mouseIsPressed) {
		  if(mouseButton == 'left') {
		    
		  fill(159,190,231)
		  text(this.launchDate, this.x, this.y + this.radius/1.4);
		    
		  } 
		  else if (mouseButton == 'right') {
		  fill(26,0,58)
	   	  text(this.country, this.x, this.y + this.radius/15);
		   
		  }
		}
		
		if (mouseX <= width/2.5) {
        this.x = random(this.radius, width - this.radius);
	    this.y = random(this.radius, height - this.radius);
        } else if (mouseX >= width/1.8) {
        this.x = random(this.radius, width - this.radius);
	    this.y = random(this.radius, height - this.radius);
        } 
		
		
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1
			print(this.x);
			print(this.radius);
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1
			print(this.y);
			print(this.radius);
		}
		
		
	}
	
	
}


	function windowResized(){
resizeCanvas(windowWidth,windowHeight);
                                        
}