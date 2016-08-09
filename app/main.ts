import {bootstrap} from "angular2/platform/browser";
import {ComponentRef} from "angular2/core";
import {ROUTER_PROVIDERS} from "angular2/router"
import {HTTP_PROVIDERS} from "angular2/http";

import {AppComponent} from "./components/app.component";
import {HeroService} from "./services/hero.service";

bootstrap(AppComponent, [HeroService, ROUTER_PROVIDERS, HTTP_PROVIDERS])
	.then((component: ComponentRef) =>
	      {
		      console.dir(component);
	      });