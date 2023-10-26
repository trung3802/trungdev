import { Component } from '@angular/core';

@Component({
  selector: 'app-so-nguyen-to',
  templateUrl: './so-nguyen-to.component.html',
  styleUrls: ['./so-nguyen-to.component.css']
})
export class SoNguyenToComponent {
  m: number = 10;
  n: number = 50;
  primeNumbers: number[] = [];

  isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  findPrimesInRange() {
    this.primeNumbers = [];
    for (let num = this.m; num <= this.n; num++) {
      if (this.isPrime(num)) {
        this.primeNumbers.push(num);
      }
    }
  }
}
