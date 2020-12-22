import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  clicked(event: MouseEvent) {
    console.log(event.target);
    (document.getElementById("top-menu-toggle") as HTMLInputElement).checked = false;
  }

}
