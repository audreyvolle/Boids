let boids = [];

function setup() {
  createCanvas(400, 400);

  // Create a new boid at a random position on the canvas
  for (let i = 0; i < 100; i++) {
    boids.push(new Boid(random(width), random(height)));
  }
}

function draw() {
  background(51);

  // Update and render each boid
  for (let i = 0; i < boids.length; i++) {
    boids[i].update();
    boids[i].render();
  }
}

class Boid {
  constructor(x, y) {
    // Set the initial position of the boid
    this.position = createVector(x, y);

    // Set the initial velocity of the boid
    this.velocity = createVector(random(-1, 1), random(-1, 1));

    // Set the initial acceleration of the boid
    this.acceleration = createVector();
  }

  // Update the boid's position, velocity, and acceleration
  update() {
    // Implement the rules of the boids algorithm here

    // Limit the boid's speed
    this.velocity.limit(5);

    // Update the boid's position using its velocity
    this.position.add(this.velocity);

    // Reset the boid's acceleration to 0
    this.acceleration.mult(0);
  }

  // Render the boid on the canvas
  render() {
    stroke(255);
    fill(255);
    ellipse(this.position.x, this.position.y, 8, 8);
  }
}
