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
      image: "header_index.jpg"
    },
    {
      page: "gallery",
      image: "header_gallery.jpg"
    },
    {
      page: "exhibitions",
      image: "header_exhibitions.jpg"
    },
    {
      page: "about",
      image: "header_about.jpg"
    },
    {
      page: "events",
      image: "header_events.jpg"
    },
    {
      page: "contact",
      image: "header_contact.jpg"
    }
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

  getImageHeader(){
    return this.imageHeader
  }

}
