import {Component} from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss']
})
export class MonthsComponent {

  private readonly xAxis: number[];
  private readonly yAxis: number[];
  private readonly consultDate: string;
  private date: Date;

  public graph;

  constructor() {
    this.xAxis = MonthsComponent.fillMinutes();
    this.yAxis = MonthsComponent.fillData();

    this.date = new Date();
    this.consultDate = this.getDate();

    this.graph = this.buildGraph();
  }

  // Methods
  private static fillMinutes(): number[] {
    const tempArray = [];
    let randomNumber: number;

    const numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const cycles = numberOfDays[new Date().getMonth()] + 1;

    for (let i = 0; i < cycles; i++) {
      tempArray.push(i);

      randomNumber = i + Math.floor(Math.random());
      tempArray.push(randomNumber);
    }

    return tempArray;
  }

  private static fillData(): number[] {
    const tempArray = [];
    let randomNumber: number;

    const numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const cycles = numberOfDays[new Date().getMonth()] + 1;

    for (let i = 0; i < cycles; i++) {
      randomNumber = Math.floor(Math.random() * 7);
      tempArray.push(randomNumber);

      randomNumber = Math.floor(Math.random() * 15);
      tempArray.push(randomNumber);
    }

    return tempArray;
  }

  private getDate(): string {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = this.date.getFullYear();

    return `${month[this.date.getMonth()]} ${year}`;
  }

  private buildGraph() {
    return {
      data: [
        {
          x: [...this.xAxis],
          y: [...this.yAxis],
          type: 'scatter',
          name: `${this.consultDate}`,
          marker: {color: 'red'},
	  mode: 'markers'
        },
      ],
      layout: {
        width: 600,
        height: 400,
        title: `Statistics - Months`,
        yaxis: {
          title: 'Data'
        },
        xaxis: {
          title: 'Minutes'
        },
        showlegend: true,
      }
    };
  }
}
