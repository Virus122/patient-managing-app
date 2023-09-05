import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { lastValue } from 'src/app/data/interfaces/values.interface';
import {  faHeartBroken, faStethoscope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-value-snippet',
  templateUrl: './value-snippet.component.html',
  styleUrls: ['./value-snippet.component.scss']
})
export class ValueSnippetComponent implements OnInit {

  icon?: IconDefinition
  @Input() field?: lastValue

  constructor() { }

  ngOnInit(): void {
    console.log(this.field)
  }

  private selectIcon(): void {
    switch(this.field?.fieldName) {
      case 'heart_rate': {
        this.icon = faHeartBroken
        break;
      }
      case 'temperature': {
        this.icon = faStethoscope
        break;
      }
      case 'bloodpressure': {
        this.icon = faStethoscope
        break;
      } 
      // case ''
    }
  }

}
