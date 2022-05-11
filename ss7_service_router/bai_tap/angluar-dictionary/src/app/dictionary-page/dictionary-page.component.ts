import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {
  dictionaries: Array<Dictionary> = [];

  constructor(private dictionaryService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.dictionaries = this.dictionaryService.findAll();
  }

}
