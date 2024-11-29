import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarCartService {

  private carKey = 'carDetails';
  private carDetails: { car: any, imageUrl: string }[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {
    if (this.localStorageAvailable) {
      // Initialize carDetails from localStorage if available
      const storedDetails = localStorage.getItem(this.carKey);
      if (storedDetails) {
        this.carDetails = JSON.parse(storedDetails);
        this.updateCartCount();
      }
    }
  }

  private get localStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  setCarDetails(detail: { car: any, imageUrl: string }): void {
    this.carDetails.push(detail);
    this.saveToLocalStorage();
    this.updateCartCount();
  }

  addCarDetail(details: { car: any, imageUrl: string }): void {
    this.carDetails.push(details);
    this.saveToLocalStorage();
    this.updateCartCount();
  }

  getCarDetails(): { car: any, imageUrl: string }[] {
    return this.carDetails;
  }

  clearCarDetails(): void {
    if (this.localStorageAvailable) {
      localStorage.removeItem(this.carKey);
    }
    this.carDetails = [];
    this.updateCartCount();
  }

  getCount(): number {
    return this.carDetails.length;
  }

  private saveToLocalStorage(): void {
    if (this.localStorageAvailable) {
      localStorage.setItem(this.carKey, JSON.stringify(this.carDetails));
    }
  }

  private updateCartCount(): void {
    this.cartCountSubject.next(this.carDetails.length);
  }
}
