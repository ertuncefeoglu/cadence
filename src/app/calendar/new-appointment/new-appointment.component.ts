import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'cadence-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  model = new Appointment();

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.model);
  }

}
