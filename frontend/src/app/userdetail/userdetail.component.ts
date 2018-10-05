import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import {  FormControl, FormGroup,  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  angForm: FormGroup;
  user: IUser[] = [];

  constructor(private router: Router, private route: ActivatedRoute,private usersService: CrudService, private fb: FormBuilder) {this.createForm();}

  ngOnInit() {
    this.getUser();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required ],
      nombre: ['', Validators.required ],
      apellidos: ['', Validators.required ],
      edad: ['', Validators.required],
      password: ['', Validators.required ],
      email: ['', Validators.required, Validators.email ],
      activo: ['', Validators.required]
   });
  }
// Obtiene los datos del usuario
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
     console.log(id);
   
      this.usersService.getUser(id)
        .subscribe(user => this.user = user) ;
     
  }
// Modifica los datos del usuario
  modifyUser(username, nombre, apellidos, edad, email, password, activo): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(username);
    this.usersService.updateUser(id, username, nombre, apellidos, edad, email, password, activo)
      .subscribe(user => this.user = user);

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
