import { Component, OnInit } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carpayment',
  templateUrl: './carpayment.component.html',
  styleUrls: ['./carpayment.component.css']
})
export class CarpaymentComponent implements OnInit {
  stripe: Stripe | null = null;
  card: any;
  clientSecret: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51PYiGmRuuD8TzNDXKt8KPgmVBBPZC79VGXnf8qb2TUszRTkvSmUpURBNRrb0q2XeailynyanvFuKXPxRZELCEJti005mvleBGk');
    if (this.stripe) {
      const elements = this.stripe.elements();
      this.card = elements.create('card');
      this.card.mount('#card-element');
    } else {
      console.error('Stripe failed to load.');
    }
  }

  async handlePayment() {
    // Call your backend to create the PaymentIntent
    this.http.post<{ clientSecret: string }>('http://localhost:5131/create-payment-intent', {})
      .subscribe(async (response) => {
        this.clientSecret = response.clientSecret;

        if (this.stripe) {
          const { paymentIntent, error } = await this.stripe.confirmCardPayment(
            this.clientSecret, {
              payment_method: {
                card: this.card,
                billing_details: {
                  name: 'Test User'
                }
              }
            }
          );

          if (error) {
            console.log('Payment error:', error);
          } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            window.alert('Payment Successful!');
            this.router.navigate(['/main/user-i']); // Replace with your target component route
          }
        } else {
          console.error('Stripe is not initialized');
        }
      });
  }
}
