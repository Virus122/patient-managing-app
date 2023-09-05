import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showOptions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleOptions(): void {
    this.showOptions = !this.showOptions;
    console.log(this.showOptions)
  }

}
