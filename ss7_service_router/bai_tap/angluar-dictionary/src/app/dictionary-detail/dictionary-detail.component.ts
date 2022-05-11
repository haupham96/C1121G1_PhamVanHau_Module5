import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: Dictionary = {};
  id: number = 0;

  constructor(private service: DictionaryServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = parseInt(param.get('id'));
      this.dictionary = this.service.findById(this.id);
    })
  }


}
