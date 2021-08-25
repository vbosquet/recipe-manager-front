import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TableModule } from 'primeng/table';

import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeUpdateComponent } from "./recipe/recipe-update.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    RecipeUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000'
    }),
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
