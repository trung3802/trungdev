import { Component } from '@angular/core';

@Component({
  selector: 'app-phuongtrinh',
  templateUrl: './phuongtrinh.component.html',
  styleUrls: ['./phuongtrinh.component.css']
})
export class PhuongtrinhComponent {
  a1='';
  b1='';
  c1='';
  kq='';
  x1='';
  x2='';
  giaipt(){
    if(this.a1==''||this.b1==''|| this.c1==''){
  }
  else{
    var a=parseFloat(this.a1);
    var b=parseFloat(this.b1);
    var c=parseFloat(this.c1);
    var delta = b * b - 4 * a * c;

      if (delta < 0) {
        this.kq = 'Phương trình vô nghiệm';
      } else if (delta === 0) {
        this.kq = 'Phương trình có nghiệm kép';
        this.x1 = (-b / (2 * a)).toString();
      } else {
        this.kq = 'Phương trình có hai nghiệm';
        this.x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toString();
        this.x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toString();
      }
  }}


}
