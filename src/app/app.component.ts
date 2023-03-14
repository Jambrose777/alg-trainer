import { Component, OnInit } from '@angular/core';
import { algList } from './constants';
import { Alg } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alg-trainer';
  randomAlgList?: Alg[];
  currentIndex = 0;
  currentAlg?: Alg;
  previousAlg?: Alg;
  checkList: Alg[] = [];

  ngOnInit() {
    this.randomAlgList = algList
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        this.getNextAlg();
      }
      if (event.code === 'KeyC') {
        this.addToChecklist();
      }
    });
    this.currentAlg = this.randomAlgList[0];
  }

  getNextAlg() {
    // endless mode
    // let nextAlg = algList[Math.floor(Math.random() * (algList.length))];
    //prevents the exact same alg from appearing twice in a row
    // if (nextAlg.name != this.currentAlg?.name) {
    //   this.previousAlg = this.currentAlg;
    //   this.currentAlg = nextAlg;
    // } else {
    //   this.getNextAlg();
    // }
    if (this.currentIndex < (this.randomAlgList?.length || 0)) {
      this.previousAlg = this.currentAlg;
      this.currentIndex++;
      this.currentAlg = this.randomAlgList?.[this.currentIndex];
    } else if (this.randomAlgList && this.currentIndex == this.randomAlgList.length) {
      this.randomAlgList = this.checkList;
      this.checkList = [];
      this.currentIndex = 0;
      this.currentAlg = this.randomAlgList[this.currentIndex];
    }
  }

  addToChecklist() {
    if (this.currentIndex > 0 && this.randomAlgList && !this.checkList.find(a => a.name === this.randomAlgList?.[this.currentIndex-1].name)) {
      this.checkList.push(this.randomAlgList[this.currentIndex-1]);
    }
  }

}
