import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdetailComponent } from './userdetail/userdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewuserComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
