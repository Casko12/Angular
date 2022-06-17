import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneinfoComponent } from './phoneinfo/phoneinfo.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { AssignmentComponent } from './assignment/assignment.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { ExamComponent } from './exam/exam.component';

const appRoutes: Routes = [
  {path: 'lop-hoc', component:ClassComponent
  },
  {path: 'san-pham', component:PhoneComponent
  },
  {path: 'thoi-tiet', component:WeatherComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassComponent,
    PhoneComponent,
    PhoneinfoComponent,
    WeatherComponent,
    AssignmentComponent,
    Assignment2Component,
    ExamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
