import {Component} from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss']
})
export class YearsComponent {

  private readonly xAxis: string[];
  private readonly yAxis: number[];
  private readonly consultDate: string;
  private date: Date;

  public graph;

  constructor() {
    this.xAxis = YearsComponent.fillMonths();
    this.yAxis = YearsComponent.fillData();

    this.date = new Date();
    this.consultDate = this.getDate();

    this.graph = this.buildGraph();
  }

  // Methods
  private static fillMonths(): string[] {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return months;
  }

  private static fillData(): number[] {
    const tempArray = [];
    let randomNumber: number;

    for (let i = 0; i < 13; i++) {
      randomNumber = Math.floor(Math.random() * 11);
      tempArray.push(randomNumber);
    }

    return tempArray;
  }

  private getDate(): string {
    const year = this.date.getFullYear();

    return `${year}`;
  }

  private buildGraph() {
    return {
      data: [
        {
          x: [...this.xAxis],
          y: [...this.yAxis],
          type: 'scatter',
          name: `${this.consultDate}`,
          marker: {color: 'orange'}
        },
      ],
      layout: {
        width: 600,
        height: 400,
        title: `Statistics - Years`,
        yaxis: {
          title: 'Data'
        },
        xaxis: {
          title: 'Months'
        },
        showlegend: true,
      }
    };
  }
}
