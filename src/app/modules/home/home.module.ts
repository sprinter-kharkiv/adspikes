import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { FiltersComponent } from "./filters/filters.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    FiltersComponent,
    NavigationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
