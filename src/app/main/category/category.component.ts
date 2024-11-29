import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/Weather/weather.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { car } from '../../types/car';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cars: car[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;
  searchId: any = '';
  pageIndex: number = 1;
  pageSize: number = 10;
  totalRecords: number = 0;

  constructor(private toastr: ToastrService, private service: WeatherService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  onSearch(): void {
    this.pageIndex = 1;
    this.loadCars();
  }

  deleteEmployee(carId: number): void {
    this.service.deleteCar(carId)
      .subscribe(
        () => {
          this.loadCars(); // Reload cars after deletion
        },
        (error: any) => {
          console.error('Error deleting car:', error);
          // Handle error
        }
      );
  }

  loadCars(): void {
    this.isLoading = true;
    console.log('Searching for:', this.searchId); // Add a log to debug the search text
    this.service.carlist({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      searchText: this.searchId
    }).subscribe(
      (response: any) => {
        if (response && response.lstModel) {
          this.cars = response.lstModel;
          this.totalRecords = response.totalRecords;
        } else {
          this.cars = [];
          this.totalRecords = 0;
        }
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching cars:', error);
        this.errorMessage = 'An error occurred while fetching cars';
        this.isLoading = false;
      }
    );
  }

  nextPage(): void {
    this.pageIndex++;
    this.loadCars();
  }

  prevPage(): void {
    if (this.pageIndex > 1) {
      this.pageIndex--;
      this.loadCars();
    }
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.totalRecords / this.pageSize);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }

  goToPage(page: number): void {
    this.pageIndex = page;
    this.loadCars();
  }
}
