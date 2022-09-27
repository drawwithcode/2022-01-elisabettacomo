// The reference: Marcel Duchamp, Anémic Cinema (1926)
// My generative artwork is a reproduction of the famous film directed by Marcel Duchamp. 
// Here we can observe the hypnotic perpetual motion of twelve rotating disks

//Let's start the sketch

//Setting the variables:
//radius defines the distance between the center of the circles and the center of the rotation
let radius = 20;

//the starting value of the angle is 0
let angle = 0;

//as we want to increase the stroke of the circles, we must define the variable of the stroke
let border = 2.2;

//this is the diameter of the smallest circle
let diameter = 70;



function setup() { 
  createCanvas(windowWidth, windowHeight);
  //using ellipseMode(CENTER) the rotation of the circles can start from their center 
  ellipseMode(CENTER);
  //I'm setting an high frameRate so that the animation can be very smooth
  frameRate(24);
}

function draw() { 
  background(0);
  
  //translation of the subject in the middle of the page
  translate(width/2, height/2);
  //setting a rotation based on the variable "angle" and the "frameCount"
  rotate (angle);
  //i need to slow down the animation by dividing the frameCount
  angle = frameCount / 12;

  // if (frameCount >= 120) {
  //   angle = frameCount / 6 * i;
  // }
  
  //Let's draw the circles, starting from the biggest one, so that it can be shown in the back

  //the strokeWeight comes from the multiplication of the variable "border" 
  strokeWeight(border * 12);
  //the "X" value of the ellipse depends on the center of the rotation
  //the diameter increases of one everytime
  ellipse(radius * 0.5 , 0, diameter * 12);
  
  strokeWeight(border * 11);
  ellipse(radius, 0, diameter * 11);
  
  strokeWeight(border * 10);
  ellipse(radius * 1.5, 0, diameter * 10);
  
  strokeWeight(border * 9);
  ellipse(radius * 2, 0, diameter * 9);
  
  strokeWeight(border * 8);
  ellipse(radius * 2.5, 0, diameter * 8);
  
  strokeWeight(border * 7);
  ellipse(radius * 3, 0, diameter * 7);
  
  strokeWeight(border * 6);
  ellipse(radius * 3.5, 0, diameter * 6);
  
  strokeWeight(border * 5);
  ellipse(radius * 4, 0, diameter * 5);
  
  strokeWeight(border * 4);
  ellipse(radius * 4.5, 0, diameter * 4);
  
  strokeWeight(border * 3);
  ellipse(radius * 5, 0, diameter * 3);
  
  strokeWeight(border * 2);
  ellipse(radius * 5.5, 0, diameter * 2);
  
  strokeWeight(border * 1);
  ellipse(radius * 6, 0, diameter * 1);

}



// //The following lines show the attempt to use a "for" cycle to avoid writing each circle. Unfortunately, the result is not satisfactory

// function draw() { 
//   background(0);

//   translate(width/2, height/2);

//   rotate (angle);
//   angle = frameCount / 18;
  
// //here we create a cycle for the circles, so that I can avoid to draw them one-by-one
//   for (i = 12; i >=0; i--) {
//     strokeWeight(border * 1 * i)
//     ellipse(radius * 2 / i, 0, diameter * 1 * i);

//     stroke("black")
//   }

// }