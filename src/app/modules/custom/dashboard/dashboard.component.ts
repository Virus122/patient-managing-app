import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/data/api/api.service';
import { AllPatientsResponse, Patient, PatientDetails } from 'src/app/data/interfaces/patient.interface';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public patients?: PatientDetails[];

  public displayedPatients?: PatientDetails[];
  public numberOfResultsToShow = 5;

  // Pagination properties
  public currentPage = 1;
  public itemsPerPage = this.calculateItemsPerPage(); // Initialize itemsPerPage based on window width

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowWidth();
  }

  constructor(
    private apiService: ApiService,
    public loadingService: LoadingService
    ) {
      this.loadingService.loading$.subscribe()
    }

  ngOnInit(): void {
    this.loadPatients();
    this.checkWindowWidth();
  }

  // Pagination methods
  public onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedPatients();
  }

  public get totalPages(): number {
    if (!this.patients) return 0;
    return Math.ceil(this.patients.length / this.itemsPerPage);
  }

  private loadPatients(): void {
    this.apiService.getAllPatients().subscribe(
      (patientsObject: AllPatientsResponse) => {
        this.patients = patientsObject.patients;
        this.updateDisplayedPatients();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private updateDisplayedPatients(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedPatients = this.patients?.slice(startIndex, endIndex);
  }

  private calculateItemsPerPage(): number {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      return 3;
    } else if (window.innerWidth >= 1440) {
      return 5;
    } else {
      return 1;
    }
  }

  private checkWindowWidth(): void {
    const newItemsPerPage = this.calculateItemsPerPage();
    
    if (newItemsPerPage !== this.itemsPerPage) {
      // Calculate the current page based on the new itemsPerPage
      const firstItemIndex = (this.currentPage - 1) * this.itemsPerPage;
      this.currentPage = Math.ceil((firstItemIndex + 1) / newItemsPerPage);
    }
    
    this.itemsPerPage = newItemsPerPage;
    this.updateDisplayedPatients();
  }
}
