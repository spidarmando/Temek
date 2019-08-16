import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Temek } from './pages/temek';

const routes: Routes = [
  {
    path: 'temek',
    component: Temek
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
