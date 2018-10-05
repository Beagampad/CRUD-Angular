import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  crudUrl = 'http://localhost:3000'; // URL to web API de mi backend

  constructor(private http: HttpClient) { }

   /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
// Add new user
  addUser(username: string, nombre:string, apellidos: string, edad: string, email: string, password: string, activo: string): Observable<any> {
    console.log(email);
    const url = `${this.crudUrl}/add`; // ruta de mi back para el adduser
    return this.http.post<any>( url, {username: username, nombre: nombre, apellidos: apellidos, edad:edad, password: password, email: email, activo: activo}, httpOptions)
    .pipe(
    map(data => console.log(data)),
    catchError(this.handleError('addUser', 'error')));
  }
  // Get all users
  getUsers(): Observable<any> {
    const url = `${this.crudUrl}/consult`;
    return this.http.get<any>(url)
    .pipe(
      map(data => data),
       catchError(this.handleError('getUsers', []))
    );
  }
    // GET User by id 
  getUser(id: number): Observable<any> {
  console.log(id);
  const url = `${this.crudUrl}/detalles?id=${id}`;
  return this.http.get<any>(url).pipe(
    catchError(this.handleError<any>(`getUser id=${id}`))
    );
  }

   // POST: update the user on the server 
  updateUser (id: number, username: string, nombre:string, apellidos: string, edad: string, email: string, password: string, activo: string): Observable<any> {
    const url = `${this.crudUrl}/update`;
    console.log(username);
    return this.http.post<any>(url, {id: id, username: username, nombre: nombre, apellidos: apellidos, edad:edad, password: password, email: email, activo: activo}, httpOptions).pipe(
     catchError(this.handleError<any>(`updateUser`))
  );
}
   // Delete User by id 
   deleteUser(id: number): Observable<any> {
    console.log(id);
    const url = `${this.crudUrl}/delete?id=${id}`;
    return this.http.post<any>(url,{id: id}, httpOptions).pipe(
      catchError(this.handleError<any>(`deleteUser id=${id}`))
      );
    }
}
