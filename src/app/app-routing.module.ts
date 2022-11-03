import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoryComponent } from './pages/category/category.component';
import { GeneralComponent } from './pages/general/general.component';

const routes: Routes = [
  {path:'',component: GeneralComponent,pathMatch:'full'},
  {path:'brand',component: BrandComponent},
  {path:'category',component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
