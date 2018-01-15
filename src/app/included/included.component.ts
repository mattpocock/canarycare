import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-included',
  templateUrl: './included.component.html',
  styleUrls: ['./included.component.scss']
})
export class IncludedComponent implements OnInit {

  included: any[];

  constructor() {

    this.included = [
      {
        title: "Hub and Power Supply",
        image: "https://www.canarycare.co.uk/media/512pxSquare_Hub.png.300x0_q95.jpg"
      },
      {
        title: "Sensors",
        image: "https://www.canarycare.co.uk/media/512pxSquare_Sensors.png.300x0_q95.jpg"
      },
      {
        title: "Visitor Cards",
        image: "https://www.canarycare.co.uk/media/512pxSquare_Card.png.300x0_q95.jpg"
      },
      {
        title: "...and a very clever portal",
        image: "https://www.canarycare.co.uk/media/512pxSquare_Phone.png.300x0_q95.jpg"
      }
    ]

  }

  ngOnInit() {
  }

}
