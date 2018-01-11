import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewbar',
  templateUrl: './reviewbar.component.html',
  styleUrls: ['./reviewbar.component.scss']
})
export class ReviewbarComponent implements OnInit {

  reviews: any[];
  currentReview: {};
  reviewCounter: number;

  constructor() {
    this.reviews = [
      {
        name: "Jill, Northern Ireland",
        text: "Having this system in place is just a godsend. I couldn't live without it now."
      },
      {
        name: "MC, West Midlands",
        text: "It gives me peace of mind"
      },
      {
        name: "DL, London",
        text: "It's reassuring to know that she is moving around and when the carers have been in and when they haven't"
      },
      {
        name: "KL, East Lothian",
        text: "I could not recommend this product more highly. It is such a helpful system for all the family"
      },
      {
        name: "Jane L",
        text: "Canary Care let me know that Dad was out of bed, and therefore not ill, and that he was in his routine. The alerts I put in place would also allow me know if he had fallen and couldn't move. It was a great reassurance."
      },
      {
        name: "James C",
        text: "My partner has Alzheimer's dementia. For anyone living with dementia, I strongly recommend having the Canary Care system installed in their home. There is an alert if the person leaves their home when they shouldn't. The Canary Care staff are very friendly and helpful and explain how the system works."
      }
    ]

    this.currentReview = this.reviews[0];
    this.reviewCounter = 0;
  }

  reviewClick(event) {
    this.reviewCounter++;

    if (this.reviewCounter >= this.reviews.length) {
      this.reviewCounter = 0;
    }

    this.currentReview = this.reviews[this.reviewCounter];
  }

  ngOnInit() {
  }

}
