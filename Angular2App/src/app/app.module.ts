import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashBoardComponent} from './dashboard.component';
let routing = [{
  path:'heroes',
  component : HeroComponent
},
{
  path:'dashboard',
  component:DashBoardComponent
  // redirectTo:'/dashboard',
  // pathMatch:'full'
}]
@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot(routing) ],
  declarations: [ AppComponent,HeroDetailComponent,HeroComponent,DashBoardComponent ],
  bootstrap:    [ AppComponent ],
  providers:[HeroService]
})
export class AppModule { }
