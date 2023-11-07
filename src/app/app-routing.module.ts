import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ColletionComponent } from './colletion/colletion.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';

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
      path: 'exhibitions',
      component: ExhibitionsComponent 
  },
  {
    path: 'contact',
    component: ContactComponent 
  },
  {
    path: 'events',
    component: EventsComponent 
  },
  {
    path: 'about',
    component: AboutComponent 
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
