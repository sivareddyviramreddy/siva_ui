import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.scss']
})
export class ReactformComponent implements OnInit {
  myform!: FormGroup;
  constructor(private fb:FormBuilder) { 
   this.myform=this.fb.group({
     name:[''],
     pass:['']
   })
  }

  ngOnInit(): void {
  }
  mymethod(data:any){
  console.log(data)
  }

}
