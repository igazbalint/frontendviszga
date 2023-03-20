import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent {
  text!: string;
  result: string = '';
  results: string[]= [];
  isEven!: boolean;

  decide() {
    let number = parseInt(this.text);
    if(isNaN(number)){console.error('adjon meg egy szamot')}
    if (number % 2 == 0) {
      this.isEven = true;
    } else this.isEven = false;

    console.log(this.isEven);
  }
  saveResult() {
    this.result = this.text;
    //this.results.push(this.text);
    //console.log(this.results);
    this.results.push(this.text);
    console.log(this.results)
  }
}
