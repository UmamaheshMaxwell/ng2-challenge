import { Component, OnInit } from '@angular/core';
import { Response} from "@angular/http";
import { HttpService } from "./http.service"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers :[HttpService]
})
export class GameComponent implements OnInit {

 deckId: string ;
 deckData: any[] = [];
  constructor(private _httpService : HttpService){}

  ngOnInit() {
  	this._httpService.createDeck()
  		.subscribe(
  			(data : any) => this.deckId = data["deck_id"]
		)
// console.log(this.deckId);
//   	this._httpService.drawCards(this.deckId)
//   		.subscribe(
//   			(data : any) => this.deckData = data
// 		)
  } 
}
