import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
 public data:any
 public cid:any;
  constructor(public dataservice:DataserviceService,public activareroute:ActivatedRoute) { }

  ngOnInit(){
     this.data=this.dataservice.datamethod()
   this.cid=parseInt(this.activareroute.snapshot.paramMap.get('id')!);
  }

}
