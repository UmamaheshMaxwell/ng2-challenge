import { Component, OnInit } from '@angular/core';
import { Response} from "@angular/http";
import { HttpService } from "./http.service"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers :[HttpService]
})
export class MovieComponent implements OnInit {

	movieData: any[] ;
  constructor(private _httpService : HttpService){

  }
  ngOnInit() {
  	this._httpService.getData()
  		.subscribe(
  			(data : any) => this.movieData = data["cast"]
		)
  }

}
