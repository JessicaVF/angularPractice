import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vol } from '../models/vol';
import { VolService } from '../vol.service';

@Component({
  selector: 'app-add-vols',
  templateUrl: './add-vols.component.html',
  styleUrls: ['./add-vols.component.css']
})
export class AddVolsComponent implements OnInit {
  public addVol!: FormGroup;
  constructor(public fb: FormBuilder, private volService: VolService) {
    this.addVol = this.fb.group({
      volNumber: [],
       departureAirportCode: [],
       arrivalAirportCode: [],
       departureDate: [],
       arrivalDate: [],
       departureTime: [],
       arrivalTime: [],
       late: [],
       price: []
      });
  }

  ngOnInit(): void {

  }
  addVolF(){
    const formValue = this.addVol.value;
    formValue.departureDate = formValue.departureDate.split('-').reverse().join('/');
    formValue.arrivalDate = formValue.arrivalDate.split('-').reverse().join('/');
    this.volService.add(formValue).subscribe(v => console.log(v));

  }
}

