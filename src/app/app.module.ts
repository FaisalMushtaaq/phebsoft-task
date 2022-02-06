import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAccordionComponent } from './custom-accordion/custom-accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomAccordionComponent,
    AccordionGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
