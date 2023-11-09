import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Estudios: any;
  constructor(private cvService:CvService){}

  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {
        console.log(data["estudiosTerminados"][2]);
        this.Estudios=data["estudiosTerminados"][2];
      }
    )
  }
}