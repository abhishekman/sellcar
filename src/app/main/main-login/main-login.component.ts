import { Component, OnInit, AfterViewInit, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { WeatherService } from '../../Service/Weather/weather.service';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { CarCount } from '../../types/car';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit, AfterViewInit {

  @ViewChild('lineChartCanvas', { static: false }) lineChartCanvas!: ElementRef<HTMLCanvasElement>;
  errorMessage: string | null = null;
  private isBrowser: boolean;
  currentDate: Date = new Date();

  constructor(
    private date: DatePipe,
    private cardashservice: WeatherService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      Chart.register(...registerables);
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.loadLineChart();
      // this.loadPieChart();
      // this.loadHistoricalChart();
    }
  }

  private loadLineChart(): void {
    if (!this.lineChartCanvas) {
      console.error('lineChartCanvas is not available');
      this.errorMessage = 'Canvas element is not available';
      return;
    }

    this.cardashservice.cardash().subscribe(
      (response: { model: CarCount[] }) => {
        const data = response.model;

        if (Array.isArray(data)) {
          const labels = data.map(d => d.color);
          const values = data.map(d => d.numberofCars);

          new Chart(this.lineChartCanvas.nativeElement, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [{
                label: 'Car Count OVER THE CAR',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',  
                },
                title: {
                  display: true,
                  text: 'Car Count Over Time'
                }
              },
              scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Color'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Count'
                  },
                  beginAtZero: true
                }
              }
            }
          });
        } else {
          console.error('Data is not an array:', data);
          this.errorMessage = 'Invalid data format received from the server.';
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching district counts:', error);
        this.errorMessage = 'An error occurred while fetching district counts';
      }
    );
  }

}
