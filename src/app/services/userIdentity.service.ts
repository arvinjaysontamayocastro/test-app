import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { UserIdentity, UserIdentityActivate } from '../useridentity/userIdentity';
  
@Injectable({
  providedIn: 'root'
})
export class UserIdentityService {
  
  private apiURL = "http://localhost:5000/api";
    
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    patchhttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose'
      })
    }
   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/identities/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(userIdentity:UserIdentity): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/identities/', JSON.stringify(userIdentity), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/identities/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, userIdentity:UserIdentity): Observable<any> {
    return this.httpClient.put(this.apiURL + '/identities/' + id, JSON.stringify(userIdentity), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  setActive(id:number, userIdentityActivate:UserIdentityActivate): Observable<any> {
    return this.httpClient.patch(this.apiURL + '/identities/setactive/' + id, JSON.stringify(userIdentityActivate), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  // patch(id:number, userIdentity:any): Observable<any> {
  //   console.log("patch");
  //   console.log(userIdentity);

  //   var test = [
  //     {
  //       "op": "update",
  //       "path": "/isActive",
  //       "value": true
  //     }
  //   ];
  //   return this.httpClient.patch(this.apiURL + '/identities/' + id, JSON.stringify(test), this.httpOptions)
 
  //   .pipe( 
  //     catchError(this.errorHandler)
  //   )
  // }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  // delete(id:number){
  //   return this.httpClient.delete(this.apiURL + '/identities/' + id, this.httpOptions)
  
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}