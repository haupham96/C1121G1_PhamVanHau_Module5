import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {
  URL = 'http://localhost:8080/category';

  constructor(private http: HttpClient) {
  }

  getAllDanhMuc(): Observable<any> {
    return this.http.get<any>(`${this.URL}`);
  }
}
