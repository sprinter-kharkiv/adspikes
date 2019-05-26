import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { FiltersComponent } from "./filters/filters.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule, MatSelectModule, MatCheckboxModule } from "@angular/material";
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
};

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    FiltersComponent,
    NavigationComponent,
    DashboardComponent,
    CardComponent,
    DetailComponent,
    PageDetailComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    ChartsModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class HomeModule { }
