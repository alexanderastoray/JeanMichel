import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-colletion',
  templateUrl: './colletion.component.html',
  styleUrls: ['./colletion.component.scss']
})

export class ColletionComponent implements OnInit  {

	  masonryItems = [
		{src: "https://source.unsplash.com/433x649/?Uruguay"},
		{src: "https://source.unsplash.com/530x572/?Jamaica"},
		{src: "https://source.unsplash.com/531x430/?Kuwait"},
		{src: "https://source.unsplash.com/586x1073/?Bermuda"},
		{src: "https://source.unsplash.com/500x571/?Ecuador"},
		{src: "https://source.unsplash.com/503x548/?Angola"},
		{src: "https://source.unsplash.com/511x630/?Mauritania"}
	  ];

	  constructor() { }
	
	  ngOnInit(): void { }
}
