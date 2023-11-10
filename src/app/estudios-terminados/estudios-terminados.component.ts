import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-estudios-terminados',
  templateUrl: './estudios-terminados.component.html',
  styleUrls: ['./estudios-terminados.component.css']
})
export class EstudiosTerminadosComponent implements OnInit {
  Estudios: any;
  constructor(private cvService:CvService){}

  ngOnInit(): void {
    this.cvService.obtenerDatos().subscribe(
      data => {
        console.log(data["estudiosterminados"]);
        this.Estudios=data["estudiosterminados"];
      }
    )
  }
}
