import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  imageHeader: string = "bg_header.jpg"
  @Input() pageType: string="";

  headers = [
    {
      page: "index",
      image: "bg_header.jpg"
    },
    {
      page: "colletions",
      image: "bg_header.jpg"
    },
    {
      page: "exhibitions",
      image: "bg_exhibitions.jpg"
    },
    {
      page: "about",
      image: "bg_about.jpg"
    },
    {
      page: "events",
      image: "bg_events.jpg"
    },
    {
      page: "contact",
      image: "bg_contact.jpg"
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

  getImageHeader(){
    return this.headers.find((header) => header.page.match(this.pageType))?.image;
  }

}
