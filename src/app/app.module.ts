import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewAppointmentComponent } from './calendar/new-appointment/new-appointment.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NewAppointmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
