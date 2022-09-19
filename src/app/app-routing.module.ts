import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./component/home/about/about.component";
import { BlogComponent } from "./component/home/blog/blog.component";
import { ContactComponent } from "./component/home/contact/contact.component";
import { HomeComponent } from "./component/home/home.component";
import { ProductsSectionComponent } from "./component/home/products-section/products-section.component";
const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent },
{path:'contact', component:ContactComponent},
{path:'fruits', component:ProductsSectionComponent},
{path:'blog', component:BlogComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
