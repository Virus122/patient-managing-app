import { Component, OnInit, Input } from '@angular/core';
import { snippetDetails } from 'src/app/data/interfaces/values.interface';
import {  faHeartBroken, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-detail-entry',
  templateUrl: './detail-entry.component.html',
  styleUrls: ['./detail-entry.component.scss']
})
export class DetailEntryComponent implements OnInit {
  icon?: IconDefinition

  @Input() details?: snippetDetails

  constructor() { }

  ngOnInit(): void {
    this.selectIcon()
  }

  private selectIcon(): void {
     switch(this.details?.iconClass) {
      case 'stethoscope': {
        this.icon = faStethoscope
        break;
      }
      case 'heart': {
        this.icon = faHeartBroken
        break;
      }
     }
  }

}
