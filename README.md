# Hoover Tech Test
This app allows you to send instructions and parameters to a robotic hoover. The hoover will follow your instructions and then report back its final location along with how much dirt it collected.
### Installation Instructions
Clone this repo:

```bash
git clone git@github.com:bengscott2/hoover-tech-test.git
```

Navigate into the root folder and install the dependencies with npm install:

```bash
npm install
```

### Usage
To run the app with your given instructions type in:

```bash
npm start
```

The app comes with exemplar parameters pre programmed in.

To program your robotic hoover you will have to write out the instructions and parameters(room size, starting position of hoover and dirt locations) in the input.txt file. You can find this file inside the data folder. Please do not alter the test.txt file as this needs to remain the same for testing purposes.

The instructions are entered in this format (with example):

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```
● the first line holds the room dimensions (X Y), separated by a single space (all
coordinates will be presented in this format)

● the second line holds the hoover position

● subsequent lines contain the zero or more positions of patches of dirt (one per
line)

● the next line then always contains the driving instructions (at least one)

Here is the output from the exemplar parameters:

```  
$: npm start
$: 1 3
$: 1
```



### Testing
Testing was done using Jest.
To run the tests type in:
```bash
npm test
```
This will show the code coverage table as well.

### Tech Stack
Built with node.js this app doesn't require any dependencies, beyond the standard node library, other than Jest which is used for testing and eslint for linting.

### Approach
1. I started by modelling out  how I wanted the information to flow and what objects would be communicating with each other.
2. I decided to use a more OOP approach using Class functions as I thought about how these objects might hold state. In this instance I felt that structuring it in this way made it more readable.
3. Modules are imported and exported using pre ES6 exports/requires. Since Node doesn't natively support the more recent import/export style and this is a standalone application I didn't want to introduce unnecessary dependencies.
4. Part of my approach was to make this as plain as possible while conforming to all of the requirements. This means trying to use the least amount of external modules as possible. The only external module that I used was Jest and that was for testing.
5. I started out by building an end to end feature test so that I had an end goal to work towards.
6. From there I started working through the application logically, starting with the input-parser module.
7. I built out the classes after that, beginning with the controller class which drove me to create the hoover class along with their respective unit tests.
8. In the end I had to adjust the app.js file to work with the newly created classes and use async await functions to ensure the information was available prior to it being used. In addition to that I designed it so when you require the file it will export the start function for testing but when you start the file from your command line it will invoke the start function and run the app.

### Final Thoughts
I struggled with what I thought was the 'correct' approach to the architecture of this app. In another project I did use a more modular and functional style of programming which you can see [here](https://github.com/bengscott2/train-times). I felt that I had a defensible reason to use the more OOP style for this standalone app and so I went with that. Having said that I would like to get feedback on that and be challenged on this idea.

If I had more time I would have liked to explore pulling the dirt locations out of the hoover class and into a room class. You could make an argument that the hoover doesn't need to know about the dirt locations and that a room class should hold that. I could also imagine a situation where one room is instantiated with multiple hoovers working on the same room.

I generally wouldn't push the node_modules or coverage folder up to GitHub but in the instructions given it said to include all code not part of the program run. In the interest of transparency I've included any file that was created during the making of this app. 

If you have any questions or comments about this project I would love to hear any and all feedback! I'm curious to see how others would approach this problem and would enjoy listening to other developers thoughts regarding my own approach.
