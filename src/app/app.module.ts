import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsCategoriaComponent } from './components/cards/cards-categoria.component';
import { CardsProdutosComponent } from './components/cards-produtos/cards-produtos.component';
import { FeaturesIconsComponent } from './components/features-icons/features-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardsCategoriaComponent,
    CardsProdutosComponent,
    FeaturesIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
