import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public loading$ = this.loadingSubject.asObservable();

  public showLoading(): void {
    this.loadingSubject.next(true);
  }

  public hideLoading(): void {
    this.loadingSubject.next(false);
  }
}
