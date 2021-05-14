import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vol } from '../models/vol';
import { VolService } from '../vol.service';

@Component({
  selector: 'app-vols-detail',
  templateUrl: './vols-detail.component.html',
  styleUrls: ['./vols-detail.component.css']
})
export class VolsDetailComponent implements OnInit {
  retard = "You must be in a hurry, because this flight is in retard #EvilLaugh"
  vol!: Vol;
  constructor(private volService: VolService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || -1;
    this.volService.findOne(+id).subscribe(v => this.vol = v);

  }


}
