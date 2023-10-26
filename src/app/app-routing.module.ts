import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { PhuongtrinhComponent } from './phuongtrinh/phuongtrinh.component';
import { Tinhtong1nComponent } from './tinhtong1n/tinhtong1n.component';
import { Tinhtich1nComponent } from './tinhtich1n/tinhtich1n.component';
import { SoNguyenToComponent } from './so-nguyen-to/so-nguyen-to.component';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
},
{
  path: 'giaipt',
  component: PhuongtrinhComponent
},{
  path: 'tinhtong',
  component: Tinhtong1nComponent
},
{
  path: 'tinhtich',
  component: Tinhtich1nComponent
},
{
  path: 'nguyento',
  component: SoNguyenToComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
