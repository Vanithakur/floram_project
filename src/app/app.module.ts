import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { StaticComponent } from './component/home/static/static.component';
import { BannerComponent } from './component/home/banner/banner.component';
import { ProductsSectionComponent } from './component/home/products-section/products-section.component';
import { BlogComponent } from './component/home/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './component/home/contact/contact.component';
import { AboutComponent } from './component/home/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StaticComponent,
    BannerComponent,
    ProductsSectionComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
