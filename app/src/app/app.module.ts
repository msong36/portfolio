import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingCardComponent } from './landing-card/landing-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectDetailedComponent } from './project-detailed/project-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingCardComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    ProjectDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
