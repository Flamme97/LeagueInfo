import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search', component: UserinfoComponent,
  }



];
