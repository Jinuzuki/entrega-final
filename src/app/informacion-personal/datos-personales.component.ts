import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})

export class DatosPersonalesComponent implements OnInit {
  Estudios: any;
  constructor(private cvService:CvService){}

  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {
        console.log(data["estudiosTerminados"][6]);
        this.Estudios=data["estudiosTerminados"][6];
      }
    )
  }
}