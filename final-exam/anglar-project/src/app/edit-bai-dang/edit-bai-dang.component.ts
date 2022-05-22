import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DanhMuc} from '../model/danh-muc';
import {ModalDirective} from 'angular-bootstrap-md';
import {DanhMucService} from '../service/danh-muc.service';
import {BaiDangService} from '../service/bai-dang.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BaiDang} from '../model/bai-dang';

@Component({
  selector: 'app-edit-bai-dang',
  templateUrl: './edit-bai-dang.component.html',
  styleUrls: ['./edit-bai-dang.component.scss']
})
export class EditBaiDangComponent implements OnInit {

  baiDangForm = new FormGroup({
    id:new FormControl(),
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


  danhMucs: DanhMuc[] = [];

  constructor(private danhMucService: DanhMucService,
              private baiDangService: BaiDangService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let baiDang: BaiDang = {};
      let id = +param.get('id');
      this.baiDangService.findBaiDangById(id).subscribe(data => {
        baiDang = data;
        this.danhMucService.getAllDanhMuc().subscribe(data => {
          this.danhMucs = data;
          this.baiDangForm = new FormGroup({
            id:new FormControl(baiDang.id),
            vungMien: new FormControl(baiDang.vungMien),
            danhMuc: new FormControl(baiDang.danhMuc),
            banLa: new FormControl(baiDang.banLa),
            banDangTin: new FormControl(baiDang.banDangTin),
            tinhTrang: new FormControl(baiDang.tinhTrang),
            diaChi: new FormControl(baiDang.diaChi, [Validators.required]),
            dienTich: new FormControl(baiDang.dienTich, [Validators.required, Validators.pattern('^[0]*[1-9]+[0-9]*([\.]([0-9]+))?$')]),
            huong: new FormControl(baiDang.huong),
            tuaDe: new FormControl(baiDang.tuaDe, [Validators.required]),
            noiDung: new FormControl(baiDang.noiDung, [Validators.required, Validators.maxLength(250)]),
            gia: new FormControl(baiDang.gia, [Validators.required, Validators.pattern('^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$')]),
            ngayDang: new FormControl(baiDang.ngayDang)
          });
        });
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

  editBaiDang(success: ModalDirective, errorModal: ModalDirective) {
    if(this.baiDangForm.valid){
      let baiDang = Object.assign({}, this.baiDangForm.value);
      this.baiDangService.editBaiDang(baiDang).subscribe(() => {
        success.show();
      }, err => {
        errorModal.show();
        console.log(err);
      });
    }


  }

  reload() {
    window.location.reload();
  }

  compare(t1: DanhMuc, t2: DanhMuc): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
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


}
