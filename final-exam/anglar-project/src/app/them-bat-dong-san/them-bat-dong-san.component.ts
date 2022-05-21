import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DanhMuc} from '../model/danh-muc';
import {DanhMucService} from '../service/danh-muc.service';
import {BaiDangService} from '../service/bai-dang.service';
import {Router} from '@angular/router';
import {ModalDirective} from 'angular-bootstrap-md';
import {BaiDang} from '../model/bai-dang';

@Component({
  selector: 'app-them-bat-dong-san',
  templateUrl: './them-bat-dong-san.component.html',
  styleUrls: ['./them-bat-dong-san.component.scss']
})
export class ThemBatDongSanComponent implements OnInit {

  danhMucs: DanhMuc[] = [];
  baiDang: BaiDang = {};

  baiDangForm = new FormGroup({
    vungMien: new FormControl(),
    danhMuc: new FormControl(),
    banLa: new FormControl(),
    banDangTin: new FormControl(),
    tinhTrang: new FormControl(),
    diaChi: new FormControl('', [Validators.required]),
    dienTich: new FormControl('', [Validators.required, Validators.pattern('^[0]*[1-9]+[0-9]*([\.]([0-9]+))?$')]),
    huong: new FormControl(),
    tuaDe: new FormControl('', [Validators.required]),
    noiDung: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    gia: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
  });

  constructor(private danhMucService: DanhMucService,
              private baiDangService: BaiDangService,
              private router: Router) {
    this.danhMucService.getAllDanhMuc().subscribe(data => {
      this.danhMucs = data;
      let now = new Date();
      this.baiDangForm = new FormGroup({
        vungMien: new FormControl('Ha Noi'),
        danhMuc: new FormControl(this.danhMucs[0]),
        banLa: new FormControl('Ca Nhan'),
        banDangTin: new FormControl('Can Ban'),
        tinhTrang: new FormControl('Moi'),
        diaChi: new FormControl('', [Validators.required]),
        dienTich: new FormControl('', [Validators.required, Validators.pattern('^[0]*[1-9]+[0-9]*([\.]([0-9]+))?$')]),
        huong: new FormControl('Bac'),
        tuaDe: new FormControl('', [Validators.required]),
        noiDung: new FormControl('', [Validators.required, Validators.maxLength(250)]),
        gia: new FormControl('', [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
        ngayDang: new FormControl(now.toString())
      });
    });
  }

  ngOnInit(): void {
  }

  checkDienTich() {
    let dienTich = +this.baiDangForm.get('dienTich').value;
    if (dienTich <= 20) {
      this.baiDangForm.get('dienTich').setErrors({min20: true});
    }
  }

  checkGia() {
    let dienTich = +this.baiDangForm.get('gia').value;
    if (dienTich <= 100000000) {
      this.baiDangForm.get('gia').setErrors({giaMin: true});
    }
  }

  get diaChi() {
    return this.baiDangForm.get('diaChi');
  }

  get dienTich() {
    return this.baiDangForm.get('dienTich');
  }

  get tuaDe() {
    return this.baiDangForm.get('tuaDe');
  }

  get noiDung() {
    return this.baiDangForm.get('noiDung');
  }

  get gia() {
    return this.baiDangForm.get('gia');
  }

  themBaiDang(success: ModalDirective, erros: ModalDirective) {
    if (this.baiDangForm.valid) {
      let bai = Object.assign({}, this.baiDangForm.value);
      this.baiDangService.createBaiDang(bai).subscribe(() => {
        success.show();
      }, err => {
        erros.show();
        console.log(err);
      });
    }
  }

  thongTinBaiDang() {
    if (this.baiDangForm.valid) {
      this.baiDang = Object.assign({}, this.baiDangForm.value);
    }
  }
}
