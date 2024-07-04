import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  topRatedProducts: any[] = [];
  specialOffers: any[] = [];
  bestSellers: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadTopRatedProducts();
    this.loadSpecialOffers();
    this.loadBestSellers();
  }

  loadTopRatedProducts() {
    this.productsService.getTopRatedProducts()
      .subscribe(products => {
        this.topRatedProducts = products;
      });
  }

  loadSpecialOffers() {
    this.productsService.getSpecialOffers()
      .subscribe(products => {
        this.specialOffers = products;
      });
  }

  loadBestSellers() {
    this.productsService.getBestsellers()
      .subscribe(products => {
        this.bestSellers = products;
      });
  }

}
