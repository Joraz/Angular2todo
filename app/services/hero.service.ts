import {Injectable} from "angular2/core";

import {HEROES} from "./../objects/mock-heroes";
import {Hero} from "./../objects/hero";

@Injectable()
export class HeroService
{
	public getHeroes(): Promise<Array<Hero>>
	{
		return Promise.resolve(HEROES);
	}

	public getHero(id: number): Promise<Hero>
	{
		return Promise.resolve(HEROES)
		              .then((heroes: Array<Hero>) =>
		                    {
			                    return heroes.filter((hero: Hero) =>
			                                         {
				                                         return hero.id === id;
			                                         }).shift();
		                    });
	}
}