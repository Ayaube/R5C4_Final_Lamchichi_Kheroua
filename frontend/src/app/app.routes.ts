import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut
  { path: 'list', component: ListViewComponent }
];
