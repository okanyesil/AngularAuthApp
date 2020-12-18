import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GirisComponent} from './giris/giris.component';
import {IcerikComponent} from './icerik/icerik.component';
import {AuthGuard} from './services/auth.guard';


const routes: Routes = [
  {path: '', component: GirisComponent},
  {path: 'icerik', component: IcerikComponent, canActivate: [AuthGuard]},
  {path: '**', component: IcerikComponent, canActivate: [AuthGuard]} // Link hatalı olduğunda içerik sayfasına yönlendiriyorum
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
