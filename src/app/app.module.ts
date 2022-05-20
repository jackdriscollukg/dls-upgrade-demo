import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IgniteModule } from '@ignite/angular';
import { DatatableComponent } from './datatable/datatable.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';

@NgModule({
  declarations: [AppComponent, DatatableComponent, CheckboxesComponent],
  imports: [BrowserModule, IgniteModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
