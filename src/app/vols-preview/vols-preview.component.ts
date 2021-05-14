import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vol } from '../models/vol';


@Component({
  selector: 'app-vols-preview',
  templateUrl: './vols-preview.component.html',
  styleUrls: ['./vols-preview.component.css']
})
export class VolsPreviewComponent implements OnInit {

  @Input() vol!: Vol;

  constructor() { }

  ngOnInit(): void {

  }

}
