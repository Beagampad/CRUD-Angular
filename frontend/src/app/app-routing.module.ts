import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewuserComponent } from 'src/app/newuser/newuser.component';
import { UsersComponent } from 'src/app/users/users.component';
import { UserdetailComponent } from 'src/app/userdetail/userdetail.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'add', component: NewuserComponent},
  {path: 'detalle/:id', component: UserdetailComponent},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
