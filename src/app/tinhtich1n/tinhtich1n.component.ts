import { Component } from '@angular/core';

@Component({
  selector: 'app-tinhtich1n',
  templateUrl: './tinhtich1n.component.html',
  styleUrls: ['./tinhtich1n.component.css']
})
export class Tinhtich1nComponent {

  n: number = 10; // Thay đổi giá trị n tùy ý
  ketQua!: number;


  tinhTich(): void {
    this.ketQua = this.tinhTichTu1DenN(this.n);
  }

  tinhTichTu1DenN(n: number): number {
    let tich = 1;
    for (let i = 1; i <= n; i++) {
      tich *= i;
    }
    return tich;
  }
}
