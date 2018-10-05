import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  angForm: FormGroup;
  user: IUser[] = [];

  constructor(private usersService: CrudService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {this.createForm(); }

  ngOnInit() {

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

  // Crear Usuario
  createUser(username, nombre, apellidos, edad, email, password, activo) {

    console.log(username);
    console.log(email);
    this.usersService.addUser(username, nombre, apellidos, edad,  email, password, activo)
      .subscribe(user => this.user = user );
    this.router.navigateByUrl('');
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
