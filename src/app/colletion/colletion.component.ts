import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import { NgxMasonryModule } from 'ngx-masonry';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-colletion',
  templateUrl: './colletion.component.html',
  styleUrls: ['./colletion.component.scss']
})

export class ColletionComponent implements OnInit {

  @NgModule({
    imports: [NgxMasonryModule]
  })
  
  ngOnInit() { 
    /*
    var $grid = $('.grid').isotope({
      itemSelector: 'article'
    });
    
    // filter buttons
    $('.filters-button-group').on( 'click', 'button', function() {
      alert("Xddd");
      var filterValue = $().attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    
    $(window).bind("load", function() {
      $('#all').click();
    });*/
} 
}
