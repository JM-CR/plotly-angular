import {Component} from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent {

  private readonly xAxis: number[];
  private readonly yAxis: number[];
  private readonly consultDate: string;
  private date: Date;

  public graph;

  constructor() {
    this.xAxis = DaysComponent.fillHours();
    this.yAxis = DaysComponent.fillData();

    this.date = new Date();
    this.consultDate = this.getDate();

    this.graph = this.buildGraph();
  }

  // Methods
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
          name: `${this.consultDate}`
        },
      ],
      layout: {
        width: 600,
        height: 400,
        title: `Statistics - Days`,
        yaxis: {
          title: 'Data'
        },
        xaxis: {
          title: 'Hours'
        },
        showlegend: true,
      }
    };
  }
}
