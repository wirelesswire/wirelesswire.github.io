import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HiringComponent } from './components/hiring/hiring.component';

const routes: Routes = [
  {path:"hiring",component:HiringComponent},
  {path:"**",component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
