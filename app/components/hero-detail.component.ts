import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

import {Hero} from "./../objects/hero";
import {HeroService} from "./../services/hero.service";

@Component(
	{
		selector:    "my-hero-detail",
		templateUrl: "app/templates/hero-detail.component.html",
		styleUrls:   ["app/css/hero-detail.component.css"]
	}
)
export class HeroDetailComponent implements OnInit
{
	public hero: Hero;

	constructor(private _heroService: HeroService, private _routeParams: RouteParams)
	{

	}

	ngOnInit(): void
	{
		let id: number = +this._routeParams.get("id");
		this._heroService.getHero(id)
		    .then((hero: Hero) =>
		          {
			          this.hero = hero;
		          })
	}

	public goBack(): void
	{
		window.history.back();
	}
}