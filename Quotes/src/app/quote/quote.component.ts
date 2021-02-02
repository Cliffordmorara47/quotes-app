// import { Quote } from '@angular/compiler';
// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  Quotes: Quote[] = [
    new Quote(0, "Tough Moments", "Don't worry about the things or people that you have lost in your life, things and people who are meant to be with you are with you", "Clifford Morara", 0, 0),
    new Quote(1, "Tough Moments", "When you are broken, its very hard to feel special", "Martin Garrix", 0, 0),
    new Quote(2, "Encouragement", "I would rather die on my feet than live on my knees", "Nelson Mandela", 0, 0),
    new Quote(3, "Heed", "The world is a place that has a great risks and fairly great opportunities", "George Bush", 0, 0) 
  ]
  upvotes = 0;
  downVotes = 0;


  // addNewQuote(Quote: any){
  //   let QuoteLength = this.Quotes.length;
  //   Quote.id = QuoteLength+1;
  //   goal.completeDate = new Date(goal.completeDate)
  //   this.goals.push(goal)
  // }

   deleteQuote(isExpired: any, index:any) {
     if (isExpired) {
       let toDelete = confirm(`Confirm deletion of ${this.Quotes[index].name}?`)

      if (toDelete) {
        this.Quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
