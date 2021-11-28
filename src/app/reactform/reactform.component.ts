import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { nameValidator } from '../shared/namevalidator';
import { passwordValidator } from '../shared/passwordvalidator';
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.scss']
})
export class ReactformComponent implements OnInit {
  
  constructor(private fb:FormBuilder) { 
  
  }
 myform!:FormGroup;

  ngOnInit()
  {
    this.myform= this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),nameValidator(/nani/)]],
      box:[false],
      email:[''],
      pass:[''],
      confirmpassword:[''],
      address:this.fb.group({
       city:[''],
       state:['Andhra'],
       pincode:['']
      })
    })
    this.myform.get('box')!.valueChanges.subscribe(checkedValue =>{
        const email=this.myform.get('email')
        if(checkedValue){
          email?.setValidators(Validators.required)
        }
        else{
          email?.clearValidators()
        }
        email?.updateValueAndValidity()
    })
  }


}
