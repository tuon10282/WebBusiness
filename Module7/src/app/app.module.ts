import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingPropertyComponentComponent } from './binding-property-component/binding-property-component.component';
import { BindingClassComponentComponent } from './binding-class-component/binding-class-component.component';
import { BindingStyleComponentComponent } from './binding-style-component/binding-style-component.component';
import { BindingEventComponentComponent } from './binding-event-component/binding-event-component.component';
import { BindingTwoWayComponentComponent } from './binding-two-way-component/binding-two-way-component.component';
import { FormsModule } from '@angular/forms';
import { QuadraticModelComponent } from './quadratic-model/quadratic-model.component';
import { LunaryearmodelComponent } from './lunaryearmodel/lunaryearmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPropertyComponentComponent,
    BindingClassComponentComponent,
    BindingStyleComponentComponent,
    BindingEventComponentComponent,
    BindingTwoWayComponentComponent,
    QuadraticModelComponent,
    LunaryearmodelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule to the imports array,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
