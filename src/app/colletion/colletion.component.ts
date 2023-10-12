import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-colletion',
  templateUrl: './colletion.component.html',
  styleUrls: ['./colletion.component.scss']
})

export class ColletionComponent implements OnInit {
  ngOnInit() { 
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
    });
} 
}
