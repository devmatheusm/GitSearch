import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, throwError, Observable } from 'rxjs';
import { Git } from '../models/git_root.model';

@Injectable({
  providedIn: 'root'
})
export class githubService {

  

  constructor(private httpClient:HttpClient) { }

  //procura o repositorio no github
  public getRepository(RepoSearch):Observable<Git>{
    let apiUrl = `https://api.github.com/search/repositories?q=${RepoSearch}`;
    return this.httpClient.get<Git>(apiUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      //erro do client
      errorMessage = 'Message: ${error.error.message}';
    }else{
      //erro do server
      errorMessage = 'Status: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(() => errorMessage);
  }
}
