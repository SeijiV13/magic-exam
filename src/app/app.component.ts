import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'magic-exam';
 array = [] ;
 height = 15;
 width = 15;
 levels = 0;
 dots = [];
 ngOnInit() {
    // this.printNumber();
    this.drawSpiral();
 }

  printNumber() {
    for(let i = 1; i <= 100; i++) {
      if(i % 5 == 0 && i % 3 == 0) {
        console.log('FunBar')
        this.array.push('FunBar');
      } else if (i % 3 == 0) {
        console.log('Fun')
        this.array.push('Fun');
      } else if(i % 5 == 0) {
        console.log('Bar')
        this.array.push('Bar')
      } else {
        console.log(i);
        this.array.push(i);
      }
    }
  }

  drawSpiral() {
     this.height = 15;
     let test = '';
     Object.assign(this.width, this.height)

     for(let i = 0; i < this.height; i ++) {
      if (this.levels % 2 === 0 ) {
            // test =  this.levels > 1 ? "*-" : "";
            for(let j = 0; j < this.width; j++) {
             test =  test + '*';
            };
            console.log(test);
            test = '';
            this.width-=2;
       }
       else {
        for(let j = 0; j < this.width; j++) {
          if(j == 0 || j === this.width - 2) {
            test = test + '*';
          } else {
            test = test + ' ';
          }

        };
        console.log(test);
        test = '';
       }
      this.levels ++;
     }
  }
}
