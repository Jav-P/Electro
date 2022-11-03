import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { GeneralComponent } from './pages/general/general.component';

const routes: Routes = [
  {path:'',component: GeneralComponent,pathMatch:'full'},
  {path:'general',component: GeneralComponent},
  {path:'add',component: AddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
