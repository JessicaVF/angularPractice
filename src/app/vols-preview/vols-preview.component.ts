import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vol } from '../models/vol';


@Component({
  selector: 'app-vols-preview',
  templateUrl: './vols-preview.component.html',
  styleUrls: ['./vols-preview.component.css']
})
export class VolsPreviewComponent implements OnInit {
  // @Input() vol = new Vol(1, "abc", "Caracas", 2019, "Lyon", 2020, 10)
  @Input() vol!: Vol;
  @Output() evt = new EventEmitter<Vol>();
  productClick(): void {
    this.evt.emit(this.vol);
  }
  constructor() { }

  ngOnInit(): void {

  }

}
