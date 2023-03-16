# Exercise
- Background
Imagine you work at a Social Media company.  Your job is to implement a "Like" button's functionality. 

When a user sees a message and clicks the "Like" button, the button is highlighted (to show it is selected) and the number of likes increases by 1.

Your task is to:
- create a class
- encapsulate the data for rendering the like button (the number of likes, and if it is selected or not)
- responds to user clicking the "Like" button
- if a user clicks the "Like" button, then the button's state switch to on or off, and the number of likes increases or decreases 
- create this class in a seperate file named "LikeComponent.ts", and import it into the file "main.ts"

Out of scope:
- For this exercise, forget about HTML.
- Only focus on defining a TypeScript class with fields, properties, methods, constructor. 

Testing (this code is provided for you on main.ts): 
- Provides the initial number of likes when creating an instance of this class 
- Simulate the scenario where the user clicks the like component
- Display the total number of likes and whether the button is in the selected or unselected state on the console. 
- enter into the terminal the following:  tsc *.ts --target ES5 && node main.js
- if your solution is correct, then the terminal will show:  likesCount: 9, isSelected: false

# Example
- PointComponent is a code example for your reference.
- Web Resources include:
- https://www.typescriptlang.org/docs/handbook/2/classes.html
- https://www.w3schools.com/typescript/typescript_classes.php
