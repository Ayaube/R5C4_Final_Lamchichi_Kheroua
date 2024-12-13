import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxChartsModule, ScaleType, Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [HttpClientModule, NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartData: any[] = [];
  avgResolutionTimes: any[] = [];
  avgVisitedNodes: any[] = [];
  algorithmCounts: any[] = [];
  colorScheme: Color = {
    domain: ['rgba(0,255,178,0.45)', '#00ffb2', 'rgba(0,86,179,0.73)', '#AAAAAA'],
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:5001/searches/all').subscribe((data) => {
      this.chartData = data;
      this.prepareAlgorithmCounts(data);
      this.prepareAvgResolutionTimes(data);
      this.prepareAvgVisitedNodes(data);
    });
  }

  prepareAlgorithmCounts(data: any[]): void {
    const counts = data.reduce((acc, search) => {
      acc[search.algorithm] = (acc[search.algorithm] || 0) + 1;
      return acc;
    }, {});
    this.algorithmCounts = Object.keys(counts).map((key) => ({
      name: key,
      value: counts[key]
    }));
  }

  prepareAvgResolutionTimes(data: any[]): void {
    const filteredData = data.filter(
      (search) => search.grid_width * search.grid_height > 200
    );
    const averages = filteredData.reduce((acc, search) => {
      if (!acc[search.algorithm]) {
        acc[search.algorithm] = { total: 0, count: 0 };
      }
      acc[search.algorithm].total += search.time_ns;
      acc[search.algorithm].count++;
      return acc;
    }, {});
    this.avgResolutionTimes = Object.keys(averages).map((key) => ({
      name: key,
      value: averages[key].total / averages[key].count
    }));
  }

  prepareAvgVisitedNodes(data: any[]): void {
    const filteredData = data.filter((search) => {
      const dx = search.end[0] - search.start[0];
      const dy = search.end[1] - search.start[1];
      return Math.sqrt(dx * dx + dy * dy) > 10;
    });
    const averages = filteredData.reduce((acc, search) => {
      if (!acc[search.algorithm]) {
        acc[search.algorithm] = { total: 0, count: 0 };
      }
      acc[search.algorithm].total += search.visited_nodes;
      acc[search.algorithm].count++;
      return acc;
    }, {});
    this.avgVisitedNodes = Object.keys(averages).map((key) => ({
      name: key,
      value: averages[key].total / averages[key].count
    }));
  }
}
