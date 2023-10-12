import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageActive = 'index'

  constructor(private titleService:Title) {
    this.titleService.setTitle(environment.title);
  }

}
