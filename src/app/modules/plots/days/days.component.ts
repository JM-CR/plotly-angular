import {Component} from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent {

  private xAxis: number[];
  private yAxis: number[];
  private date: Date;
  private consultDate: string;

  public graph: Object;

  constructor() {
    this.xAxis = DaysComponent.fillHours();
    this.yAxis = DaysComponent.fillData();

    this.date = new Date();
    this.consultDate = this.getDate();

    this.graph = this.buildGraph();
  }

  private getDate(): string {
    const day = this.date.getDay();
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = this.date.getFullYear();

    return `${month[this.date.getMonth()]} ${day}, ${year}`;
  }

  private buildGraph() {
    return {
      data: [
        {
          x: [...this.xAxis],
          y: [...this.yAxis],
          type: 'scatter',
          name: 'One day'
        },
      ],
      layout: {
        width: 600,
        height: 400,
        title: 'Statistics',
        yaxis: {
          title: this.consultDate
        },
        xaxis: {
          title: 'Hours'
        },
        showlegend: true,
      }
    };
  }

  private static fillHours(): number[] {
    const tempArray = [];
    let randomNumber: number;

    for (let i = 0; i < 24; i++) {
      tempArray.push(i);

      randomNumber = i + Math.floor(Math.random());
      tempArray.push(randomNumber);
    }

    return tempArray;
  }

  private static fillData(): number[] {
    const tempArray = [];
    let randomNumber: number;

    for (let i = 0; i < 24; i++) {
      randomNumber = Math.floor(Math.random() * 11);
      tempArray.push(randomNumber);

      randomNumber = Math.floor(Math.random() * 11);
      tempArray.push(randomNumber);
    }

    return tempArray;
  }
}
