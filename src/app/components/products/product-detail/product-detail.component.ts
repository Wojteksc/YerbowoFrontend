import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductDetail } from 'src/app/_models/productDetail';
import { ProductService } from 'src/app/_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  product: ProductDetail;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.product = data['product'];
    });

    window.scrollTo(0, 0);
  }

}
