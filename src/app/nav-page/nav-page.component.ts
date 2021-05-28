import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit {

  constructor() { }
  isCollapsed = true;
  ngOnInit(): void {
  }

}
