import { HighlightDirective } from './directives/highlight.directive';
import { ProductComponent } from './components/product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    PageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
