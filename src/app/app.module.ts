import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { VenueComponent } from './venue/venue.component';
import { HomeComponent } from './home/home.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HttpClientModule } from '@angular/common/http';
import { FactComponent } from './fact/fact.component';
import { GeneralrulesComponent } from './generalrules/generalrules.component';
import { FAQsComponent } from './faqs/faqs.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HerosectionComponent,
    VenueComponent,
    HomeComponent,
    RegistrationformComponent,
    FactComponent,
    GeneralrulesComponent,
    FAQsComponent,
    EventsComponent,
    FooterComponent,
    MapComponent,
    AdminpanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
