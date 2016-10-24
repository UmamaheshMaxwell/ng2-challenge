import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";


@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  getData(){

  		return	this.http.get("https://api.themoviedb.org/3/movie/8358/credits?api_key=cd711e243a724dd2fc7dca86aada48e6&language=en-US")
  					.map((response: Response) => response.json());
  }

}
