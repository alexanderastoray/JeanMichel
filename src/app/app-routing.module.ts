import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ColletionComponent } from './colletion/colletion.component';

const routes: Routes = [];

export const appRouteList: Routes = [
  {
      path: 'index',
      component: IndexComponent
  },
  {
      path: 'collections',
      component: ColletionComponent
  },
  {
      path: '',
      component: IndexComponent 
  }
];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
      RouterModule.forRoot(appRouteList)
  ]
})

export class AppRoutingModule { }
