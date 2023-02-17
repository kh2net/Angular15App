import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css'],

})
export class XyzComponent implements OnInit {
  ngOnInit(): void {
  
  }
  Name: string = "";
  click() {
    alert(this.Name);
  }
  event = {
    Name: ""
  };
   
}
