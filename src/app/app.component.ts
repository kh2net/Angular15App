import { Component } from '@angular/core';
import { XyzComponent } from './xyz/xyz.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular15App';
  c: XyzComponent = new XyzComponent();

}
