import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaiDang} from '../model/bai-dang';

@Injectable({
  providedIn: 'root'
})
export class BaiDangService {
  URL = 'http://localhost:8080/list';

  constructor(private http: HttpClient) {
  }

  getAllBaiDang(dienTich: string, gia: string, huong: string, page: number,sortSelect: string): Observable<any> {
    return this.http.get<any>(`${this.URL}?page=${page}&dienTich=${dienTich}&gia=${gia}&huong=${huong}&sortSelect=${sortSelect}`);
  }

  findBaiDangById(id: number): Observable<BaiDang> {
    return this.http.get<BaiDang>(`${this.URL}/${id}`);
  }

  createBaiDang(baiDang: BaiDang): Observable<BaiDang> {
    return this.http.post<BaiDang>(`${this.URL}`, baiDang);
  }

  editBaiDang(baiDang: BaiDang): Observable<BaiDang> {
    return this.http.put<BaiDang>(`${this.URL}/${baiDang.id}`, baiDang);
  }

  deleteBaiDang(baiDang: BaiDang): Observable<BaiDang> {
    return this.http.delete<BaiDang>(`${this.URL}/${baiDang.id}`);
  }

}
