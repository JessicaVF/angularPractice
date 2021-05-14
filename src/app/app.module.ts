import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AirportManagementComponent } from './airport-management/airport-management.component';
import { ListeVolsComponent } from './liste-vols/liste-vols.component';
import { VolsPreviewComponent } from './vols-preview/vols-preview.component';
import { VolsDetailComponent } from './vols-detail/vols-detail.component';
import { AddVolsComponent } from './add-vols/add-vols.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'volDetail/:id', component: VolsDetailComponent,
  },
  {path: 'volsList', component: ListeVolsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AirportManagementComponent,
    ListeVolsComponent,
    VolsPreviewComponent,
    VolsDetailComponent,
    AddVolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
