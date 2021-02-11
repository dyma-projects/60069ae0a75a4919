import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercie3',
  templateUrl: './exercie3.component.html',
  styleUrls: ['./exercie3.component.css']
})
export class Exercie3Component implements OnInit {
  status : boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  clickInverse(){
    this.status = false
  }

}
