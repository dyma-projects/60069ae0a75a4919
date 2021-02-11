import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercie1',
  templateUrl: './exercie1.component.html',
  styleUrls: ['./exercie1.component.css']
})
export class Exercie1Component implements OnInit {
  path : string = "../../assets/images/dyma.jpg";
  isImgClicked : boolean = false;
  nameOfImg = "Dyma";
  constructor() { }

  ngOnInit(): void {
  }

  clickOnImg(){
    this.isImgClicked = true;
  }

}
