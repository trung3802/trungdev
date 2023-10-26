import { Component } from '@angular/core';

@Component({
  selector: 'app-tinhtong1n',
  templateUrl: './tinhtong1n.component.html',
  styleUrls: ['./tinhtong1n.component.css']
})
export class Tinhtong1nComponent {
  n: number = 10; // Thay đổi giá trị n tùy ý

  tinhTongTu1DenN(): number {
    return (this.n * (this.n + 1)) / 2;
  }
}
