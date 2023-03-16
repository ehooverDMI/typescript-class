import { Point } from "./PointComponent"

let point = new Point(1,2)
let x = point.x
point.x = 10
point.draw()


import {LikeComponent} from './LikeComponent'
let component = new LikeComponent (10, true);
component.onCLick()
console.log(`likesCount: ${component.likesCount}, isSelected ${component.isSelected}`)

// tsc *.ts --target ES5 && node main.js
// if your solution is correct, then the terminal will show:  likesCount: 9, isSelected: false