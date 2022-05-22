import {Component, OnInit} from '@angular/core';
import {BaiDang} from '../model/bai-dang';
import {BaiDangService} from '../service/bai-dang.service';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-list-bat-dong-san',
  templateUrl: './list-bat-dong-san.component.html',
  styleUrls: ['./list-bat-dong-san.component.scss']
})
export class ListBatDongSanComponent implements OnInit {

  baiDangs: BaiDang[] = [];

  baiDang: BaiDang = {};

  message = '';

  page = 0;
  totalPages = 0;

  dienTich = '';
  gia = '';
  huong = '';
  sortSelect = '';

  constructor(private baiDangService: BaiDangService) {
    this.loadAll();
  }

  loadAll() {
    this.baiDangService.getAllBaiDang('', '', '', this.page, this.sortSelect).subscribe(data => {
      this.baiDangs = data.content;
      this.page = data.number;
      this.totalPages = data.totalPages;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  search(dienTich: string, gia: string, huong: string, errorModal: ModalDirective) {
    this.baiDangService.getAllBaiDang(dienTich, gia, huong, this.page, this.sortSelect).subscribe(data => {
      this.baiDangs = data.content;
      this.totalPages = data.totalPages;
      this.page = data.number;
      if (this.baiDangs.length < 1) {
        this.message = 'KHÔNG TÌM THẤY !';
        errorModal.show();
      }
    }, err => {
      console.log(err);
    });
  }

  next() {
    if (this.page < this.totalPages - 1) {
      this.baiDangService.getAllBaiDang(this.dienTich, this.gia, this.huong, this.page + 1, this.sortSelect).subscribe(
        data => {
          this.baiDangs = data.content;
          this.page = data.number;
        }, err => {
          console.log(err);
        }
      );
    }
  }

  previous() {
    if (this.page > 0) {
      this.baiDangService.getAllBaiDang(this.dienTich, this.gia, this.huong, this.page - 1, this.sortSelect).subscribe(
        data => {
          this.baiDangs = data.content;
          this.page = data.number;
        }, err => {
          console.log(err);
        }
      );
    }
  }

  reload() {
    window.location.reload();
  }

  deleteBaiDang(deleteModal: ModalDirective, success: ModalDirective, errorModal: ModalDirective) {
    if (this.baiDang != null) {
      this.baiDangService.deleteBaiDang(this.baiDang).subscribe(() => {
        this.loadAll();
        deleteModal.hide();
        success.show();
      }, err => {
        this.message = 'XOÁ THẤT BẠI !';
        errorModal.show();
        console.log(err);
      });
    } else {
      errorModal.show();
    }
  }

  sendBaiBangInfo(baiDang: BaiDang) {
    this.baiDang = baiDang;
  }

  sortByPrice(sortSelect: string) {
    this.sortSelect = sortSelect;
    this.baiDangService.getAllBaiDang(this.dienTich, this.gia, this.huong, this.page, this.sortSelect).subscribe(
      data => {
        this.baiDangs = data.content;
        this.totalPages = data.totalPages;
      }
    );
  }
}
