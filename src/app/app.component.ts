import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TETRA';
  public totalClickedAmount = 0;

  totalClickedHandler(e) {
    this.totalClickedAmount = e;
  }
}
