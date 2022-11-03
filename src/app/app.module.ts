import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './pages/general/general.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddComponent } from './pages/add/add.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    NavbarComponent,
    AddComponent,
    SidebarComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
