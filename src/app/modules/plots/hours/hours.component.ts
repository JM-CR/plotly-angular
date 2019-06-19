import {Component} from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent {

  private readonly xAxis: number[];
  private readonly yAxis: number[];
  private readonly consultDate: string;
  private date: Date;

  public graph;

  constructor() {
    this.xAxis = HoursComponent.fillMinutes();
    this.yAxis = HoursComponent.fillData();

    this.date = new Date();
    this.consultDate = this.getDate();

    this.graph = this.buildGraph();
  }

  // Methods
  private static fillMinutes(): number[] {
    const tempArray = [];
    let randomNumber: number;

    for (let i = 0; i < 61; i += 10) {
      tempArray.push(i);

      randomNumber = i + Math.floor(Math.random() * 10);
      tempArray.push(randomNumber);
    }

    return tempArray;
  }

  private static fillData(): number[] {
    const tempArray = [];
    let randomNumber: number;

    for (let i = 0; i < 61; i += 10) {
      randomNumber = Math.floor(Math.random() * 3);
      tempArray.push(randomNumber);

      randomNumber = Math.floor(Math.random() * 10);
      tempArray.push(randomNumber);
    }

    return tempArray;
  }

  private getDate(): string {
    const day = this.date.getDay();
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = this.date.getFullYear();
    const hour = this.date.getHours();

    return `${hour}:00, ${month[this.date.getMonth()]} ${day} ${year}`;
  }

  private buildGraph() {
    return {
      data: [
        {
          x: [...this.xAxis],
          y: [...this.yAxis],
          type: 'scatter',
          name: `${this.consultDate}`,
          marker: {color: 'red'}
        },
      ],
      layout: {
        width: 600,
        height: 400,
        title: `Statistics - Hours`,
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
