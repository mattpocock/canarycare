import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonbar',
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.scss']
})
export class ButtonbarComponent implements OnInit {
  icons: any[];

  constructor() {

    this.icons = [
      {
        desc: "Movement",
        image: "https://www.canarycare.co.uk/static/img/icons/movement.svg"
      },
      {
        desc: "Temperature",
        image: "https://www.canarycare.co.uk/static/img/icons/temperature.svg"
      },
      {
        desc: "Visitors",
        image: "https://www.canarycare.co.uk/static/img/icons/visitors.svg"
      },
      {
        desc: "Door Activity",
        image: "https://www.canarycare.co.uk/static/img/icons/door-activity.svg"
      },
      {
        desc: "Medication",
        image: "https://www.canarycare.co.uk/static/img/icons/medication.svg"
      },
      {
        desc: "Instant Alerts",
        image: "https://www.canarycare.co.uk/static/img/icons/mobile-alerts.svg"
      }
    ]

  }

  ngOnInit() {
  }

}
