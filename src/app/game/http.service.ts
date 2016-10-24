import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: Http) {}


  createDeck(){

  		return	this.http
  					.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  					.map((response: Response) => response.json());
  }

  drawCards(deckId : string){
  		return	this.http
  					.get("https://deckofcardsapi.com/api/deck/"+ deckId + "/draw/?count=2")
  					.map((response: Response) => response.json());  	
  }
}
    