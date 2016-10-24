import { Component, OnInit } from '@angular/core';
import { Response} from "@angular/http";
import { HttpService } from "./http.service"

@Component({
  selector: 'http-app',
  templateUrl: './movie.component.html',
  providers :[HttpService]
})

export class HttpComponent implements OnInit {
  
  movieData: any[];
  constructor(private _httpService : HttpService){

  }
  ngOnInit() {
  	this._httpService.getData()
  		.subscribe(
  			data => {
  				const movieArray = [];
  				for(let key in data){
  					movieArray.push(data[key])
  				}

  				this.movieData = movieArray;
  				console.log(this.movieData)
  			}
  			
		)
  }

}