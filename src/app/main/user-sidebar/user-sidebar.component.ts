import { Component ,OnInit} from '@angular/core';
import { CarCartService } from '../../Service/car-cart.service';
@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'] // Corrected styleUrls property
})
export class UserSidebarComponent implements OnInit {
  cartCount: number = 0;

  constructor(private carCartService: CarCartService) {}

  ngOnInit(): void {
    this.carCartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}