import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Estudios: any;
  constructor(private cvService:CvService){}

  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {
        console.log(data["estudiosTerminados"][4]);
        this.Estudios=data["estudiosTerminados"][4];
      }
    )
  }
}