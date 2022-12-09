# Boids Algorithm

A representation of boids algorithm using JavaScript and a graphical user interface. This script creates a canvas and populates it with 100 boids that move according to the rules of boids algorithm. 

## What is Boids Algorithm? 

The Boids algorithm is a model for simulating the collective behavior of birds. It was developed by Craig Reynolds in 1986. The algorithm uses three simple rules to simulate the behaviors of individual birds, such as alignment, separation, and cohesion, to produce realistic flocking behavior. These rules are:

## Rules:
 
 ![image](https://user-images.githubusercontent.com/48231908/206784256-bb271b2c-2903-46d3-836f-098fada8ec2a.png)
 
- Seperation: Each bird tries to keep a certain distance from its neighbors to avoid collisions.
- Alignment:  Each bird tries to align its velocity with the average velocity of its nearby neighbors.
- Cohesion: Each bird tries to move towards the average position of its neighbors.

## Real-Life Examples (Flocking)

Flocking behavior is a type of collective behavior that is seen in animals such as birds and fish. It is characterized by the coordinated movement of a group of animals, where each individual follows a set of simple rules that determine how it moves and interacts with its neighbors. In flocks of birds, for example, each bird tries to maintain a certain distance from its neighbors, align its velocity with the average velocity of its neighbors, and move towards the average position of its neighbors. These simple rules can produce complex and seemingly intelligent behavior, such as the ability to navigate through obstacles and avoid predators. Flocking behavior has been studied extensively by researchers in fields such as biology, computer science, and physics.
- Links:
  - https://www.youtube.com/watch?v=0dskCpuxqtI&ab_channel=CGTN
  - https://www.youtube.com/watch?v=R0axChxizwA&ab_channel=ValerieClark

## Notes:

To Do:
implement the specific rules of the algorithm, 
 -  add rules to the update() method of the Boid class. 
 
