import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { OrderHistoryDetail } from 'src/app/_models/orderHistoryDetail';

@Component({
  selector: 'app-order-history-detail',
  templateUrl: './order-history-detail.component.html',
  styleUrls: ['./order-history-detail.component.css']
})
export class OrderHistoryDetailComponent implements OnInit {
  order: OrderHistoryDetail;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.order = data['orderDetail'];
    });
  }
}
