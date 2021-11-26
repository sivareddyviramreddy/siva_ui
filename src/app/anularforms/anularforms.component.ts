import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-anularforms',
  templateUrl: './anularforms.component.html',
  styleUrls: ['./anularforms.component.scss']
})
export class AnularformsComponent implements OnInit {

  constructor( public reg:RegisterService) { }
  userModel=new User("siva","siva@gmaol.com","siva@2552")
  ngOnInit(): void {
  }
  submitform(){
   this.reg.enroll(this.userModel).subscribe( data => console.log("success!",data),
   error =>console.log("error",error)
   );
  }
}
