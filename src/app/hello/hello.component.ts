import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
 chao="xin chào ae"
 sukien(){
  this.chao='đã nhấn sự kiện'
 }
}
