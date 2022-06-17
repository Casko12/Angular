import { Component, OnInit } from '@angular/core';
import {examAngular} from "../interface/examAngular";
import {WeatherServices} from "../services/weather.services";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  //@ts-ignore
  data: examAngular = null;
  constructor(private weatherService: WeatherServices) { }

  ngOnInit(){
    this.getData();
  }
  getData(){
    this.weatherService.examAngular().subscribe(value => {this.data =value})
  }

}
