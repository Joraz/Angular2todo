import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";

import {Hero} from "./../objects/hero";
import {HeroService} from "./../services/hero.service";

@Component(
	{
		selector:    "my-dashboard",
		templateUrl: "app/templates/dashboard.component.html",
		styleUrls:   ["app/css/dashboard.component.css"]
	}
)
export class DashboardComponent implements OnInit
{
	public heroes: Array<Hero> = [];

	constructor(private _heroService: HeroService, private _router: Router)
	{
	}

	ngOnInit(): void
	{
		this._heroService.getHeroes()
		    .then((heroes: Array<Hero>) =>
		          {
			          this.heroes = heroes.slice(1, 5);
		          })
	}

	public goToDetail(hero: Hero): void
	{
		let link = ["HeroDetail", {id: hero.id}];
		this._router.navigate(link);
	}

}