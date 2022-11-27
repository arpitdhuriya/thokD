import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MidComponent } from './mid/mid.component';
import { MidServiceComponent } from './mid-service/mid-service.component';
import { AboutComponent } from './about/about.component';
import { HowComponent } from './how/how.component';
import { RecevivedComponent } from './recevived/recevived.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MidComponent,
    MidServiceComponent,
    AboutComponent,
    HowComponent,
    RecevivedComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
