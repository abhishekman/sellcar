import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/Weather/weather.service';


@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css'] // Corrected `styleUrl` to `styleUrls`
})
export class LocateComponent implements OnInit {
  country: string = '';
  state: string = '';

  constructor(private service: WeatherService) {}

  ngOnInit(): void {}

  onSubmit() {
    const locationData = {
      country: this.country,
      state: this.state
    };

    this.service.addlocateData(locationData).subscribe(
      response => {
        console.log('Location data added successfully:', response);
      },
      error => {
        console.error('Error adding location data:', error);
      }
    );
  }
}
