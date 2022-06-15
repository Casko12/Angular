import { Component, OnInit } from '@angular/core';
import {IMail} from "../interface/mail.interface";
import {ICategory} from "../interface/category.interface";
import {WeatherServices} from "../services/weather.services";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
 // mails: IMail[] = [
 //   {userName: 'Tamamo', subject: 'luv luv', shortContent: 'I am here'},
 //   {userName: 'Maple', subject: 'Can we...', shortContent: 'I have finished cleaning'},
 //   {userName: 'U-chan', subject: 'Uhm..', shortContent: 'Am I good'}
 // ];
 // categories: ICategory[] = [
 //   {name:'Favorite',childs:[{name: 'inbox'}, {name: 'send items'}]},
 //   {name:'John',childs:[{name: 'inbox'}, {name: 'send items'}, {name:'outbox'}]},
 // ];
  mails: IMail[] = [];
  categories: ICategory[] = [];

  constructor(private weatherService: WeatherServices) {
  }

  ngOnInit(){
    this.weatherService.mailList().subscribe(value=>{
      this.categories = value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category: string, child: string){
    var new_list: IMail[] = [];
    this.weatherService.mailList().subscribe(value=>{
      for(var i=0;i<value.data.mails.length;i++){
        if(value.data.mails[i].category == category && value.data.mails[i].child == child){
          new_list.push(value.data.mails[i]);
        }
      }
      this.mails = new_list;
    })
  }
}
