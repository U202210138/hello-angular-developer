import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterDeveloperComponent } from './welcoming/components/register-developer/register-developer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WelcomeComponent } from './welcoming/components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterDeveloperComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
