import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import * as collectionsJson from '../collection.json'
import { Collections } from './collections';



@Component({
  selector: 'app-colletion',
  templateUrl: './colletion.component.html',
  styleUrls: ['./colletion.component.scss']
})

export class ColletionComponent implements OnInit  {
	masonryItems: Array<Collections> = Array.from(collectionsJson);
	constructor() {	}
	
	ngOnInit(): void { }
}
