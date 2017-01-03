import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
}