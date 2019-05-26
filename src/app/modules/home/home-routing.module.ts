import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from "./default-layout/default-layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        // loadChildren: './places/places.module#PlacesModule',
        // data: { preload: false },
      },
      {
        path: 'detail',
        component: DetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
