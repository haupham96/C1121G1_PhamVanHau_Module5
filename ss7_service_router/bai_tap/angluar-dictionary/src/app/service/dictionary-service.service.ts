import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  private dictionaries: Array<Dictionary> = [
    {id: 1, eng: "one", viet: "một"},
    {id: 2, eng: "two", viet: "hai"},
    {id: 3, eng: "three", viet: "ba"},
    {id: 4, eng: "four", viet: "bốn"},
    {id: 5, eng: "five", viet: "năm"},
    {id: 6, eng: "six", viet: "sáu"},
    {id: 7, eng: "seven", viet: "bảy"},
    {id: 8, eng: "eight", viet: "tám"},
    {id: 9, eng: "nine", viet: "chín"},
    {id: 10, eng: "ten", viet: "mười"},
  ];

  findById(id: number) {
    return this.dictionaries.find(item => item.id == id);
  }

  findAll() {
    return this.dictionaries;
  }

  constructor() {
  }
}
