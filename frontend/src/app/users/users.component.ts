import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] = [];

  constructor(private usersService: CrudService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.usersService.getUsers()
        .subscribe(users => this.users = users);
  }

  /*getUserbyID(id): void {
    console.log(id);

    this.usersService.getUser(id)
        .subscribe(users => this.users = users);
  }*/

  deleteUser(id):void{
    console.log(id);
    this.usersService.deleteUser(id)
      .subscribe(()=>{return this.getUsers()});
  }

}
interface IUser {
  id: number;
  nombre: string;
  apellidos: string;
  username: string;
  edad: string;
  email: string;
  password : string;
  activo: string;
}
