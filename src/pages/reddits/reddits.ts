import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

	items: any;
	category: any;
	limit: any;
	apiKey: any;
	category_items: any;

	constructor(public navCtrl: NavController, private redditService:RedditService) {
		this.getDefaults();
	}

	ngOnInit(){
		//this.getPosts(this.category, this.limit);
		this.getPosts(this.category);
		this.getCategories();
	}

	getDefaults(){
		if (localStorage.getItem('category') != null) {
			this.category = localStorage.getItem('category');
		}else{
			this.category = 'fox-sports';	
		}
	}

	getPosts(category){
		this.redditService.getPosts(category).subscribe(response => {
			this.items = response.articles;
		});
	}

	getCategories(){
		this.redditService.getCategories().subscribe(response => {
			this.category_items = response.sources;
		});
	}

	viewItem(item){
		this.navCtrl.push(DetailsPage, {
			item:item
		});
	}

	
	changeCategory(){
		this.getPosts(this.category);
		localStorage.setItem('category',this.category);
	}

}
