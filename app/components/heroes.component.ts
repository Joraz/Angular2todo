import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";

import {Hero} from "./../objects/hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./../services/hero.service";

@Component(
	{
		selector:    "my-heroes",
		templateUrl: "app/templates/heroes.component.html",
		styleUrls:   ["app/css/heroes.component.css"],
		directives:  [HeroDetailComponent],
		providers:   []
	}
)
export class HeroesComponent implements OnInit
{
	public selectedHero: Hero;

	public heroes: Array<Hero>;

	constructor(private _heroService: HeroService, private _router: Router)
	{

	}

	public ngOnInit()
	{
		this.getHeroes();
	}

	public onSelect(hero: Hero): void
	{
		this.selectedHero = hero;
	}

	public goToDetail() {
		this._router.navigate(["HeroDetail", {id: this.selectedHero.id}]);
	}

	private getHeroes(): void
	{
		this._heroService.getHeroes()
		    .then((heroes: Array<Hero>) =>
		          {
			          this.heroes = heroes;
		          });
	}
}