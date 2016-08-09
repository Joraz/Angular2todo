import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Http} from "angular2/http";

import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
	           selector:    "my-app",
	           templateUrl: "app/templates/app.component.html",
	           styleUrls:   ["app/css/app.component.css"],
	           providers:   [Http],
	           directives:  [ROUTER_DIRECTIVES]
           })
@RouteConfig([
	             {
		             path:      "/heroes",
		             name:      "Heroes",
		             component: HeroesComponent
	             },
	             {
		             path:         "/dashboard",
		             name:         "Dashboard",
		             component:    DashboardComponent,
		             useAsDefault: true
	             },
	             {
		             path:      "/detail/:id",
		             name:      "HeroDetail",
		             component: HeroDetailComponent
	             }
             ])
export class AppComponent
{
	public title: string = "Tour of Heroes";
}