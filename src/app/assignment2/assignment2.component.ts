import {Component} from "@angular/core";
import {asgn2} from "../interface/assignment2.interface";


@Component({
  selector:'app-assignment2',
  templateUrl:'./assignment2.component.html',
})
export class Assignment2Component{
  contents:  asgn2[]=[
    {title:'To Do', task: 'Task 1',content:'Analyze the new requirements gathered from the customers'},
    {title:'In Proges ', task: 'Task 2',content:'Improve application performance'},
    {title:'In Rewiew', task: 'Task 5',content:'Fix the issues reported by the customer'},
    {title:'Done', task: 'Task 8',content:'Test the app in the IE browser'}
  ]
}
