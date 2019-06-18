import { Component } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent {

  private xAxis = [0.5, 5, 5, 10, 11, 12];
  private yAxis = [1, 2, 4, 1, 4, 5];

  public graph = {
    data: [
      {x: [...this.xAxis], y: [...this.yAxis], type: 'scatter', mode: 'lines+points'},
    ],
    layout: {width: 380, height: 340, title: 'Time plot'}
  };

}
