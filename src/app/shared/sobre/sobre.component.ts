import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'; 

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  idade = moment().diff("1996-10-10", "y");
  constructor() { }

  ngOnInit(): void {
  }

}
