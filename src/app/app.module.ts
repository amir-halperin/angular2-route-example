import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MyZoneComponent } from './my-zone/my-zone.component';
import { SearchesComponent } from './my-zone/searches/searches.component';
import { SketchesComponent } from './my-zone/sketches/sketches.component';
import { TagsComponent } from './my-zone/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MyZoneComponent,
    SearchesComponent,
    SketchesComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
