import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() public newmsg: any;
@Output() public childinfo=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  firemsg(){
    this.childinfo.emit("this msg from child Info")
  }

}
