import { Component, OnInit } from '@angular/core';
import { Vol } from '../models/vol';
import { VolService } from '../vol.service';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.css']
})
export class ListeVolsComponent implements OnInit {
  vols: Vol[] =[];
  filterStr!: string;
  // selectedVol!: Vol;


  constructor(private volService: VolService) { }

  ngOnInit(): void {
    this.volService.findAll().subscribe(v => this.vols = v);
  }

}
