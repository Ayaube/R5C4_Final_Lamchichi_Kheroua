import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import {ListViewComponent} from "./list-view/list-view.component";
export const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListViewComponent
  },
  {
    path: 'charts',
    component: ChartComponent
  }
];
