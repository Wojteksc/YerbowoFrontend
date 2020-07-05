import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ProductCard } from 'src/app/_models/productCard';
import { ProductState } from 'src/app/_enums/productState.enum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductCard;
  productState: any = ProductState;
  constructor() { }

  ngOnInit() {
  }

}
