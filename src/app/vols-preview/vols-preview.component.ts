import { Component, Input, OnInit } from '@angular/core';
import { Vol } from '../models/vol';


@Component({
  selector: 'app-vols-preview',
  templateUrl: './vols-preview.component.html',
  styleUrls: ['./vols-preview.component.css']
})
export class VolsPreviewComponent implements OnInit {
  @Input() vol = new Vol(1, "abc", "Caracas", 2019, "Lyon", 2020, 10)



  constructor() { }

  ngOnInit(): void {

  }

}