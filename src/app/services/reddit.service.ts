import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
	http:any;
	baseUrl: String;
	apiKey: any;
	sortBy: any;

	constructor(http:Http){
		this.http = http;
		this.baseUrl = 'https://newsapi.org/v1';
		this.apiKey = 'b42dc97dda684df0b3367cd445a3366f';
		this.sortBy = 'top';
	}

	//getPosts(category,limit){
		//return this.http.get(this.baseUrl+'/articles'+category+'/top.json?limit=' + limit + apiKey)
		//.map(res => res.json());
	//}

	getPosts(category){
		if (category == "technology") {
			this.sortBy = "latest";
		}
		return this.http.get(this.baseUrl+'/articles?source='+category+'&sortBy='+this.sortBy+'&apiKey='+this.apiKey)
		.map(res => res.json());
	}

	getCategories(){
		return this.http.get(this.baseUrl+'/sources?language=en')
		.map(res => res.json());
	}
}