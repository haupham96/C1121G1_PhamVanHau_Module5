import {DanhMuc} from './danh-muc';

export interface BaiDang {
  id?:number;
  vungMien?:string;
  danhMuc?:DanhMuc;
  banLa?:string;
  banDangTin?:string;
  tinhTrang?:string;
  diaChi?:string;
  dienTich?:string;
  huong?:string;
  tuaDe?:string;
  noiDung?:string;
  gia?:string;
  ngayDang?:string;
}
