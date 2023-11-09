import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})

export class IdiomasComponent implements OnInit {
  Estudios: any;
  constructor(private cvService:CvService){}

  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {
        console.log(data["estudiosTerminados"][5]);
        this.Estudios=data["estudiosTerminados"][5];
      }
    )
  }
}