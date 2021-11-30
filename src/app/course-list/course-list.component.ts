import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  data:any;
  constructor(public dataservice:DataserviceService,public route:Router) { }

  ngOnInit(){
    this.data=this.dataservice.datamethod()
  }
  params(x:any){
    this.route.navigate(['/course',x.id])
  }

}
