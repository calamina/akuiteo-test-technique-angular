import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "personnes",
		loadChildren: () => import("./person/person.module").then(m => m.PersonModule),
		data: { animation: 'personnes' }
	},
	{
		path: "apropos",
		loadChildren: () => import("./about/about.module").then(m => m.AboutModule),
		data: { animation: 'apropos' }
	},
	{
		path: "",
		pathMatch: "full",
		redirectTo: "personnes"
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
