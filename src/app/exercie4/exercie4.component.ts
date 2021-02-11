import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercie4',
  templateUrl: './exercie4.component.html',
  styleUrls: ['./exercie4.component.css']
})
export class Exercie4Component implements OnInit {
  texts : string[] = ['un', 'deux', 'trois'];
  constructor() { }

  ngOnInit(): void {
  }

}
