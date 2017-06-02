import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { MyZoneComponent } from './my-zone/my-zone.component';
import { SearchesComponent } from './my-zone/searches/searches.component';
import { SketchesComponent } from './my-zone/sketches/sketches.component';
import { TagsComponent } from './my-zone/tags/tags.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'my-zone', component: MyZoneComponent, children: [
      { path: 'searches', component: SearchesComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'sketches', component: SketchesComponent },
      { path: '', redirectTo: 'searches', pathMatch: 'full' }
    ] 
  },
  { path: '', redirectTo: 'my-zone', pathMatch: 'full'}   
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
