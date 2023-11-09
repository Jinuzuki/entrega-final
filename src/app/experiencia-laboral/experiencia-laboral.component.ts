import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {
  Estudios: any;
  constructor(private cvService:CvService){}

  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {
        console.log(data["estudiosTerminados"][1]);
        this.Estudios=data["estudiosTerminados"][1];
      }
    )
  }
}
