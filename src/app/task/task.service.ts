import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url: string = 'https://localhost:44321/api/tasks';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get(this.url, { observe: 'response' }).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  postTaks(task) {
    this._http
      .post(this.url, task, {
        headers: this.headers,
        responseType: 'text',
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteTask(id) {
    this._http.delete(this.url + '/' + id).subscribe((res) => {
      console.log(res);
    });
  }
}
