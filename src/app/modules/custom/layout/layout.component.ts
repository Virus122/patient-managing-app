import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public loadingService: LoadingService
  ) {
    this.loadingService.loading$.subscribe()
   }

  ngOnInit(): void {
  }

}
