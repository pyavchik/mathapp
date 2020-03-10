import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MathValidators} from '../math-validators';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [
    MathValidators.addition('answer', 'a', 'b'),
  ]);

  constructor() {

  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit() {
    this.mathForm.statusChanges.pipe(
      delay(500)
    ).subscribe((value) => {
      if (value === 'INVALID') {
        return;
      }
      this.mathForm.patchValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
      });
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

}
