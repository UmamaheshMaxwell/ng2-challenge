import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home";
import { MovieComponent } from "./movie/movie.component"
import { GameComponent } from "./game/game.component"

const routes : Routes = [
	{ path : "", component: HomeComponent},
	{ path : "movie", component: MovieComponent},
	{ path : "game", component: GameComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

export class AppRoutingModule {

}
