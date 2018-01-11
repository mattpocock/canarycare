import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbar',
  templateUrl: './eventbar.component.html',
  styleUrls: ['./eventbar.component.scss']
})

export class EventbarComponent implements OnInit {
  events: { title: string; location: string; icon: string; date: number}[];

  constructor() {
    this.events =  [
      {
        title: "Movement Detected",
        location: "Bedroom",
        icon: 'fa fa-suitcase',
        date: new Date(2017, 1, 3).getTime()
      },
      {
        title: "Door Opened / Closed",
        location: "Front Door was Closed",
        icon: 'fa fa-location-arrow',
        date: new Date(2017, 1, 2).getTime()
      },
      {
        title: "Door Opened / Closed",
        location: "Back Door was Opened",
        icon: 'fa fa-location-arrow',
        date: new Date(2017, 1, 2).getTime()
      },
      {
        title: "Door Opened / Closed",
        location: "Back Door was Closed",
        icon: 'fa fa-location-arrow',
        date: new Date(2017, 1, 2).getTime()
      }
    ]
  }

  ngOnInit() {
  }

}
